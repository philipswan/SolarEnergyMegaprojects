// Load the Google Charts API
google.charts.load("current", { packages: ["table"] });
google.charts.setOnLoadCallback(initilizePage);

let lossesTableRowData = [
  {
    label: "Baseload Power Delivered To Grid",
    stateOfTheArtValue: 2,
    aspirationalValue: 2,
    unit: "GW",
    percentImprovement: 0,
    popoverText:
      "According to the Solarsat.org FAQ, the microwave power link needs to be above 5GW to be efficient. The FAQ also estimates that a city of 1 million people needs approximately 2 GW of power. This number can be selected.",
    sources: ["https://solarsat.org/faq.htm", "https://google.com"],
  },
  {
    label: "Average Solar Irradiance",
    stateOfTheArtValue: 1361,
    aspirationalValue: 1361,
    unit: "W/m2",
    percentImprovement: 0,
    popoverText:
      "Ranges from 1321 to 1414 throughout the year. It might be more appropriate to use the min or max solar irradiance depending on what time of year the worst-case load/efficiency will occur (i.e. summer or winter).",
    sources: ["https://en.wikipedia.org/wiki/Solar_irradiance"],
  },
  {
    label: "Solar Panel Cell Efficiency At Ref Temp",
    stateOfTheArtValue: 0.2,
    aspirationalValue: 0.2,
    unit: "",
    percentImprovement: 0,
    popoverText:
      "The National Renewable Energy Laboratory provides efficiencies of many research cells. This value is not intended to be the highest value on that chart. This value is the efficiency, at a “reference temperature”, of the photovoltaic technology that achieves the highest Levelized Cost of Energy (LCoE).",
    sources: ["https://www.nrel.gov/pv/cell-efficiency.html"],
  },
  {
    label: "Reference Temperature",
    stateOfTheArtValue: 25,
    aspirationalValue: 25,
    unit: "°C",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Solar Panel Temperature Efficiency Factor",
    stateOfTheArtValue: 0.0045,
    aspirationalValue: 0.0045,
    unit: "1/°C",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Solar Panel Operating Temperature",
    stateOfTheArtValue: 30,
    aspirationalValue: 30,
    unit: "°C",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Solar Absorptivity",
    stateOfTheArtValue: 0.96,
    aspirationalValue: 0.96,
    unit: "",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Latitude of Installation Site",
    stateOfTheArtValue: 39.742043,
    aspirationalValue: 39.742043,
    unit: "degrees",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Horizon-to-Horizon Angle",
    stateOfTheArtValue: 170,
    aspirationalValue: 170,
    unit: "degrees",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Atmosphere Attenuation",
    stateOfTheArtValue: 0.2,
    aspirationalValue: 0.2,
    unit: "",
    percentImprovement: 0,
    popoverText:
      '"Atmospheric conditions can reduce direct beam radiation by 10% on clear, dry days and by 100% during thick, cloudy days."',
    sources: [
      "https://www.energy.gov/eere/solar/solar-radiation-basics#:~:text=The%20sum%20of%20the%20diffuse,%25%20during%20thick%2C%20cloudy%20days",
    ],
  },
  {
    label: "Dirt and Debris Attenuation",
    stateOfTheArtValue: 0.1,
    aspirationalValue: 0.1,
    unit: "",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Battery Voltage Management Factor",
    stateOfTheArtValue: 0.95,
    aspirationalValue: 0.95,
    unit: "",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Battery Depth Of Discharge Factor",
    stateOfTheArtValue: 0.8,
    aspirationalValue: 0.8,
    unit: "",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Battery Round Trip Efficiency",
    stateOfTheArtValue: 0.8,
    aspirationalValue: 0.8,
    unit: "",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "DC to AC (Power Inverter Efficiency)",
    stateOfTheArtValue: 0.9,
    aspirationalValue: 0.9,
    unit: "",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Horizontal Power Transmisison Factor",
    stateOfTheArtValue: 1,
    aspirationalValue: 1,
    unit: "USD/m",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
];

lossesTableRowData = lossesTableRowData.map((item) => {
  if (item.sources[0] != "") {
    let mobileLinksHTML = item.sources.reduce((acc, item, idx) => {
      return (acc += `<a href="${item}" class="mobile-link" target="_blank" rel="noopener noreferrer">View Source ${
        idx + 1
      }</a><br />`);
    }, "");

    let linksHTML = item.sources.reduce((acc, item, idx) => {
      return (acc += `<a href="${item}" target="_blank" rel="noopener noreferrer">View Source ${idx + 1}</a><br />`);
    }, "");

    return [
      `${item.label} ${mobileLinksHTML} <div class="popover"><div class="popover-inner">${item.popoverText} ${linksHTML}</div></div>`,
      item.stateOfTheArtValue,
      item.aspirationalValue,
      item.unit,
      item.percentImprovement,
    ];
  } else {
    return [item.label, item.stateOfTheArtValue, item.aspirationalValue, item.unit, item.percentImprovement];
  }
});

// console.log(lossesTableRowData);

// <a href="https://www.eia.gov/tools/faqs/faq.php?id=427&t=3" class="mobile-link">View Source</a>
// <div class="popover"><div class="popover-inner">
// According to the Solarsat.org FAQ, the microwave power link needs to be above 5GW to be efficient.
// The FAQ also estimates that a city of 1 million people needs approximately 2 GW of power. This number can be selected.
// <a href="https://www.eia.gov/tools/faqs/faq.php?id=427&t=3" target="_blank" rel="noopener noreferrer">View Source</a>
// </div></div>

function initilizePage() {
  // moved these to be 'global' vars
  var hoursInYear = 8760;
  var secondsInHour = 3600;

  function initLossesTableData(lossesTableData) {
    // Define the data for the editable table
    lossesTableData.addColumn("string", "Label");
    lossesTableData.addColumn("number", "State-of-The-Art Value");
    lossesTableData.addColumn("number", "Aspirational Value");
    lossesTableData.addColumn("string", "Unit");
    lossesTableData.addColumn("number", "% Improvement");
    lossesTableData.addRows(lossesTableRowData);

    initTable("TSlossesTable", lossesTableData);
  }

  function initCostsTableData(costsTableData) {
    // Define the data for the editable table
    costsTableData.addColumn("string", "Label");
    costsTableData.addColumn("number", "State-of-The-Art Value");
    costsTableData.addColumn("number", "Aspirational Value");
    costsTableData.addColumn("string", "Unit");
    costsTableData.addColumn("number", "% Improvement");
    costsTableData.addRows([
      ["Cost of Solar Panels", 300, 300, "USD/m2", 0],
      ["Cost of Supporting Structure", 15, 15, "USD/m2", 0],
      ["Cost of Li-Ion Battery Storage", 217, 217, "USD/kWh", 0],
      ["Cost Factor for Battery Management Systems", 0.2, 0.2, "", 0],
      ["Cost of Capital", 0.05, 0.05, "", 0],
      ["Life of Project", 30, 30, "Years", 0],
    ]);
    initTable("TScostsTable", costsTableData);
  }

  function initTable(tableID, tableData) {
    // Define options for the editable table
    var tableOptions = {
      showRowNumber: false,
      allowHtml: true, // Allow HTML in the cells to make them editable
    };

    var table = new google.visualization.Table(document.getElementById(tableID));
    table.draw(tableData, tableOptions);

    google.visualization.events.addListener(table, "select", selectHandler);

    var formatValue = new google.visualization.NumberFormat({
      pattern: "#,###.###",
    });

    function selectHandler() {
      var selection = table.getSelection();
      if (selection.length === 0) return;

      var cell = event.target; //get selected cell
      row = selection[0].row;
      col = cell.cellIndex;
      if (cell.cellIndex === 2) {
        cell.contentEditable = true;
        cell.addEventListener("blur", checkValue);
      }

      // enter confirms new value
      cell.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
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
        document.getElementById("output").innerHTML = "Value successfully changed.";
        tableData.setCell(rowIndex, 2, value, formatValue.formatValue(value));

        drawPage();

        // drawTable(tableID, tableData, outputData);
        // //console.log(tableID, tableData)
        // if (tableID === 'lossesTable') {
        //   drawLossesSankey(tableData, outputData);
        // }
        // else if (tableID === 'costsTable') {
        //   drawCostsSankey(tableData, outputData);
        // }
      } else {
        document.getElementById("output").innerHTML = "Error: Value not a number.";
      }
      sender.target.contentEditable = false;
      sender.target.removeEventListener("blur", checkValue);
    }
  }

  // Create a function to draw the Sankey diagram
  function drawLossesSankey(tableData, lossesOutputData) {
    // Get the values from the editable table
    let row = 0;
    var baseloadPowerDeliveredToGrid = parseFloat(tableData.getValue(row, 2));
    row++;
    var averageSolarIrradiance = parseFloat(tableData.getValue(row, 2));
    row++;
    var solarPanelEfficiencyAtRefTemp = parseFloat(tableData.getValue(row, 2));
    row++;
    var referenceTemperature = parseFloat(tableData.getValue(row, 2));
    row++;
    var solarPanelTemperatureEfficiencyFactor = parseFloat(tableData.getValue(row, 2));
    row++;
    var operatingTemperature = parseFloat(tableData.getValue(row, 2));
    row++;
    var solarPanelAbsorptivity = parseFloat(tableData.getValue(row, 2));
    row++;
    var siteLatitudeInDegrees = parseFloat(tableData.getValue(row, 2));
    row++;
    var horizonToHorizonAngleDegrees = parseFloat(tableData.getValue(row, 2));
    row++;
    var atmosphereAttenuation = parseFloat(tableData.getValue(row, 2));
    row++;
    var dirtAndDebrisAttenuation = parseFloat(tableData.getValue(row, 2));
    row++;
    var energyStorageVoltageManagementFactor = parseFloat(tableData.getValue(row, 2));
    row++;
    var energyStorageDepthOfDischargeFactor = parseFloat(tableData.getValue(row, 2));
    row++;
    var energyStorageRoundTripEfficiency = parseFloat(tableData.getValue(row, 2));
    row++;
    var rxPowerInverterEfficiency = parseFloat(tableData.getValue(row, 2));
    row++;
    var horizontalPowerTransmissionFactor = parseFloat(tableData.getValue(row, 2));
    row++;

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
      console.log("siteLatitudeInDegrees", siteLatitudeInDegrees);
      const latitude = (siteLatitudeInDegrees * Math.PI) / 180;
      const sunHalfAngle = ((0.5 / 2) * Math.PI) / 180;
      const nightDayBoundryAngle = ((90 - horizonToHorizonAngleDegrees / 2) * Math.PI) / 180;
      const earthsTiltAnglePlus90Degrees = (-(90 + 23.44) * Math.PI) / 180;
      const xOverR =
        (Math.sin(latitude) * Math.cos(earthsTiltAnglePlus90Degrees) - Math.sin(nightDayBoundryAngle - sunHalfAngle)) /
        (Math.sin(earthsTiltAnglePlus90Degrees) * Math.cos(latitude));
      const lengthOfDay = (24 * Math.acos(xOverR)) / Math.PI;
      console.log(xOverR, Math.acos(xOverR), "lengthOfDay", lengthOfDay);
      return lengthOfDay;
    }

    var minDaylightHours = getMinimumDaylightHours(siteLatitudeInDegrees, horizonToHorizonAngleDegrees);

    var timeInDarknessInSeconds = (24 - minDaylightHours) * secondsInHour;
    var energyStorageCapacityNeeded =
      (baseloadPowerDeliveredToGrid * timeInDarknessInSeconds) / energyStorageDepthOfDischargeFactor; // GJ
    var energyStorageRechargeTime = 24 * 3600 - timeInDarknessInSeconds; // s
    var energyStorageRechargePower =
      (energyStorageCapacityNeeded * energyStorageDepthOfDischargeFactor) /
      energyStorageRoundTripEfficiency /
      energyStorageRechargeTime /
      energyStorageVoltageManagementFactor; // GJ
    var energyLostInVoltageManagement = energyStorageRechargePower * (1 - energyStorageVoltageManagementFactor);

    var dcElectricalPower = powerInverterInputPower + energyStorageRechargePower + energyLostInVoltageManagement;
    var solarPanelEfficiency =
      solarPanelEfficiencyAtRefTemp *
      (1 + solarPanelTemperatureEfficiencyFactor * (referenceTemperature - operatingTemperature));
    var absorbedSolarPower = dcElectricalPower / solarPanelEfficiency;
    var incidentSolarPower = absorbedSolarPower / solarPanelAbsorptivity;
    var reflectedSolarPower = incidentSolarPower * (1 - solarPanelAbsorptivity);

    var unattenuatedSolarPower = incidentSolarPower / (1 - atmosphereAttenuation) / (1 - dirtAndDebrisAttenuation);
    var atmosphereAttenuatedSolarPower = unattenuatedSolarPower * atmosphereAttenuation;
    var dirtAndDebrisAttenuatedSolarPower = unattenuatedSolarPower * dirtAndDebrisAttenuation;

    var overallSystemEfficiency = baseloadPowerDeliveredToGrid / unattenuatedSolarPower;
    var solarPanelArrayArea = (unattenuatedSolarPower * 1e9) / averageSolarIrradiance;
    var solarPanelArrayDiameter = Math.sqrt(solarPanelArrayArea / Math.PI) * 2;

    lossesOutputData["baseloadPowerDeliveredToGrid"] = baseloadPowerDeliveredToGrid;
    lossesOutputData["solarPanelArrayArea"] = solarPanelArrayArea;
    lossesOutputData["energyStorageCapacityNeeded"] = energyStorageCapacityNeeded;
    lossesOutputData["overallSystemEfficiency"] = overallSystemEfficiency;

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
        text: "Terrestrial Solar Power Losses",
      },
      chart: {
        inverted: true,
        height: chartHeight,
        width: chartWidth * sf,
        spacingRight: 30,
        spacingLeft: 30,
        spacingTop: 30,
        spacingBottom: 30,
        zoomType: "y",
      },
      series: [
        {
          keys: ["from", "to", "weight"],
          data: [
            ["Unattenuated Solar Power", "Atmosphere Attenuation", atmosphereAttenuatedSolarPower],
            ["Unattenuated Solar Power", "Dirt and Debris Attenuation", dirtAndDebrisAttenuatedSolarPower],
            ["Atmosphere Attenuation", "Reflected Energy", atmosphereAttenuatedSolarPower],
            ["Dirt and Debris Attenuation", "Reflected Energy", dirtAndDebrisAttenuatedSolarPower],
            ["Unattenuated Solar Power", "Incident Solar Power", incidentSolarPower],
            ["Incident Solar Power", "Reflected Energy", reflectedSolarPower],
            ["Incident Solar Power", "Lost as Heat", incidentSolarPower - reflectedSolarPower - dcElectricalPower],
            ["Incident Solar Power", "DC Electrical Power", dcElectricalPower],
            [
              "DC Electrical Power",
              "Lost as Heat",
              energyStorageRechargePower * (1 - energyStorageVoltageManagementFactor),
            ],
            ["DC Electrical Power", "Energy Storage Recharge", energyStorageRechargePower],
            ["DC Electrical Power", "DC Power at Inverter Input", powerInverterInputPower],
            ["DC Power at Inverter Input", "Lost as Heat", powerInverterInputPower - powerInverterOutputPower],
            ["DC Power at Inverter Input", "AC Power at Inverter Output", powerInverterOutputPower],
          ],
          type: "sankey",
          nodeWidth: 30,
          nodePadding: 20,
          minLinkWidth: 2, // Warning - may generate a misleading plot!
          nodes: [
            {
              id: "Unattenuated Solar Power",
              column: 0,
              name: "Unattenuated Solar Power",
            },
            {
              id: "Atmospheric Attenuation",
              column: 1,
              name: "Atmosphere Attenuation",
              //offsetVertical: chartHeight / 2 - chartHeight * incidentSolarPower / (unattenuatedSolarPower * sf) / 2 + 1 * sf2,
            },
            {
              id: "Dirt and Debris Attenuation",
              column: 1,
              name: "Dirt and Debris Attenuation",
              //offsetVertical: chartHeight / 2 - chartHeight * incidentSolarPower / (unattenuatedSolarPower * sf) / 2 + 1 * sf2,
            },
            {
              id: "Incident Solar Power",
              column: 1,
              name: "Incident Solar Power",
              //offsetVertical: chartHeight / 2 - chartHeight * incidentSolarPower / (unattenuatedSolarPower * sf) / 2 + 1 * sf2,
            },
            {
              id: "DC Electrical Power",
              column: 2,
              name: "DC Electrical Power",
              offset: chartWidth / 2 - 5,
            },
            {
              id: "DC Power at Inverter Input",
              column: 3,
              name: "DC Power at Inverter Input",
              offset: chartHeight / 2 + 30, //chartWidth * powerInverterInputPower/(incidentSolarPower*sf) + 7*sf2,
            },
            {
              id: "Reflected Energy",
              column: 4,
              name: "Reflected Energy",
            },
            {
              id: "Heating of Panel",
              column: 4,
              name: "Heating of Panel",
            },
            {
              id: "Heating of Earth",
              column: 4,
              name: "Heating of Earth",
            },
            {
              id: "AC Power at Inverter Output",
              column: 4,
              name: "AC Power at Inverter Output",
            },
            {
              id: "Energy Storage Recharge",
              column: 4,
              name: "Energy Storage Recharge",
            },
          ],
        },
      ],
    };

    // Create the chart
    Highcharts.chart("TSlossesSankey", options);
  }

  function drawCostsSankey(tableData, lossesOutputData) {
    // Get the values from the editable table
    let row = 0;
    var unitCostOfSolarPanels = parseFloat(tableData.getValue(row, 2));
    row++;
    var unitCostOfSupportingStructure = parseFloat(tableData.getValue(row, 2));
    row++;
    var unitCostOfLiIonBatteryStorage = parseFloat(tableData.getValue(row, 2));
    row++;
    var costFactorforBatteryManagementSystems = parseFloat(tableData.getValue(row, 2));
    row++;
    var costOfCapital = parseFloat(tableData.getValue(row, 2));
    row++;
    var lifeofProject = parseFloat(tableData.getValue(row, 2));
    row++;

    // Tally up component costs
    var costOfSolarPanelArray = unitCostOfSolarPanels * lossesOutputData["solarPanelArrayArea"];
    var costOfSolarPanelSupportingStructure = unitCostOfSupportingStructure * lossesOutputData["solarPanelArrayArea"];
    var unitCostOfLiIonBatteryStorageInUSDPerGJ = (unitCostOfLiIonBatteryStorage * 1000000) / 3600;
    var costOfEnergyStorage =
      unitCostOfLiIonBatteryStorageInUSDPerGJ *
      lossesOutputData["energyStorageCapacityNeeded"] *
      (1 + costFactorforBatteryManagementSystems);
    var totalSatelliteComponentsCost = costOfSolarPanelArray + costOfSolarPanelSupportingStructure;

    var totalComponentsCost = totalSatelliteComponentsCost + costOfEnergyStorage;
    var satelliteCapitalCost = totalSatelliteComponentsCost;
    var totalCapitalCost = totalComponentsCost; // etc.

    var yearlyCapitalCost =
      (totalCapitalCost * costOfCapital * (1 + costOfCapital) ** lifeofProject) /
      ((1 + costOfCapital) ** lifeofProject - 1);
    console.log(totalSatelliteComponentsCost / 1e9, costOfEnergyStorage / 1e9, yearlyCapitalCost / 1e9);
    // Other Costs not accounted for yet...
    // var costOfOperations = parseFloat(tableData.getValue(row, 2)); row++;
    // var costOfInsurance = parseFloat(tableData.getValue(row, 2)); row++;
    // var costOfMaintenance = parseFloat(tableData.getValue(row, 2)); row++;

    var yearlyCosts = yearlyCapitalCost; // etc.
    var energyDeliveredToGridEachYearInGJ =
      lossesOutputData["baseloadPowerDeliveredToGrid"] * hoursInYear * secondsInHour; // GJoules
    var energyDeliveredToGridEachYearInKiloWattHours = (energyDeliveredToGridEachYearInGJ * 1000000) / secondsInHour;
    var costOfEnergy = yearlyCosts / energyDeliveredToGridEachYearInKiloWattHours;
    console.log("capitalCost", Math.round(totalCapitalCost / 1e9), "B USD");
    console.log("costOfEnergy", costOfEnergy, "USD/kWh");
    console.log(
      "Relative Cost",
      Math.round((costOfEnergy / 0.05) * 100) / 100,
      "times the current wholesale price of electricity in the US ($0.05/kWh)"
    );

    costsOutput["capitalCost"] = totalCapitalCost;
    costsOutput["costOfEnergy"] = costOfEnergy;
    costsOutput["relativeCost"] = costOfEnergy / 0.05;

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
        text: "Terrestrial Solar Power Costs",
      },
      chart: {
        height: chartHeight * sf,
        spacingRight: 30,
        spacingLeft: 30,
        spacingTop: 30,
        spacingBottom: 30,
        zoomType: "y",
      },
      series: [
        {
          keys: ["from", "to", "weight"],
          data: [
            ["Solar Panels", "Solar Assembly", costOfSolarPanelArray],
            ["Support Structure", "Solar Assembly", costOfSolarPanelSupportingStructure],
            ["Solar Assembly", "Installation Capital Cost", totalSatelliteComponentsCost],
            ["Energy Storage", "Installation Capital Cost", costOfEnergyStorage],
            ["Installation Capital Cost", "Total Capital Costs", satelliteCapitalCost + costOfEnergyStorage],
          ],
          type: "sankey",
          nodeWidth: 30,
          nodePadding: 20,
          minLinkWidth: 3, // Warning - may generate a misleading plot!
          nodes: [
            {
              id: "Solar Assembly",
              offsetVertical: -70,
            },
          ],
        },
      ],
    };

    // Create the chart
    Highcharts.chart("TScostsSankey", options);
  }

  const lossesTableData = new google.visualization.DataTable();
  const lossesOutputData = {};
  const costsTableData = new google.visualization.DataTable();
  var costsOutput = {};

  function drawPage() {
    // Draw the Sankey diagrams
    drawLossesSankey(lossesTableData, lossesOutputData);
    drawCostsSankey(costsTableData, lossesOutputData);

    // quick and dirty display of the cost values you have in the console
    document.getElementById("TSoverallSystemEfficiency").innerHTML = (
      lossesOutputData["overallSystemEfficiency"] * 100
    ).toFixed(2);
    document.getElementById("TScapitalCost").innerHTML = Math.round(costsOutput["capitalCost"] / 1e7) / 1e2;
    document.getElementById("TScostOfEnergy").innerHTML = Math.round(costsOutput["costOfEnergy"] * 10000) / 10000;
    document.getElementById("TSrelativeCost").innerHTML = Math.round(costsOutput["relativeCost"] * 100) / 100;
  }

  // Create the editable losses table
  initLossesTableData(lossesTableData);
  // Create the editable costs table
  initCostsTableData(costsTableData);

  drawPage();
}
