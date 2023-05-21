// Load the Google Charts API
google.charts.load('current', { 'packages': ['table'] });
google.charts.setOnLoadCallback(initilizePage);


// Allen's notes:  
// 4/27/23 - first draft, appears to be working pending a math check. 

// I added an "Average Daylight Hours" option to the losses chart to reflect solar site variables like weather, latitude, etc.
// 
// I didnt bother renaming most variables which might be misleading so disregard any references to "rx", "satellite" etc.
// While i commented out most portions of code that needed to be cut, i did also have to make some inline deletions,
// so beware that uncommenting the stuff i cut will not necessarily restore it to accurate Space Based Solar.
// 
// A couple of things i noticed: the math that was given to me does not factor the portion of energy reflected into the cost, though 
// it does show it in the diagram. As the reflected portion increases, the heating of the panel proportionately decreases. I guess this 
// might be correct for all i know about solar panels but thought it was worth mention.
// Second, the battery depth of discharge factor makes such a minute impact on the cost that i'm not sure why it's in the chart,
// though you may have your own reasons for having it there.
// 
// I also removed jQuery as it doesnt look like you're using it

function initilizePage() {

  // moved these to be 'global' vars
  var hoursInYear = 8760;
  var secondsInHour = 3600;

  function initLossesTableData(lossesTableData) {

    // Define the data for the editable table
    lossesTableData.addColumn('string', 'Label');
    lossesTableData.addColumn('number', 'State-of-The-Art Value');
    lossesTableData.addColumn('number', 'Aspirational Value');
    lossesTableData.addColumn('string', 'Unit');
    lossesTableData.addColumn('number', '% Improvement');
    lossesTableData.addRows([
      ['Baseload Power Delivered To Grid', 2, 2, 'GW', 0],
      ['Average Solar Irradiance', 1361, 1361, "W/m2", 0],  // Ranges from 1321 to 1414 throughout the year
      ['Solar Panel Cell Efficiency At Ref Temp', 0.2, 0.2, '', 0],
      ['Reference Temperature', 25, 25, '°C', 0],
      ['Solar Panel Temperature Efficiency Factor', 0.0045, 0.0045, '1/°C', 0],
      ['Solar Panel Operating Temperature', 30, 30, '°C', 0],
      ['Solar Absorptivity', 0.96, 0.96, '', 0],
      ['Latitude of Installation Site', 39.742043, 39.742043, 'degrees', 0], // defaults to Denver, roughly in the middle of the US?
      ['Horizon-to-Horizon Angle', 170, 170, 'degrees', 0], // Very site dependant
      ['Atmosphere Attenuation', 0.2, 0.2, '', 0],
      ['Dirt and Debris Attenuation', 0.1, 0.1, '', 0],
      ['Battery Voltage Management Factor', 0.95, 0.95, '', 0],
      ['Battery Depth Of Discharge Factor', 0.8, 0.8, '', 0],
      ['Battery Round Trip Efficiency', 0.8, 0.8, '', 0],
      ['DC to AC (Power Inverter Efficiency)', 0.9, 0.9, '', 0],
      ['Horizontal Power Transmisison Factor', 1, 1, 'USD/m', 0], // default to zero loss
    ]);

    initTable('lossesTable', lossesTableData);
  }

  function initCostsTableData(costsTableData) {
    // Define the data for the editable table
    costsTableData.addColumn('string', 'Label');
    costsTableData.addColumn('number', 'State-of-The-Art Value');
    costsTableData.addColumn('number', 'Aspirational Value');
    costsTableData.addColumn('string', 'Unit');
    costsTableData.addColumn('number', '% Improvement');
    costsTableData.addRows([
      ['Cost of Solar Panels', 300, 300, 'USD/m2', 0],
      ['Cost of Supporting Structure', 15, 15, 'USD/m2', 0],
      ['Cost of Li-Ion Battery Storage', 217, 217, 'USD/kWh', 0],
      ['Cost Factor for Battery Management Systems', 0.2, 0.2, '', 0],
      ['Cost of Capital', 0.05, 0.05, '', 0],
      ['Life of Project', 30, 30, 'Years', 0],
    ]);
    initTable('costsTable', costsTableData);
  }

  function initTable(tableID, tableData) {
    // Define options for the editable table
    var tableOptions = {
      showRowNumber: false,
      allowHtml: true // Allow HTML in the cells to make them editable
    };

    var table = new google.visualization.Table(document.getElementById(tableID));
    table.draw(tableData, tableOptions);

    google.visualization.events.addListener(table, 'select', selectHandler);

    var formatValue = new google.visualization.NumberFormat({
      pattern: '#,###.###'
    });

    function selectHandler() {
      var selection = table.getSelection();
      if (selection.length === 0)
        return;

      var cell = event.target; //get selected cell
      row = selection[0].row;
      col = cell.cellIndex;
      if (cell.cellIndex === 2) {
        cell.contentEditable = true;
        cell.addEventListener('blur', checkValue);
      }
      
      // enter confirms new value
      cell.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault(); // prevent default behavior of adding a newline
          cell.blur(); // blur the selected cell
        }
      });
      
      table.setSelection([]);
    }

    function checkValue(sender) {
      var rowIndex = sender.target.parentNode.rowIndex - 1;
      var value = parseFloat(sender.target.innerHTML);
      if (!isNaN(value)) {
        sender.target.innerHTML = formatValue.formatValue(value);
        document.getElementById('output').innerHTML = 'Value successfully changed.';
        tableData.setCell(rowIndex, 2, value, formatValue.formatValue(value));

        drawPage()

        // drawTable(tableID, tableData, outputData);
        // //console.log(tableID, tableData)
        // if (tableID === 'lossesTable') {
        //   drawLossesSankey(tableData, outputData);
        // }
        // else if (tableID === 'costsTable') {
        //   drawCostsSankey(tableData, outputData);
        // }
      }
      else {
        document.getElementById('output').innerHTML = 'Error: Value not a number.';
      }
      sender.target.contentEditable = false;
      sender.target.removeEventListener('blur', checkValue);
    }
  }

  // Create a function to draw the Sankey diagram
  function drawLossesSankey(tableData, lossesOutputData) {
    // Get the values from the editable table
    let row = 0
    var baseloadPowerDeliveredToGrid = parseFloat(tableData.getValue(row, 2)); row++;
    var averageSolarIrradiance = parseFloat(tableData.getValue(row, 2)); row++;
    var solarPanelEfficiencyAtRefTemp = parseFloat(tableData.getValue(row, 2)); row++;
    var referenceTemperature = parseFloat(tableData.getValue(row, 2)); row++;
    var solarPanelTemperatureEfficiencyFactor = parseFloat(tableData.getValue(row, 2)); row++;
    var operatingTemperature = parseFloat(tableData.getValue(row, 2)); row++;
    var solarPanelAbsorptivity = parseFloat(tableData.getValue(row, 2)); row++;
    var siteLatitudeInDegrees = parseFloat(tableData.getValue(row, 2)); row++;
    var horizonToHorizonAngleDegrees = parseFloat(tableData.getValue(row, 2)); row++;
    var atmosphereAttenuation = parseFloat(tableData.getValue(row, 2)); row++;
    var dirtAndDebrisAttenuation = parseFloat(tableData.getValue(row, 2)); row++;
    var energyStorageVoltageManagementFactor = parseFloat(tableData.getValue(row, 2)); row++;
    var energyStorageDepthOfDischargeFactor = parseFloat(tableData.getValue(row, 2)); row++;
    var energyStorageRoundTripEfficiency = parseFloat(tableData.getValue(row, 2)); row++;
    var rxPowerInverterEfficiency = parseFloat(tableData.getValue(row, 2)); row++;
    var horizontalPowerTransmissionFactor = parseFloat(tableData.getValue(row, 2)); row++;


    var powerInverterOutputPower = baseloadPowerDeliveredToGrid;
    var powerInverterInputPower = powerInverterOutputPower / rxPowerInverterEfficiency;

    // chatGPT function 
    // function getMinimumDaylightHours(latitude) {
    //   // Convert latitude to radians
    //   const latRad = latitude * Math.PI / 180;
    //   // Calculate the day of the year of the winter solstice
    //   const dec21 = new Date(new Date().getFullYear(), 11, 21);
    //   const solsticeMonth = latitude > 0 ? 11 : 5; // December or June
    //   const solsticeDate = new Date(new Date().getFullYear(), solsticeMonth, 21);
    //   const dayOfYear = Math.floor((solsticeDate - new Date(solsticeDate.getFullYear(), 0, 0)) / 86400000);
    //   // Calculate the solar declination angle for the winter solstice
    //   const solarDeclination = latitude > 0 ? -23.44 : 23.44;
    //   const solarDeclinationRad = solarDeclination * Math.PI / 180;
    //   // Calculate the hour angle of the sun at solar noon on the winter solstice
    //   const hourAngle = Math.acos(-Math.tan(latRad) * Math.tan(solarDeclinationRad));
    //   // Calculate the length of the day on the winter solstice in hours
    //   const dayLength = 24 * hourAngle / Math.PI;

    //   return dayLength;
    // }

    function getMinimumDaylightHours(siteLatitudeInDegrees, horizonToHorizonAngleDegrees) {
      // Convert latitude to radians
      console.log('siteLatitudeInDegrees', siteLatitudeInDegrees)
      const latitude = siteLatitudeInDegrees * Math.PI / 180;
      const sunHalfAngle = 0.5 / 2* Math.PI / 180;
      const nightDayBoundryAngle = (90 - horizonToHorizonAngleDegrees / 2) * Math.PI / 180;
      const earthsTiltAnglePlus90Degrees = -(90 + 23.44) * Math.PI / 180;
      const xOverR = (Math.sin(latitude)*Math.cos(earthsTiltAnglePlus90Degrees)-Math.sin(nightDayBoundryAngle-sunHalfAngle)) / (Math.sin(earthsTiltAnglePlus90Degrees)*Math.cos(latitude))
      const lengthOfDay = 24 * Math.acos(xOverR) / Math.PI;
      console.log(xOverR, Math.acos(xOverR), 'lengthOfDay', lengthOfDay)
      return lengthOfDay;
    }

    var minDaylightHours = getMinimumDaylightHours(siteLatitudeInDegrees, horizonToHorizonAngleDegrees);

    var timeInDarknessInSeconds = (24 - minDaylightHours) * secondsInHour;
    var energyStorageCapacityNeeded = baseloadPowerDeliveredToGrid * timeInDarknessInSeconds / energyStorageDepthOfDischargeFactor; // GJ
    var energyStorageRechargeTime = 24 * 3600 - timeInDarknessInSeconds; // s
    var energyStorageRechargePower = energyStorageCapacityNeeded * energyStorageDepthOfDischargeFactor / energyStorageRoundTripEfficiency / energyStorageRechargeTime / energyStorageVoltageManagementFactor; // GJ
    var energyLostInVoltageManagement = energyStorageRechargePower * (1 - energyStorageVoltageManagementFactor)

    var dcElectricalPower = (powerInverterInputPower + energyStorageRechargePower + energyLostInVoltageManagement);
    var solarPanelEfficiency = solarPanelEfficiencyAtRefTemp * (1 + solarPanelTemperatureEfficiencyFactor * (referenceTemperature - operatingTemperature));
    var absorbedSolarPower = dcElectricalPower / solarPanelEfficiency;
    var incidentSolarPower = absorbedSolarPower / solarPanelAbsorptivity;
    var reflectedSolarPower = incidentSolarPower * (1 - solarPanelAbsorptivity);

    var solarPowerNearPanel = incidentSolarPower / (1 - dirtAndDebrisAttenuation);
    var solarPowerLostToDirtAndDebris = solarPowerNearPanel * dirtAndDebrisAttenuation;
    var unattenuatedSolarPower = solarPowerNearPanel / (1 - atmosphereAttenuation);
    var solarPowerLostToAtmosphere = unattenuatedSolarPower * atmosphereAttenuation;

    var overallSystemEfficiency = baseloadPowerDeliveredToGrid / unattenuatedSolarPower;
    var solarPanelArrayArea = unattenuatedSolarPower * 1e9 / averageSolarIrradiance
    var solarPanelArrayDiameter = Math.sqrt(solarPanelArrayArea / Math.PI) * 2

    lossesOutputData['baseloadPowerDeliveredToGrid'] = baseloadPowerDeliveredToGrid
    lossesOutputData['solarPanelArrayArea'] = solarPanelArrayArea
    lossesOutputData['energyStorageCapacityNeeded'] = energyStorageCapacityNeeded
    lossesOutputData['overallSystemEfficiency'] = overallSystemEfficiency

    // ToDo
    // Losses
    // Add station-keeping power
    // Add panel to power transmitter Ohmic losses
    // Solar panel degradation over time
    // Number of satellites
    // Power Transmisson to Customers
    // Overall system efficiency

    // Costs
    // Maintenance
    // Cost of Capital
    // Percent of full power needed when satellite is in Earth's shadow

    // Other
    // Allow vertical zooming of the Sankey diagram
    // Implement percent improvement (using the appropriate trend curve)
    // Auto-impement percent improvement using the appropriate trend curve

    // Define the sankey chart options
    const chartWidth = 700;
    const chartHeight = 700;
    const sf = 1.25;
    const sf2 = 3;
    var options = {
      plotOptions: {
          series: {
            animation: false,
          },
        },
      title: {
        text: 'Terrestrial Solar Power Losses'
      },
      chart: {
        inverted: true,
        height: chartHeight,
        width: chartWidth * sf,
        spacingRight: 30,
        spacingLeft: 30,
        spacingTop: 30,
        spacingBottom: 30,
        zoomType: 'y'
      },
      series: [{
        keys: ['from', 'to', 'weight'],
        data: [
          ['Unattenuated Solar Power', 'Atmosphere Loss', solarPowerLostToAtmosphere],
          ['Unattenuated Solar Power', 'Solar Power Near Panel', solarPowerNearPanel],
          ['Solar Power Near Panel', 'Dirt and Debris Loss', solarPowerLostToDirtAndDebris],
          ['Solar Power Near Panel', 'Incident Solar Power', incidentSolarPower],
          ['Incident Solar Power', 'Reflected Energy', reflectedSolarPower],
          ['Incident Solar Power', 'Lost as Heat 1', incidentSolarPower - reflectedSolarPower - dcElectricalPower],
          ['Incident Solar Power', 'DC Electrical Power', dcElectricalPower],
          ['DC Electrical Power', 'Lost as Heat 2', energyStorageRechargePower * (1 - energyStorageVoltageManagementFactor)],
          ['DC Electrical Power', 'Energy Storage Recharge', energyStorageRechargePower],
          ['DC Electrical Power', 'DC Power at Inverter Input', powerInverterInputPower],
          ['DC Power at Inverter Input', 'Lost as Heat 3', powerInverterInputPower - powerInverterOutputPower],
          ['DC Power at Inverter Input', 'AC Power at Inverter Output', powerInverterOutputPower],
        ],
        type: 'sankey',
        nodeWidth: 30,
        nodePadding: 20,
        minLinkWidth: 1,  // Warning - may generate a misleading plot!
        borderRadius: 0,
        nodes: [
        {
          id: 'Unattenuated Solar Power',
          column: 0,
          name: 'Unattenuated Solar Power',
        }, {
          id: 'Atmosphere Loss',
          column: 1,
          name: 'Atmosphere Loss',
        }, {
          id: 'Solar Power Near Panel',
          column: 1,
          name: 'Solar Power Near Panel',
          //offset: chartHeight / 2 - chartHeight * (solarPowerNearPanel + solarPowerLostToAtmosphere) / (unattenuatedSolarPower * sf) / 2 + 1 * sf2,
        }, {
          id: 'Dirt and Debris Loss',
          column: 2,
          name: 'Dirt and Debris Loss',
        }, {
          id: 'Incident Solar Power',
          column: 2,
          name: 'Incident Solar Power',
          //offset: chartHeight / 2 - chartHeight * incidentSolarPower / (unattenuatedSolarPower * sf) / 2 + 1 * sf2,
        }, {
          id: 'Reflected Energy',
          column: 3,
          name: 'Reflected Energy',
        }, {
          id: 'Lost as Heat 1',
          column: 3,
          name: 'Lost as Heat',
          //offset: chartHeight / 8
        }, {
          id: 'DC Electrical Power',
          column: 3,
          name: 'DC Electrical Power',
          //offset: chartHeight / 3
          //offset: chartHeight / 2 - chartHeight * incidentSolarPower / (unattenuatedSolarPower * sf) / 2 + 1 * sf2,
        }, {
          id: 'Lost as Heat 2',
          column: 4,
          name: 'Lost as Heat',
        }, {
          id: 'Energy Storage Recharge',
          column: 4,
          name: 'Energy Storage Recharge',
          offset: chartHeight / 8
        }, {
          id: 'DC Power at Inverter Input',
          column: 4,
          name: 'DC Power at Inverter Input',
          offset: chartHeight / 2 - chartHeight * dcElectricalPower / (unattenuatedSolarPower * sf) / 2 + 1 * sf2,
        }, {
          id: 'Lost as Heat 3',
          column: 5,
          name: 'Lost as Heat',
        }, {
          id: 'AC Power at Inverter Output',
          column: 5,
          name: 'AC Power at Inverter Output',
          offset: chartHeight / 2 - chartHeight * powerInverterOutputPower / (unattenuatedSolarPower * sf) / 2 + 1 * sf2,
        }]
      }]
    };

    // Create the chart
    Highcharts.chart('lossesSankey', options);

  }

  function drawCostsSankey(tableData, lossesOutputData) {
    // Get the values from the editable table
    let row = 0
    var unitCostOfSolarPanels = parseFloat(tableData.getValue(row, 2)); row++;
    var unitCostOfSupportingStructure = parseFloat(tableData.getValue(row, 2)); row++;
    var unitCostOfLiIonBatteryStorage = parseFloat(tableData.getValue(row, 2)); row++;
    var costFactorforBatteryManagementSystems = parseFloat(tableData.getValue(row, 2)); row++;
    var costOfCapital = parseFloat(tableData.getValue(row, 2)); row++;
    var lifeofProject = parseFloat(tableData.getValue(row, 2)); row++;

    // Tally up component costs
    var costOfSolarPanelArray = unitCostOfSolarPanels * lossesOutputData['solarPanelArrayArea'];
    var costOfSolarPanelSupportingStructure = unitCostOfSupportingStructure * lossesOutputData['solarPanelArrayArea'];
    var unitCostOfLiIonBatteryStorageInUSDPerGJ = unitCostOfLiIonBatteryStorage * 1000000 / 3600;
    var costOfEnergyStorage = unitCostOfLiIonBatteryStorageInUSDPerGJ * lossesOutputData['energyStorageCapacityNeeded'] * (1 + costFactorforBatteryManagementSystems);
    var totalSatelliteComponentsCost = costOfSolarPanelArray + costOfSolarPanelSupportingStructure;

    var totalComponentsCost = totalSatelliteComponentsCost + costOfEnergyStorage;
    var satelliteCapitalCost = totalSatelliteComponentsCost;
    var totalCapitalCost = totalComponentsCost; // etc.

    var yearlyCapitalCost = totalCapitalCost * costOfCapital * (1 + costOfCapital) ** lifeofProject / ((1 + costOfCapital) ** lifeofProject - 1)
    console.log(totalSatelliteComponentsCost/1e9, costOfEnergyStorage/1e9, yearlyCapitalCost/1e9);
    // Other Costs not accounted for yet...
    // var costOfOperations = parseFloat(tableData.getValue(row, 2)); row++;
    // var costOfInsurance = parseFloat(tableData.getValue(row, 2)); row++;
    // var costOfMaintenance = parseFloat(tableData.getValue(row, 2)); row++;

    var yearlyCosts = yearlyCapitalCost // etc.
    var energyDeliveredToGridEachYearInGJ = lossesOutputData['baseloadPowerDeliveredToGrid'] * hoursInYear * secondsInHour // GJoules
    var energyDeliveredToGridEachYearInKiloWattHours = energyDeliveredToGridEachYearInGJ * 1000000 / secondsInHour
    var costOfEnergy = yearlyCosts / energyDeliveredToGridEachYearInKiloWattHours
    console.log('capitalCost', Math.round(totalCapitalCost / 1e9), 'B USD')
    console.log('costOfEnergy', costOfEnergy, 'USD/kWh')
    console.log('Relative Cost', Math.round(costOfEnergy / 0.05 * 100) / 100, 'times the current wholesale price of electricity in the US ($0.05/kWh)')

    costsOutput['capitalCost'] = totalCapitalCost;
    costsOutput['costOfEnergy'] = costOfEnergy;
    costsOutput['relativeCost'] = costOfEnergy / 0.05;

    // Define the sankey chart options
    const chartHeight = 300;
    const sf = 1.25;
    const sf2 = 3;
    var options = {
      plotOptions: {
        sankey: {
          // curveFactor: 0,
        },
        series: {
          animation: false,
        },
      },
      title: {
        text: 'Terrestrial Solar Power Costs'
      },
      chart: {
        height: chartHeight * sf,
        spacingRight: 30,
        spacingLeft: 30,
        spacingTop: 30,
        spacingBottom: 30,
        zoomType: 'y'
      },
      series: [{
        keys: ['from', 'to', 'weight'],
        data: [
          ['Solar Panels', 'Solar Assembly', costOfSolarPanelArray],
          ['Support Structure', 'Solar Assembly', costOfSolarPanelSupportingStructure],
          ['Solar Assembly', 'Installation Capital Cost', totalSatelliteComponentsCost],
          ['Energy Storage', 'Installation Capital Cost', costOfEnergyStorage],
          ['Installation Capital Cost', 'Total Capital Costs', satelliteCapitalCost + costOfEnergyStorage],
        ],
        type: 'sankey',
        nodeWidth: 30,
        nodePadding: 20,
        minLinkWidth: 1,  // Warning - may generate a misleading plot!
        borderRadius: 0,
        nodes: [{
          id: 'Solar Assembly',
          offsetVertical: -70,
        }]
      }]
    };

    // Create the chart
    Highcharts.chart('costsSankey', options);

  }

  const lossesTableData = new google.visualization.DataTable();
  const lossesOutputData = {};
  const costsTableData = new google.visualization.DataTable();
  var costsOutput = {}

  function drawPage() {

    // Draw the Sankey diagrams
    drawLossesSankey(lossesTableData, lossesOutputData);
    drawCostsSankey(costsTableData, lossesOutputData);

    // quick and dirty display of the cost values you have in the console
    document.getElementById('overallSystemEfficiency').innerHTML = (lossesOutputData['overallSystemEfficiency'] * 100).toFixed(2);
    document.getElementById('capitalCost').innerHTML = Math.round(costsOutput['capitalCost'] / 1e7)/1e2;
    document.getElementById('costOfEnergy').innerHTML = Math.round(costsOutput['costOfEnergy']*10000)/10000;
    document.getElementById('relativeCost').innerHTML = Math.round(costsOutput['relativeCost']*100)/100;
  }

  // Create the editable losses table
  initLossesTableData(lossesTableData);
  // Create the editable costs table
  initCostsTableData(costsTableData);

  drawPage();

}