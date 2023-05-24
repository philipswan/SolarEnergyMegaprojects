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
    popoverText: "tes test asdf",
    sources: ["source.com", "course.com"],
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
    unit: "B0C",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Solar Panel Temperature Efficiency Factor",
    stateOfTheArtValue: 0.0045,
    aspirationalValue: 0.0045,
    unit: "1/B0C",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Solar Panel Operating Temperature",
    stateOfTheArtValue: -40,
    aspirationalValue: -40,
    unit: "B0C",
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
    label: "Linear Motor Efficiency",
    stateOfTheArtValue: 0.95,
    aspirationalValue: 0.95,
    unit: "",
    percentImprovement: 0,
    popoverText: "Needs more investigation",
    sources: [""],
  },
  {
    label: "Energy Storage Self-Discharge",
    stateOfTheArtValue: 0.96,
    aspirationalValue: 0.96,
    unit: "",
    percentImprovement: 0,
    popoverText: "Needs more investigation",
    sources: [""],
  },
  {
    label: "Linear Generator Efficiency",
    stateOfTheArtValue: 0.93,
    aspirationalValue: 0.93,
    unit: "",
    percentImprovement: 0,
    popoverText: "Needs more investigation",
    sources: [""],
  },
  {
    label: "Step Up Transformer Efficiency",
    stateOfTheArtValue: 0.95,
    aspirationalValue: 0.95,
    unit: "",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Vertical Power Transmisison Efficiency",
    stateOfTheArtValue: 0.9,
    aspirationalValue: 0.9,
    unit: "USD/m",
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
    } else if (item.popoverText != "") {
      return [
        `${item.label} <div class="popover"><div class="popover-inner">${item.popoverText}</div></div>`,
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

    // code to hide the currently unused '% improvement' column
    var view = new google.visualization.DataView(tableData);
    view.hideColumns([4]); // here you set the columns you want to hide

    table.draw(view, tableOptions); // change 'view' back to 'tableData' to revert to displaying all columns

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
    var linearMotorEfficiency = parseFloat(tableData.getValue(row, 2));
    row++;
    var energyStorageSelfDischarge = parseFloat(tableData.getValue(row, 2));
    row++;
    var linearGeneratorEfficiency = parseFloat(tableData.getValue(row, 2));
    row++;
    var stepUpTransformerEfficiency = parseFloat(tableData.getValue(row, 2));
    row++;
    var verticalPowerTransmissionEfficiency = parseFloat(tableData.getValue(row, 2));
    row++;
    //var horizontalPowerTransmissionEfficiency = parseFloat(tableData.getValue(row, 2)); row++;

    // Vertical Transmission Lines
    var stepUpTransformerOutputPower = baseloadPowerDeliveredToGrid / verticalPowerTransmissionEfficiency;
    var verticalPowerTransmissionLoss = stepUpTransformerOutputPower - baseloadPowerDeliveredToGrid;

    // Step Up Transformers
    var linearGeneratorOutputPower = stepUpTransformerOutputPower / stepUpTransformerEfficiency;
    var stepUpTransformerLoss = linearGeneratorOutputPower - stepUpTransformerOutputPower;

    // Linear Generators
    var powerFromRing = linearGeneratorOutputPower / linearGeneratorEfficiency;
    var linearGeneratorLoss = powerFromRing - linearGeneratorOutputPower;

    // Ring Storage/Transmission
    var powerFromRingBeforeSelfDischargeLosses = powerFromRing / energyStorageSelfDischarge;
    var selfDischargeLoss = powerFromRingBeforeSelfDischargeLosses - powerFromRing;

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
      const latitude = (siteLatitudeInDegrees * Math.PI) / 180;
      const sunHalfAngle = ((0.5 / 2) * Math.PI) / 180;
      const nightDayBoundryAngle = ((90 - horizonToHorizonAngleDegrees / 2) * Math.PI) / 180;
      const earthsTiltAnglePlus90Degrees = (-(90 + 23.44) * Math.PI) / 180;
      const xOverR =
        (Math.sin(latitude) * Math.cos(earthsTiltAnglePlus90Degrees) - Math.sin(nightDayBoundryAngle - sunHalfAngle)) /
        (Math.sin(earthsTiltAnglePlus90Degrees) * Math.cos(latitude));
      const lengthOfDay = (24 * Math.acos(xOverR)) / Math.PI;
      return lengthOfDay;
    }

    var minDaylightHours = getMinimumDaylightHours(siteLatitudeInDegrees, horizonToHorizonAngleDegrees);
    var daylightFactor = minDaylightHours / 24;

    // Energy Needed Due To Limited Daylight Hours
    var powerToRing = powerFromRingBeforeSelfDischargeLosses / (1 - daylightFactor);
    var energyForUseLater = powerToRing - powerFromRingBeforeSelfDischargeLosses;

    // Linear Motors
    var powerToLinearMotor = powerToRing / linearMotorEfficiency;
    var linearMotorLosses = powerToLinearMotor - powerToRing;

    var timeInDarknessInSeconds = (24 - minDaylightHours) * secondsInHour;
    var energyStorageCapacityNeeded = powerToLinearMotor * timeInDarknessInSeconds * linearMotorEfficiency;
    // var energyStorageRechargeTime = 24 * 3600 - timeInDarknessInSeconds; // s
    // var energyStorageRechargePower = energyStorageCapacityNeeded / energyStorageRechargeTime / (1 - (1 - energyStorageRoundTripEfficiency)/2); // GJ
    // var energyLostThroughStorage = energyStorageRechargePower - (powerInverterInputPower * timeInDarknessInSeconds)  // ToDo: All energy goes through the ring, so it all needs to be affected by electric-to-kinetic energy conversions
    // var dcElectricalPower = (powerInverterInputPower + energyStorageRechargePower + energyLostThroughStorage);

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

    var Cd = avgCoefficientOfDrag; // Average Coefficient of Drag (assumes solar panels are actively oriented to maximize powerToLinearMotor for given wind conditions)
    var solarPanelEfficiency =
      solarPanelEfficiencyAtRefTemp *
      (1 + solarPanelTemperatureEfficiencyFactor * (referenceTemperature - operatingTemperature));

    var solarPanelArrayArea =
      (powerToLinearMotor * 1e9) /
      (solarPanelEfficiency * (1 - atmosphereAttenuation) * (1 - dirtAndDebrisAttenuation) * averageSolarIrradiance -
        0.5 * Cd * windSpeed ** 3 * airDensity);
    var solarPanelArrayDiameter = Math.sqrt(solarPanelArrayArea / Math.PI) * 2;
    dcStationKeepingPower = (0.5 * Cd * windSpeed ** 3 * airDensity * solarPanelArrayArea) / 1e9;

    // Station Keeping
    var dcPowerFromPanel = powerToLinearMotor + dcStationKeepingPower;

    // Solar Panels
    var absorbedSolarPower = dcPowerFromPanel / solarPanelEfficiency;
    var incidentSolarPower = absorbedSolarPower / solarPanelAbsorptivity;
    var reflectedSolarPower = incidentSolarPower * (1 - solarPanelAbsorptivity);

    var solarPowerNearPanel = incidentSolarPower / (1 - dirtAndDebrisAttenuation);
    var solarPowerLostToDirtAndDebris = solarPowerNearPanel * dirtAndDebrisAttenuation;
    var unattenuatedSolarPower = solarPowerNearPanel / (1 - atmosphereAttenuation);
    var solarPowerLostToAtmosphere = unattenuatedSolarPower * atmosphereAttenuation;

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
        // width: chartWidth * sf,
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
            ["Unattenuated Solar Power", "Atmosphere Loss", solarPowerLostToAtmosphere],
            ["Unattenuated Solar Power", "Solar Power Near Panel", solarPowerNearPanel],
            ["Solar Power Near Panel", "Dirt and Debris Loss", solarPowerLostToDirtAndDebris],
            ["Solar Power Near Panel", "Incident Solar Power", incidentSolarPower],
            ["Incident Solar Power", "Reflected Energy", reflectedSolarPower],
            ["Incident Solar Power", "Lost as Heat 1", incidentSolarPower - reflectedSolarPower - dcPowerFromPanel],
            ["Incident Solar Power", "DC Power From Panel", dcPowerFromPanel],
            ["DC Power From Panel", "Station-Keeping Power", dcStationKeepingPower],
            ["DC Power From Panel", "Power To Linear Motor", powerToLinearMotor],
            ["Power To Linear Motor", "Lost as Heat 2", linearMotorLosses],
            ["Power To Linear Motor", "Power To Ring", powerToRing],
            ["Power To Ring", "Energy for Use Later", energyForUseLater],
            ["Power To Ring", "Energy for Use Now", powerFromRingBeforeSelfDischargeLosses],
            ["Energy for Use Now", "Self Discharge Loss", selfDischargeLoss],
            ["Energy for Use Now", "Power Before Self-Discharge", powerFromRing],
            ["Power Before Self-Discharge", "Lost as Heat 3", selfDischargeLoss],
            ["Power Before Self-Discharge", "Power From Ring", powerFromRing],
            ["Power From Ring", "Lost as Heat 4", linearGeneratorLoss],
            ["Power From Ring", "Linear Generator Output Power", linearGeneratorOutputPower],
            ["Linear Generator Output Power", "Lost as Heat 5", stepUpTransformerLoss],
            ["Linear Generator Output Power", "Step-Up Transformer Output Power", stepUpTransformerOutputPower],
            ["Step-Up Transformer Output Power", "Lost as Heat 6", verticalPowerTransmissionLoss],
            ["Step-Up Transformer Output Power", "Delivered to Grid", baseloadPowerDeliveredToGrid],
          ],
          type: "sankey",
          nodeWidth: 30,
          nodePadding: 100,
          minLinkWidth: 2, // Warning - may generate a misleading plot!
          nodeAlignment: 2,
          borderRadius: 0,
          nodes: [
            {
              id: "Unattenuated Solar Power",
              column: 0,
              name: "Unattenuated Solar Power",
            },
            {
              id: "Atmosphere Loss",
              column: 1,
              name: "Atmosphere Loss",
            },
            {
              id: "Solar Power Near Panel",
              column: 1,
              name: "Solar Power Near Panel",
            },
            {
              id: "Dirt and Debris Loss",
              column: 2,
              name: "Dirt and Debris Loss",
            },
            {
              id: "Incident Solar Power",
              column: 2,
              name: "Incident Solar Power",
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
              name: "DC From Panel",
            },
            {
              id: "Station-Keeping Power",
              column: 4,
              name: "Station-Keeping Power",
            },
            {
              id: "Power To Linear Motor",
              column: 4,
              name: "Power To Linear Motor",
            },
            {
              id: "Lost as Heat 2",
              column: 5,
              name: "Lost as Heat",
            },
            {
              id: "Power To Ring",
              column: 5,
            },
            {
              id: "Energy for Use Later",
              column: 6,
              name: "Energy for Use Later",
            },
            {
              id: "Energy for Use Now",
              column: 6,
              name: "Energy for Use Now",
            },
            {
              id: "Self Discharge Loss",
              column: 7,
              name: "Self Discharge Loss",
            },
            {
              id: "Power Before Self-Discharge",
              column: 7,
              name: "Power Before Self-Discharge",
            },
            {
              id: "Lost as Heat 3",
              column: 8,
              name: "Lost as Heat 3",
            },
            {
              id: "Power From Ring",
              column: 8,
              name: "Power From Ring",
            },
            {
              id: "Lost as Heat 4",
              column: 9,
              name: "Lost as Heat 4",
            },
            {
              id: "Linear Generator Output Power",
              column: 9,
              name: "Linear Generator Out",
            },
            {
              id: "Lost as Heat 5",
              column: 10,
              name: "Lost as Heat 5",
            },
            {
              id: "Step-Up Transformer Output Power",
              column: 10,
              name: "Step-Up Transformer Output Power",
            },
            {
              id: "Lost as Heat 6",
              column: 11,
              name: "Lost as Heat",
            },
            {
              id: "Delivered to Grid",
              column: 11,
              name: "Delivered to Grid",
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
    //console.log(totalSatteliteComponentsCost / 1e9, costOfEnergyStorage / 1e9, yearlyCapitalCost / 1e9);
    // Other Costs not accounted for yet...
    // var costOfOperations = parseFloat(tableData.getValue(row, 2)); row++;
    // var costOfInsurance = parseFloat(tableData.getValue(row, 2)); row++;
    // var costOfMaintenance = parseFloat(tableData.getValue(row, 2)); row++;

    var yearlyCosts = yearlyCapitalCost; // etc.
    var energyDeliveredToGridEachYearInGJ =
      lossesOutputData["baseloadPowerDeliveredToGrid"] * hoursInYear * secondsInHour; // GJoules
    var energyDeliveredToGridEachYearInKiloWattHours = (energyDeliveredToGridEachYearInGJ * 1000000) / secondsInHour;
    var costOfEnergy = yearlyCosts / energyDeliveredToGridEachYearInKiloWattHours;
    //console.log('capitalCost', Math.round(totalCapitalCost / 1e9), 'B USD')
    //console.log('costOfEnergy', costOfEnergy, 'USD/kWh')
    //console.log('Relative Cost', Math.round(costOfEnergy / 0.05 * 100) / 100, 'times the current wholesale price of electricity in the US ($0.05/kWh)')

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
