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
    popoverText:
      "A city of 1 million people needs approximately 2 GW of power. The Office of Energy Efficiency & Renewable Energy published a fun article on what 1GW of power is.",
    sources: ["https://www.energy.gov/eere/articles/how-much-power-1-gigawatt"],
  },
  {
    label: "Average Solar Irradiance",
    stateOfTheArtValue: 1361,
    aspirationalValue: 1361,
    unit: "W/m2",
    percentImprovement: 0,
    popoverText: "This is the \"in-space\" value and it ranges from 1321 to 1414 throughout the year. The Earth is nearer the sun when it is summer in the southern hemisphere and winter in the northern hemisphere. If supplying energy is hardest in the summer, use the summer value for your hemisphere.",
    sources: ["https://en.wikipedia.org/wiki/Solar_irradiance"],
  },
  {
    label: "Solar Panel Cell Efficiency At Ref Temp",
    stateOfTheArtValue: 0.2,
    aspirationalValue: 0.2,
    unit: "",
    percentImprovement: 0,
    popoverText: "The National Renewable Energy Laboratory provides efficiencies of many research cells and \"champion\" modules. This value is not intended to be the highest value on either of these charts. This value is the efficiency, at a “reference temperature” (typically 25&deg;C), of the photovoltaic technology that achieves the highest Levelized Cost of Energy (LCoE).",
    sources: ["https://www.nrel.gov/pv/cell-efficiency.html", "https://www.nrel.gov/pv/module-efficiency.html"],
  },
  {
    label: "Reference Temperature",
    stateOfTheArtValue: 25,
    aspirationalValue: 25,
    unit: "B0C",
    percentImprovement: 0,
    popoverText: "The reference temperature is the temperature that was used to determine the solar panel's efficiency. It is typically 25&deg;C, but if you have a specification sheet for a solar panel, you should confirm that this is the value that they are using.",
    sources: [""],
  },
  {
    label: "Solar Panel Temperature Efficiency Factor",
    stateOfTheArtValue: 0.0045,
    aspirationalValue: 0.0045,
    unit: "1/B0C",
    percentImprovement: 0,
    popoverText: "The temperature of a solar panel has a direct effect on its ability to generate electricity. This has to do with the laws of thermodynamics and how heat limits any electronics ability to produce power.",
    sources: ["https://www.solar.com/learn/does-solar-panel-temperature-coefficient-matter/"],
  },
  {
    label: "Solar Panel Operating Temperature",
    stateOfTheArtValue: -40,
    aspirationalValue: -40,
    unit: "&deg;C",
    percentImprovement: 0,
    popoverText: "This is the temperature that the panel is expected to operate at. In the ring-mounted solar proposal, the cool fast-flowing air will keep cool.",
    sources: ["https://opg.optica.org/directpdfaccess/83c48e59-b7cc-40ca-bc6354fe7b0658e7_296235/optica-1-1-32.pdf?da=1&id=296235&seq=0&mobile=no"],
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
    popoverText: "As the ring spans a lot of latitudes, this value defaults to zero (the equator).",
    sources: [""],
  },
  {
    label: "Ring Altitude",
    stateOfTheArtValue: 22000,
    aspirationalValue: 22000,
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
    popoverText: "Atmospheric conditions can reduce direct beam radiation of a solar panel on the Earth's surface by 10% on clear, dry days and by 100% during thick, cloudy days. At the high altitudes used for ring-based solar, the rarified atmosphere only minimally attenuates the sun's energy.",
    sources: [""],
  },
  {
    label: "Dirt and Debris Attenuation",
    stateOfTheArtValue: 0.01,
    aspirationalValue: 0.01,
    unit: "",
    percentImprovement: 0,
    popoverText: "This value represents how clean the panels are kept on average. If the panels perfectly clean, then enter a value of zero. Pollen, dust, leaves, snow, and grime cause the value to be higher. At high altitudes, the panels are more likely to remain clean, so the value is lower.",
    sources: [""],
  },
  {
    label: "Linear Motor Efficiency",
    stateOfTheArtValue: 0.95,
    aspirationalValue: 0.95,
    unit: "",
    percentImprovement: 0,
    popoverText: "A linear motor, like a typical rotating motor, is used to convert electrical energy into kinetic energy.",
    sources: [""],
  },
  {
    label: "Energy Storage Self-Discharge",
    stateOfTheArtValue: 0.96,
    aspirationalValue: 0.96,
    unit: "",
    percentImprovement: 0,
    popoverText: "Some of the kinetic energy stored in the ring is lost to air friction, magnetic friction, or is consumed to power the magnetic levitation system. These losses are discussed in the paper \"The Techno-Economic Viability of Actively Supported Structures for Terrestrial Transit and Space Launch\"",
    sources: ["https://ieeexplore.ieee.org/document/10115896/"],
  },
  {
    label: "Linear Generator Efficiency",
    stateOfTheArtValue: 0.93,
    aspirationalValue: 0.93,
    unit: "",
    percentImprovement: 0,
    popoverText: "A linear generator, like a typical rotating generator, is used to convert the kinetic energy of the ring back into electrical energy.",
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
    stateOfTheArtValue: 0.99,
    aspirationalValue: 0.99,
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
    popoverText: "",
    sources: ["https://ourworldindata.org/grapher/solar-pv-system-costs", "https://ourworldindata.org/grapher/solar-pv-prices"],
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
    sources: ["https://ourworldindata.org/grapher/solar-pv-system-costs"],
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
        return (acc += `<div><a href="${item}" class="mobile-link" target="_blank" rel="noopener noreferrer">View Source ${
          idx + 1
        }</a></div>`);
      }, "");

      let linksHTML = item.sources.reduce((acc, item, idx) => {
        return (acc += `<div><a href="${item}" target="_blank" rel="noopener noreferrer">View Source ${
          idx + 1
        }</a></div>`);
      }, "");

      return [
        `${item.label} ${mobileLinksHTML} <div class="popover"><div class="popover-inner">${item.popoverText}<div>${linksHTML}</div></div></div>`,
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
    var powerRemainingInRing = linearGeneratorOutputPower / linearGeneratorEfficiency;
    var linearGeneratorLoss = powerRemainingInRing - linearGeneratorOutputPower;

    // Ring Storage/Transmission
    var energyForDaytime = powerRemainingInRing / energyStorageSelfDischarge;
    var selfDischargeLoss = energyForDaytime - powerRemainingInRing;

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
    var powerToRing = energyForDaytime / (1 - daylightFactor);
    var energyForNightime = powerToRing - energyForDaytime;

    // Linear Motors
    var powerToLinearMotor = powerToRing / linearMotorEfficiency;
    var linearMotorLoss = powerToLinearMotor - powerToRing;

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
        // zoomType: "y",
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
            ["Power To Linear Motor", "Linear Motor Loss", linearMotorLoss],
            ["Power To Linear Motor", "Power To Ring", powerToRing],
            ["Power To Ring", "Energy for Nightime Use", energyForNightime],
            ["Power To Ring", "Energy for Daytime Use", energyForDaytime],
            ["Energy for Daytime Use", "Self Discharge Loss", selfDischargeLoss],
            ["Energy for Daytime Use", "Power To Linear Generators", powerRemainingInRing],
            ["Power To Linear Generators", "Linear Generator Loss", linearGeneratorLoss],
            ["Power To Linear Generators", "To Step-Up XFormer", linearGeneratorOutputPower],
            ["To Step-Up XFormer", "Step-Up XFormer Loss", stepUpTransformerLoss],
            ["To Step-Up XFormer", "To Vertical Trasmission Lines", stepUpTransformerOutputPower],
            ["To Vertical Trasmission Lines", "Vertical Power Transmission Loss", verticalPowerTransmissionLoss],
            ["To Vertical Trasmission Lines", "Delivered to Grid", baseloadPowerDeliveredToGrid],
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
              id: "Linear Motor Loss",
              column: 5,
              name: "Lost as Heat",
            },
            {
              id: "Power To Ring",
              column: 5,
            },
            {
              id: "Energy for Nightime Use",
              column: 6,
              name: "For Nightime Use",
            },
            {
              id: "Energy for Daytime Use",
              column: 6,
              name: "For Daytime Use",
            },
            {
              id: "Self Discharge Loss",
              column: 7,
              name: "Self Discharge Loss",
            },
            {
              id: "Power To Linear Generators",
              column: 7,
              name: "To Linear Generators",
            },
            {
              id: "Linear Generator Loss",
              column: 8,
              name: "Lost as Heat",
            },
            {
              id: "To Step-Up XFormer",
              column: 8,
              name: "To Step-Up XFormer",
            },
            {
              id: "Step-Up XFormer Loss",
              column: 9,
              name: "Lost as Heat",
            },
            {
              id: "To Vertical Trasmission Lines",
              column: 9,
              name: "To Vertical Trasmission Lines",
            },
            {
              id: "Vertical Power Transmission Loss",
              column: 10,
              name: "Lost as Heat",
            },
            {
              id: "Delivered to Grid",
              column: 10,
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
