// Load the Google Charts API
google.charts.load('current', { 'packages': ['table'] });
google.charts.setOnLoadCallback(initilizePage);

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
      ['Reference Temperature', 25, 25, 'B0C', 0],
      ['Solar Panel Temperature Efficiency Factor', 0.0045, 0.0045, '1/B0C', 0],
      ['Solar Panel Operating Temperature', -40, -40, 'B0C', 0],
      ['Solar Absorptivity', 0.96, 0.96, '', 0],
      ['Latitude of Ring', 0, 0, 'degrees', 0], // defaults to equator
      ['Ring Altitude', 32000, 32000, 'meters', 0],
      ['Average Coefficient of Drag', 0.25, 0.25, '', 0],
      ['Average Wind Speed', 28, 28, 'm/s', 0],
      ['Atmospheric Attenuation', 0.01, 0.01, '', 0],
      ['Dirt and Debris Attenuation', 0.001, 0.001, '', 0],
      ['Energy Storage Round Trip Efficiency', 0.8, 0.8, '', 0], // made up
      ['Energy Storage Voltage Management Factor', 0.95, 0.95, '', 0],
      ['Vertical Power Transmisison Factor', .9, .9, 'USD/m', 0],
      ['Horizontal Power Transmisison Factor', 1, 1, 'USD/m', 0], // default to zero loss
      ['DC to AC (Power Inverter Efficiency)', 0.9, 0.9, '', 0],
    ]);

    initTable('RBSlossesTable', lossesTableData);
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
      ['Mass of Solar Panels', 0.28, 0.28, "kg/m2", 0],
      ['Cost of Supporting Structure', 15, 15, 'USD/m2', 0],
      ['Mass of Supporting Structure', .14, .14, 'kg/m2', 0],
      ['Cost of Solar Actuators', .50, .50, 'percent of panel cost', 0], // made up
      ['Mass of Solar Actuators', .05, .05, 'kg/m2', 0], // made up
      ['Cost of Static Load', 113, 113, 'USD/kg', 0],
      ['Cost of Kinetic Storage', 100, 100, 'USD/kWh', 0], // made up
      ['Cost of Capital', 0.05, 0.05, 'interest rate', 0],
      ['Life of Project', 30, 30, 'Years', 0],
    ]);
    initTable('RBScostsTable', costsTableData);
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
    var siteAltitudeInMeters = parseFloat(tableData.getValue(row, 2)); row++;
    var avgCoefficientOfDrag = parseFloat(tableData.getValue(row, 2)); row++;
    var avgWindSpeedInMps = parseFloat(tableData.getValue(row, 2)); row++;
    var atmosphereAttenuation = parseFloat(tableData.getValue(row, 2)); row++;
    var dirtAndDebrisAttenuation = parseFloat(tableData.getValue(row, 2)); row++;
    var energyStorageRoundTripEfficiency = parseFloat(tableData.getValue(row, 2)); row++;
    var energyStorageVoltageManagementFactor = parseFloat(tableData.getValue(row, 2)); row++;
    var verticalPowerTransmissionFactor = parseFloat(tableData.getValue(row, 2)); row++;
    var horizontalPowerTransmissionFactor = parseFloat(tableData.getValue(row, 2)); row++;
    var rxPowerInverterEfficiency = parseFloat(tableData.getValue(row, 2)); row++;

    var verticalPowerTransmissionLoss = baseloadPowerDeliveredToGrid * (1 - verticalPowerTransmissionFactor);
    var powerInverterOutputPower = baseloadPowerDeliveredToGrid + verticalPowerTransmissionLoss;
    var powerInverterInputPower = powerInverterOutputPower / rxPowerInverterEfficiency;

    function h2hAngle(altitude) {
      const R = 6378137; // Earth's radius in meters
      const h = altitude;
      const angle = 2 * Math.acos(R / (R + h));
      const angleInDegrees = angle * (180 / Math.PI) + 180;
      return angleInDegrees;
    }

    var horizonToHorizonAngleDegrees = h2hAngle(siteAltitudeInMeters);
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
      const sunHalfAngle = 0.5 / 2 * Math.PI / 180;
      const nightDayBoundryAngle = (90 - horizonToHorizonAngleDegrees / 2) * Math.PI / 180;
      const earthsTiltAnglePlus90Degrees = -(90 + 23.44) * Math.PI / 180;
      const xOverR = (Math.sin(latitude) * Math.cos(earthsTiltAnglePlus90Degrees) - Math.sin(nightDayBoundryAngle - sunHalfAngle)) / (Math.sin(earthsTiltAnglePlus90Degrees) * Math.cos(latitude))
      const lengthOfDay = 24 * Math.acos(xOverR) / Math.PI;
      console.log(xOverR, Math.acos(xOverR), 'lengthOfDay', lengthOfDay)
      return lengthOfDay;
    }

    var minDaylightHours = getMinimumDaylightHours(siteLatitudeInDegrees, horizonToHorizonAngleDegrees);

    var timeInDarknessInSeconds = (24 - minDaylightHours) * secondsInHour;
    var energyStorageCapacityNeeded = baseloadPowerDeliveredToGrid * timeInDarknessInSeconds; // GJ
    var energyStorageRechargeTime = 24 * 3600 - timeInDarknessInSeconds; // s
    var energyStorageRechargePower = energyStorageCapacityNeeded / energyStorageRoundTripEfficiency / energyStorageRechargeTime / energyStorageVoltageManagementFactor; // GJ
    var energyLostInVoltageManagement = energyStorageRechargePower * (1 - energyStorageVoltageManagementFactor)

    var dcElectricalPower = (powerInverterInputPower + energyStorageRechargePower + energyLostInVoltageManagement);
    var windSpeed = avgWindSpeedInMps // m/s
    var ringAltitude = siteAltitudeInMeters // m
    //var airDensity = 0.0132 // kg/m3
    var airDensity = airDensityAtAltitude(ringAltitude) // kg/m3

    function airDensityAtAltitude(a) {
      const c_4 = -3.957854E-19
      const c_3 = 6.657616E-14
      const c_2 = -3.47217E-09
      const c_1 = -8.61651E-05
      const c_0 = 2.16977E-01
      const airDensityAtAltitude = Math.exp(c_4 * a ** 4 + c_3 * a ** 3 + c_2 * a ** 2 + c_1 * a + c_0)
      return airDensityAtAltitude
    }

    var Cd = avgCoefficientOfDrag  // Average Coefficient of Drag (assumes solar panels are actively oriented to maximize dcElectricalPower for given wind conditions)
    var solarPanelEfficiency = solarPanelEfficiencyAtRefTemp * (1 + solarPanelTemperatureEfficiencyFactor * (referenceTemperature - operatingTemperature));

    var solarPanelArrayArea = dcElectricalPower * 1e9 / (solarPanelEfficiency * (1 - atmosphereAttenuation) * (1 - dirtAndDebrisAttenuation) * averageSolarIrradiance - 0.5 * Cd * windSpeed ** 3 * airDensity)
    var solarPanelArrayDiameter = Math.sqrt(solarPanelArrayArea / Math.PI) * 2
    dcStationKeepingPower = 0.5 * Cd * windSpeed ** 3 * airDensity * solarPanelArrayArea / 1e9

    console.log('solarPanelArrayArea', solarPanelArrayArea)

    var dcPowerFromPanel = dcElectricalPower + dcStationKeepingPower

    var absorbedSolarPower = dcPowerFromPanel / solarPanelEfficiency;
    var incidentSolarPower = absorbedSolarPower / solarPanelAbsorptivity;
    var reflectedSolarPower = incidentSolarPower * (1 - solarPanelAbsorptivity);

    var unattenuatedSolarPower = incidentSolarPower / (1 - atmosphereAttenuation) / (1 - dirtAndDebrisAttenuation);
    var atmosphereAttenuatedSolarPower = unattenuatedSolarPower * atmosphereAttenuation;
    var dirtAndDebrisAttenuatedSolarPower = unattenuatedSolarPower * dirtAndDebrisAttenuation;

    var overallSystemEfficiency = baseloadPowerDeliveredToGrid / unattenuatedSolarPower;

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
        text: 'Ring-Based Solar Power Losses'
      },
      chart: {
        animation: false,
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
        keys: ['from', 'to', 'weight', 'outgoing', 'color'],
        data: [
          ['Unattenuated Solar Power', 'Atmosphere Attenuation', atmosphereAttenuatedSolarPower],
          ['Unattenuated Solar Power', 'Dirt and Debris Attenuation', dirtAndDebrisAttenuatedSolarPower],
          ['Unattenuated Solar Power', 'Incident Solar Power', incidentSolarPower],
          ['Atmosphere Attenuation', 'Reflected Energy', atmosphereAttenuatedSolarPower],
          ['Dirt and Debris Attenuation', 'Reflected Energy', dirtAndDebrisAttenuatedSolarPower],
          ['Incident Solar Power', 'Reflected Energy', reflectedSolarPower],
          ['Incident Solar Power', 'Lost as Heat', incidentSolarPower - reflectedSolarPower - dcPowerFromPanel],
          ['Incident Solar Power', 'DC Power From Panel', dcPowerFromPanel],
          ['DC Power From Panel', 'Station-Keeping Power', dcStationKeepingPower],
          ['DC Power From Panel', 'DC Electrical Power', dcElectricalPower],
          ['DC Electrical Power', 'Lost as Heat', energyStorageRechargePower * (1 - energyStorageVoltageManagementFactor)],
          ['DC Electrical Power', 'Energy Storage Recharge', energyStorageRechargePower],
          ['DC Electrical Power', 'DC Power at Inverter Input', powerInverterInputPower],
          ['DC Power at Inverter Input', 'Lost as Heat', powerInverterInputPower - powerInverterOutputPower],
          ['DC Power at Inverter Input', 'AC Power at Inverter Output', powerInverterOutputPower],
          ['AC Power at Inverter Output', 'Lost as Heat', verticalPowerTransmissionLoss],
          ['AC Power at Inverter Output', 'Delivered to Grid', baseloadPowerDeliveredToGrid, true, 'red'],
        ],
        type: 'sankey',
        nodeWidth: 30,
        nodePadding: 20,
        minLinkWidth: 2,  // Warning - may generate a misleading plot!
        borderRadius: 0,
        nodes: [
          {
            id: 'Unattenuated Solar Power',
            column: 0,
            name: 'Unattenuated Solar Power',
            // color: 'orange',
          }, {
            id: 'Atmospheric Attenuation',
            column: 1,
            name: 'Atmosphere Attenuation',
            offset: 100,
          }, {
            id: 'Dirt and Debris Attenuation',
            column: 1,
            name: 'Dirt and Debris Attenuation',
            // offset: chartWidth / 2 - chartWidth * incidentSolarPower / (unattenuatedSolarPower * sf) / 2 + 1 * sf2,
          }, {
            id: 'Incident Solar Power',
            column: 1,
            name: 'Incident Solar Power',
            // color: 'gold',
            // offset: chartWidth / 2 - chartWidth * incidentSolarPower / (unattenuatedSolarPower * sf) / 2 + 1 * sf2,
          }, {
            id: 'DC Power From Panel',
            column: 2,
            name: 'DC Power From Panel',
            offset: chartWidth / 2 - 45,
            // color: 'dodgerblue',
          }, {
            id: 'DC Electrical Power',
            column: 3,
            name: 'DC Electrical Power',
            offset: chartWidth / 2 - 45,
            // color: 'dodgerblue',
          }, {
            id: 'DC Power at Inverter Input',
            column: 4,
            name: 'DC Power at Inverter Input',
            offset: chartWidth / 2,
            // color: 'darkturquoise',
          }, {
            id: 'AC Power at Inverter Output',
            column: 5,
            offset: chartWidth / 2,
            // color: 'aquamarine',
          }, {
            id: 'Reflected Energy',
            column: 6,
          }, {
            id: 'Lost as Heat',
            column: 6,
          }, {
            id: 'Station-Keeping Power',
            column: 6,
          }, {
            id: 'Energy Storage Recharge',
            column: 6,
          }]
      }]
    };

    // Create the chart
    Highcharts.chart('RBSlossesSankey', options);

  }

  function drawCostsSankey(tableData, lossesOutputData) {
    // Get the values from the editable table
    let row = 0
    var unitCostOfSolarPanels = parseFloat(tableData.getValue(row, 2)); row++;
    var unitMassOfSolarPanels = parseFloat(tableData.getValue(row, 2)); row++;
    var unitCostOfSupportingStructure = parseFloat(tableData.getValue(row, 2)); row++;
    var unitMassOfSupportingStructure = parseFloat(tableData.getValue(row, 2)); row++;
    var unitCostofSolarActuators = parseFloat(tableData.getValue(row, 2)); row++;
    var unitMassOfSolarActuators = parseFloat(tableData.getValue(row, 2)); row++;
    var unitCostOfStaticLoad = parseFloat(tableData.getValue(row, 2)); row++;
    var costOfKineticEnergyStorage = parseFloat(tableData.getValue(row, 2)); row++;
    var costOfCapital = parseFloat(tableData.getValue(row, 2)); row++;
    var lifeofProject = parseFloat(tableData.getValue(row, 2)); row++;

    // Tally up component costs
    var costOfSolarPanelArray = unitCostOfSolarPanels * lossesOutputData['solarPanelArrayArea'];
    var costOfSolarPanelSupportingStructure = unitCostOfSupportingStructure * lossesOutputData['solarPanelArrayArea'];
    var costOfSolarActuators = costOfSolarPanelArray * unitCostofSolarActuators;
    var totalSatteliteComponentsCost = costOfSolarPanelArray + costOfSolarPanelSupportingStructure + costOfSolarActuators;

    // energy storage costs
    var unitCostOfKineticEnergyStorageinGJ = costOfKineticEnergyStorage * 1000000 / 3600;
    var costOfEnergyStorage = unitCostOfKineticEnergyStorageinGJ * lossesOutputData['energyStorageCapacityNeeded'];

    // mass calc for static load
    var massOfSolarPanelArray = unitMassOfSolarPanels * lossesOutputData['solarPanelArrayArea'];
    var massOfSolarActuators = unitMassOfSolarActuators * lossesOutputData['solarPanelArrayArea'];
    var massOfSolarPanelSupportingStructure = unitMassOfSupportingStructure * lossesOutputData['solarPanelArrayArea'];
    var totalMassSupported = massOfSolarPanelArray + massOfSolarPanelSupportingStructure + massOfSolarActuators;
    var costOfStaticLoad = totalMassSupported * unitCostOfStaticLoad;


    // var totalComponentsCost = totalSatteliteComponentsCost + costOfEnergyStorage + costOfStaticLoad;
    var satelliteCapitalCost = totalSatteliteComponentsCost;
    var totalCapitalCost = totalSatteliteComponentsCost + costOfEnergyStorage + costOfStaticLoad; // etc.

    var yearlyCapitalCost = totalCapitalCost * costOfCapital * (1 + costOfCapital) ** lifeofProject / ((1 + costOfCapital) ** lifeofProject - 1)
    console.log(totalSatteliteComponentsCost / 1e9, costOfEnergyStorage / 1e9, yearlyCapitalCost / 1e9);
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
        text: 'Ring-Based Solar Power Costs'
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
          ['Solar Actuators', 'Solar Assembly', costOfSolarActuators],
          ['Solar Assembly', 'Installation Capital Cost', totalSatteliteComponentsCost],
          ['Static Load Costs', 'Installation Capital Cost', costOfStaticLoad],
          ['Energy Storage', 'Installation Capital Cost', costOfEnergyStorage],
          ['Installation Capital Cost', 'Total Capital Costs', satelliteCapitalCost + costOfEnergyStorage + costOfStaticLoad],
        ],
        type: 'sankey',
        nodeWidth: 30,
        nodePadding: 20,
        minLinkWidth: 3,  // Warning - may generate a misleading plot!
        nodes: [{
          id: 'Solar Assembly',
          offsetVertical: -70,
        }]
      }]
    };

    // Create the chart
    Highcharts.chart('RBScostsSankey', options);

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
    document.getElementById('RBSoverallSystemEfficiency').innerHTML = (lossesOutputData['overallSystemEfficiency'] * 100).toFixed(2);
    document.getElementById('RBScapitalCost').innerHTML = Math.round(costsOutput['capitalCost'] / 1e7) / 1e2;
    document.getElementById('RBScostOfEnergy').innerHTML = Math.round(costsOutput['costOfEnergy'] * 10000) / 10000;
    document.getElementById('RBSrelativeCost').innerHTML = Math.round(costsOutput['relativeCost'] * 100) / 100;
  }

  // Create the editable losses table
  initLossesTableData(lossesTableData);
  // Create the editable costs table
  initCostsTableData(costsTableData);

  drawPage();

}