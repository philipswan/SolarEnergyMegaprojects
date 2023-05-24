// Load the Google Charts API
google.charts.load("current", { packages: ["table"] });
google.charts.setOnLoadCallback(initilizePage);

const RBSlossesTableRowData = [
  {
    label: "Baseload Power Delivered To Grid",
    stateOfTheArtValue: 2,
    aspirationalValue: 2,
    unit: "GW",
    percentImprovement: 0,
    popoverText: "sample test a;sldkjf",
    sources: ["site.site", "assadf.com"],
  },
  {
    label: "Average Solar Irradiance",
    stateOfTheArtValue: 1361,
    aspirationalValue: 1361,
    unit: "W/m2",
    percentImprovement: 0,
    popoverText: "Ranges from 1321 to 1414 throughout the year",
    sources: [""],
  },
  {
    label: "Solar Panel Cell Efficiency At Ref Temp",
    stateOfTheArtValue: 0.2,
    aspirationalValue: 0.2,
    unit: "",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
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
    stateOfTheArtValue: -40,
    aspirationalValue: -40,
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
    label: "Latitude of Ring",
    stateOfTheArtValue: 0,
    aspirationalValue: 0,
    unit: "degrees",
    percentImprovement: 0,
    popoverText: "Defaults to equator",
    sources: [""],
  },
  {
    label: "Ring Altitude",
    stateOfTheArtValue: 32000,
    aspirationalValue: 32000,
    unit: "meters",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Average Coefficient of Drag",
    stateOfTheArtValue: 0.25,
    aspirationalValue: 0.25,
    unit: "",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Average Wind Speed",
    stateOfTheArtValue: 28,
    aspirationalValue: 28,
    unit: "m/s",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Atmospheric Attenuation",
    stateOfTheArtValue: 0.01,
    aspirationalValue: 0.01,
    unit: "",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Dirt and Debris Attenuation",
    stateOfTheArtValue: 0.01,
    aspirationalValue: 0.01,
    unit: "",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Energy Storage Round Trip Efficiency",
    stateOfTheArtValue: 0.8,
    aspirationalValue: 0.8,
    unit: "",
    percentImprovement: 0,
    popoverText: "Made up",
    sources: [""],
  },
  {
    label: "Energy Storage Voltage Management Factor",
    stateOfTheArtValue: 0.95,
    aspirationalValue: 0.95,
    unit: "",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Vertical Power Transmisison Factor",
    stateOfTheArtValue: 0.9,
    aspirationalValue: 0.9,
    unit: "USD/m",
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
    popoverText: "Default to zero loss",
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
];

const RBScostsTableRowData = [
  {
    label: "Cost of Solar Panels",
    stateOfTheArtValue: 300,
    aspirationalValue: 300,
    unit: "USD/m2",
    percentImprovement: 0,
    popoverText: "costs sample test",
    sources: ["a;sldkjf.com", "as;lfkj.com"],
  },
  {
    label: "Mass of Solar Panels",
    stateOfTheArtValue: 0.28,
    aspirationalValue: 0.28,
    unit: "kg/m2",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Cost of Supporting Structure",
    stateOfTheArtValue: 15,
    aspirationalValue: 15,
    unit: "USD/m2",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Mass of Supporting Structure",
    stateOfTheArtValue: 0.14,
    aspirationalValue: 0.14,
    unit: "kg/m2",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Cost of Solar Actuators",
    stateOfTheArtValue: 0.5,
    aspirationalValue: 0.5,
    unit: "percent of panel cost",
    percentImprovement: 0,
    popoverText: "Made up",
    sources: [""],
  },
  {
    label: "Mass of Solar Actuators",
    stateOfTheArtValue: 0.05,
    aspirationalValue: 0.05,
    unit: "kg/m2",
    percentImprovement: 0,
    popoverText: "Made up",
    sources: [""],
  },
  {
    label: "Cost of Static Load",
    stateOfTheArtValue: 113,
    aspirationalValue: 113,
    unit: "USD/kg",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Cost of Kinetic Storage",
    stateOfTheArtValue: 100,
    aspirationalValue: 100,
    unit: "USD/kWh",
    percentImprovement: 0,
    popoverText: "Made up",
    sources: [""],
  },
  {
    label: "Cost of Capital",
    stateOfTheArtValue: 0.05,
    aspirationalValue: 0.05,
    unit: "interest rate",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Life of Project",
    stateOfTheArtValue: 30,
    aspirationalValue: 30,
    unit: "Years",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
];

function formatRowData(data) {
  return data.map((item) => {
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
        `${item.label} ${mobileLinksHTML} <div class="popover"><div class="popover-inner">${item.popoverText}<br>${linksHTML}</div></div>`,
        item.stateOfTheArtValue,
        item.aspirationalValue,
        item.unit,
        item.percentImprovement,
      ];
    } else {
      return [item.label, item.stateOfTheArtValue, item.aspirationalValue, item.unit, item.percentImprovement];
    }
  });
}

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
    lossesTableData.addRows(formatRowData(RBSlossesTableRowData));

    initTable("RBSlossesTable", lossesTableData);
  }

  function initCostsTableData(costsTableData) {
    // Define the data for the editable table
    costsTableData.addColumn("string", "Label");
    costsTableData.addColumn("number", "State-of-The-Art Value");
    costsTableData.addColumn("number", "Aspirational Value");
    costsTableData.addColumn("string", "Unit");
    costsTableData.addColumn("number", "% Improvement");
    costsTableData.addRows(formatRowData(RBScostsTableRowData));
    initTable("RBScostsTable", costsTableData);
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
    var siteAltitudeInMeters = parseFloat(tableData.getValue(row, 2));
    row++;
    var avgCoefficientOfDrag = parseFloat(tableData.getValue(row, 2));
    row++;
    var avgWindSpeedInMps = parseFloat(tableData.getValue(row, 2));
    row++;
    var atmosphereAttenuation = parseFloat(tableData.getValue(row, 2));
    row++;
    var dirtAndDebrisAttenuation = parseFloat(tableData.getValue(row, 2));
    row++;
    var energyStorageRoundTripEfficiency = parseFloat(tableData.getValue(row, 2));
    row++;
    var energyStorageVoltageManagementFactor = parseFloat(tableData.getValue(row, 2));
    row++;
    var verticalPowerTransmissionFactor = parseFloat(tableData.getValue(row, 2));
    row++;
    var horizontalPowerTransmissionFactor = parseFloat(tableData.getValue(row, 2));
    row++;
    var rxPowerInverterEfficiency = parseFloat(tableData.getValue(row, 2));
    row++;

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
    var energyStorageCapacityNeeded = baseloadPowerDeliveredToGrid * timeInDarknessInSeconds; // GJ
    var energyStorageRechargeTime = 24 * 3600 - timeInDarknessInSeconds; // s
    var energyStorageRechargePower =
      energyStorageCapacityNeeded /
      energyStorageRoundTripEfficiency /
      energyStorageRechargeTime /
      energyStorageVoltageManagementFactor; // GJ
    var energyLostInVoltageManagement = energyStorageRechargePower * (1 - energyStorageVoltageManagementFactor);

    var dcElectricalPower = powerInverterInputPower + energyStorageRechargePower + energyLostInVoltageManagement;
    var windSpeed = avgWindSpeedInMps; // m/s
    var ringAltitude = siteAltitudeInMeters; // m
    //var airDensity = 0.0132 // kg/m3
    var airDensity = airDensityAtAltitude(ringAltitude); // kg/m3

    function airDensityAtAltitude(a) {
      const c_4 = -3.957854e-19;
      const c_3 = 6.657616e-14;
      const c_2 = -3.47217e-9;
      const c_1 = -8.61651e-5;
      const c_0 = 2.16977e-1;
      const airDensityAtAltitude = Math.exp(c_4 * a ** 4 + c_3 * a ** 3 + c_2 * a ** 2 + c_1 * a + c_0);
      return airDensityAtAltitude;
    }

    var Cd = avgCoefficientOfDrag; // Average Coefficient of Drag (assumes solar panels are actively oriented to maximize dcElectricalPower for given wind conditions)
    var solarPanelEfficiency =
      solarPanelEfficiencyAtRefTemp *
      (1 + solarPanelTemperatureEfficiencyFactor * (referenceTemperature - operatingTemperature));

    var solarPanelArrayArea =
      (dcElectricalPower * 1e9) /
      (solarPanelEfficiency * (1 - atmosphereAttenuation) * (1 - dirtAndDebrisAttenuation) * averageSolarIrradiance -
        0.5 * Cd * windSpeed ** 3 * airDensity);
    var solarPanelArrayDiameter = Math.sqrt(solarPanelArrayArea / Math.PI) * 2;
    dcStationKeepingPower = (0.5 * Cd * windSpeed ** 3 * airDensity * solarPanelArrayArea) / 1e9;

    console.log("solarPanelArrayArea", solarPanelArrayArea);

    var dcPowerFromPanel = dcElectricalPower + dcStationKeepingPower;

    var absorbedSolarPower = dcPowerFromPanel / solarPanelEfficiency;
    var incidentSolarPower = absorbedSolarPower / solarPanelAbsorptivity;
    var reflectedSolarPower = incidentSolarPower * (1 - solarPanelAbsorptivity);

    var solarPowerNearPanel = incidentSolarPower / (1 - dirtAndDebrisAttenuation);
    var solarPowerLostToDirtAndDebris = solarPowerNearPanel * dirtAndDebrisAttenuation;
    var unattenuatedSolarPower = solarPowerNearPanel / (1 - atmosphereAttenuation);
    var solarPowerLostToAtmosphere = unattenuatedSolarPower * atmosphereAttenuation;

    var atmosphereAttenuatedSolarPower = unattenuatedSolarPower * atmosphereAttenuation;
    var dirtAndDebrisAttenuatedSolarPower = unattenuatedSolarPower * dirtAndDebrisAttenuation;

    var overallSystemEfficiency = baseloadPowerDeliveredToGrid / unattenuatedSolarPower;

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
        text: "Ring-Based Solar Power Losses",
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
        zoomType: "y",
      },
      series: [
        {
          keys: ["from", "to", "weight", "outgoing", "color"],
          data: [
            ["Unattenuated Solar Power", "Atmosphere Loss", atmosphereAttenuatedSolarPower],
            ["Unattenuated Solar Power", "Solar Power Near Panel", solarPowerNearPanel],
            ["Solar Power Near Panel", "Dirt and Debris Loss", solarPowerLostToDirtAndDebris],
            ["Solar Power Near Panel", "Incident Solar Power", incidentSolarPower],
            ["Incident Solar Power", "Reflected Energy", reflectedSolarPower],
            ["Incident Solar Power", "Lost as Heat 1", incidentSolarPower - reflectedSolarPower - dcPowerFromPanel],
            ["Incident Solar Power", "DC Power From Panel", dcPowerFromPanel],
            ["DC Power From Panel", "Station-Keeping Power", dcStationKeepingPower],
            ["DC Power From Panel", "DC Electrical Power", dcElectricalPower],
            [
              "DC Electrical Power",
              "Lost as Heat 2",
              energyStorageRechargePower * (1 - energyStorageVoltageManagementFactor),
            ],
            ["DC Electrical Power", "Energy Storage Recharge", energyStorageRechargePower],
            ["DC Electrical Power", "DC Power at Inverter Input", powerInverterInputPower],
            ["DC Power at Inverter Input", "Lost as Heat 3", powerInverterInputPower - powerInverterOutputPower],
            ["DC Power at Inverter Input", "AC Power at Inverter Output", powerInverterOutputPower],
            ["AC Power at Inverter Output", "Lost as Heat 4", verticalPowerTransmissionLoss],
            ["AC Power at Inverter Output", "Delivered to Grid", baseloadPowerDeliveredToGrid, true, "red"],
          ],
          type: "sankey",
          nodeWidth: 30,
          nodePadding: 20,
          minLinkWidth: 2, // Warning - may generate a misleading plot!
          borderRadius: 0,
          nodes: [
            {
              id: "Unattenuated Solar Power",
              column: 0,
              name: "Unattenuated Solar Power",
              // color: 'orange',
            },
            {
              id: "Atmosphere Loss",
              column: 1,
              name: "Atmosphere Loss",
              //offset: 100,
            },
            {
              id: "Solar Power Near Panel",
              column: 1,
              name: "Solar Power Near Panel",
              //offset: 100,
            },
            {
              id: "Dirt and Debris Attenuation",
              column: 2,
              name: "Dirt and Debris Attenuation",
              // offset: chartWidth / 2 - chartWidth * incidentSolarPower / (unattenuatedSolarPower * sf) / 2 + 1 * sf2,
            },
            {
              id: "Incident Solar Power",
              column: 2,
              name: "Incident Solar Power",
              // color: 'gold',
              // offset: chartWidth / 2 - chartWidth * incidentSolarPower / (unattenuatedSolarPower * sf) / 2 + 1 * sf2,
            },
            {
              id: "Reflected Energy",
              column: 3,
            },
            {
              id: "Lost as Heat 1",
              column: 3,
              name: "Lost as Heat",
            },
            {
              id: "DC Power From Panel",
              column: 3,
              name: "DC Power From Panel",
              //offset: chartWidth / 2 - 45,
              // color: 'dodgerblue',
            },
            {
              id: "Station-Keeping Power",
              column: 4,
              name: "Station-Keeping Power",
            },
            {
              id: "DC Electrical Power",
              column: 4,
              name: "DC Electrical Power",
              offset: chartWidth / 4,
              // color: 'dodgerblue',
            },
            {
              id: "Lost as Heat 2",
              column: 5,
              name: "Lost as Heat",
              offset: -chartWidth / 8,
            },
            {
              id: "Energy Storage Recharge",
              column: 5,
            },
            {
              id: "DC Power at Inverter Input",
              column: 5,
              name: "DC Power at Inverter Input",
              offset: chartWidth / 4,
              // color: 'darkturquoise',
            },
            {
              id: "Lost as Heat 3",
              column: 6,
              name: "Lost as Heat",
            },
            {
              id: "AC Power at Inverter Output",
              column: 6,
              offset: chartWidth / 4,
              // color: 'aquamarine',
            },
            {
              id: "Lost as Heat 4",
              column: 7,
              name: "Lost as Heat",
            },
            {
              id: "Delivered to Grid",
              column: 7,
              name: "Delivered to Grid",
              offset: chartWidth / 4,
            },
          ],
        },
      ],
    };

    // Create the chart
    Highcharts.chart("RBSlossesSankey", options);
  }

  function drawCostsSankey(tableData, lossesOutputData) {
    // Get the values from the editable table
    let row = 0;
    var unitCostOfSolarPanels = parseFloat(tableData.getValue(row, 2));
    row++;
    var unitMassOfSolarPanels = parseFloat(tableData.getValue(row, 2));
    row++;
    var unitCostOfSupportingStructure = parseFloat(tableData.getValue(row, 2));
    row++;
    var unitMassOfSupportingStructure = parseFloat(tableData.getValue(row, 2));
    row++;
    var unitCostofSolarActuators = parseFloat(tableData.getValue(row, 2));
    row++;
    var unitMassOfSolarActuators = parseFloat(tableData.getValue(row, 2));
    row++;
    var unitCostOfStaticLoad = parseFloat(tableData.getValue(row, 2));
    row++;
    var costOfKineticEnergyStorage = parseFloat(tableData.getValue(row, 2));
    row++;
    var costOfCapital = parseFloat(tableData.getValue(row, 2));
    row++;
    var lifeofProject = parseFloat(tableData.getValue(row, 2));
    row++;

    // Tally up component costs
    var costOfSolarPanelArray = unitCostOfSolarPanels * lossesOutputData["solarPanelArrayArea"];
    var costOfSolarPanelSupportingStructure = unitCostOfSupportingStructure * lossesOutputData["solarPanelArrayArea"];
    var costOfSolarActuators = costOfSolarPanelArray * unitCostofSolarActuators;
    var totalSatteliteComponentsCost =
      costOfSolarPanelArray + costOfSolarPanelSupportingStructure + costOfSolarActuators;

    // energy storage costs
    var unitCostOfKineticEnergyStorageinGJ = (costOfKineticEnergyStorage * 1000000) / 3600;
    var costOfEnergyStorage = unitCostOfKineticEnergyStorageinGJ * lossesOutputData["energyStorageCapacityNeeded"];

    // mass calc for static load
    var massOfSolarPanelArray = unitMassOfSolarPanels * lossesOutputData["solarPanelArrayArea"];
    var massOfSolarActuators = unitMassOfSolarActuators * lossesOutputData["solarPanelArrayArea"];
    var massOfSolarPanelSupportingStructure = unitMassOfSupportingStructure * lossesOutputData["solarPanelArrayArea"];
    var totalMassSupported = massOfSolarPanelArray + massOfSolarPanelSupportingStructure + massOfSolarActuators;
    var costOfStaticLoad = totalMassSupported * unitCostOfStaticLoad;

    // var totalComponentsCost = totalSatteliteComponentsCost + costOfEnergyStorage + costOfStaticLoad;
    var satelliteCapitalCost = totalSatteliteComponentsCost;
    var totalCapitalCost = totalSatteliteComponentsCost + costOfEnergyStorage + costOfStaticLoad; // etc.

    var yearlyCapitalCost =
      (totalCapitalCost * costOfCapital * (1 + costOfCapital) ** lifeofProject) /
      ((1 + costOfCapital) ** lifeofProject - 1);
    console.log(totalSatteliteComponentsCost / 1e9, costOfEnergyStorage / 1e9, yearlyCapitalCost / 1e9);
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
        text: "Ring-Based Solar Power Costs",
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
            ["Solar Actuators", "Solar Assembly", costOfSolarActuators],
            ["Solar Assembly", "Installation Capital Cost", totalSatteliteComponentsCost],
            ["Static Load Costs", "Installation Capital Cost", costOfStaticLoad],
            ["Energy Storage", "Installation Capital Cost", costOfEnergyStorage],
            [
              "Installation Capital Cost",
              "Total Capital Costs",
              satelliteCapitalCost + costOfEnergyStorage + costOfStaticLoad,
            ],
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
    Highcharts.chart("RBScostsSankey", options);
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
    document.getElementById("RBSoverallSystemEfficiency").innerHTML = (
      lossesOutputData["overallSystemEfficiency"] * 100
    ).toFixed(2);
    document.getElementById("RBScapitalCost").innerHTML = Math.round(costsOutput["capitalCost"] / 1e7) / 1e2;
    document.getElementById("RBScostOfEnergy").innerHTML = Math.round(costsOutput["costOfEnergy"] * 10000) / 10000;
    document.getElementById("RBSrelativeCost").innerHTML = Math.round(costsOutput["relativeCost"] * 100) / 100;
  }

  // Create the editable losses table
  initLossesTableData(lossesTableData);
  // Create the editable costs table
  initCostsTableData(costsTableData);

  drawPage();
}
