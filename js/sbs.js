// Load the Google Charts API
google.charts.load("current", { packages: ["table"] });
google.charts.setOnLoadCallback(initilizePage);

const SBSlossesTableRowData = [
  {
    label: "Baseload Power Delivered To Grid",
    stateOfTheArtValue: 2,
    aspirationalValue: 2,
    unit: "GW",
    percentImprovement: 0,
    popoverText: "Sample Text",
    sources: ["sampleLink.com", "thanks.gov"],
  },
  {
    label: "Average Solar Irradiance",
    stateOfTheArtValue: 1361,
    aspirationalValue: 1361,
    unit: "W/m2",
    percentImprovement: 0,
    popoverText: "",
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
    label: "Solar Absorptivity",
    stateOfTheArtValue: 0.96,
    aspirationalValue: 0.96,
    unit: "",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "DC to AC (RF Power Amplifier Conversion Efficiency)",
    stateOfTheArtValue: 0.5,
    aspirationalValue: 0.5,
    unit: "",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "AC to RF (Transmission Antenna Efficiency)",
    stateOfTheArtValue: 0.5,
    aspirationalValue: 0.5,
    unit: "",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Transmission Antenna Diameter",
    stateOfTheArtValue: 2000,
    aspirationalValue: 2000,
    unit: "m",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Receiver Antenna Diameter",
    stateOfTheArtValue: 2000,
    aspirationalValue: 2000,
    unit: "m",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Transmitter-Receiver Separation",
    stateOfTheArtValue: 35000000,
    aspirationalValue: 35000000,
    unit: "m",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "RF Wavelength",
    stateOfTheArtValue: 0.125,
    aspirationalValue: 0.125,
    unit: "m",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Atmospheric Attenuation",
    stateOfTheArtValue: 0.1,
    aspirationalValue: 0.1,
    unit: "",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Maximum RF Energy Flux",
    stateOfTheArtValue: 100,
    aspirationalValue: 100,
    unit: "W/m2",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "RF to AC (Receiver Antenna Efficiency)",
    stateOfTheArtValue: 0.5,
    aspirationalValue: 0.5,
    unit: "",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "AC to DC (Power Rectifier Efficiency)",
    stateOfTheArtValue: 0.5,
    aspirationalValue: 0.5,
    unit: "",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "RF Energy Density Safety Limit",
    stateOfTheArtValue: 200,
    aspirationalValue: 200,
    unit: "W/m2",
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
    label: "DC to AC (Receiver Power Inverter Efficiency)",
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

const SBScostsTableRowData = [
  {
    label: "Cost of Solar Panels",
    stateOfTheArtValue: 300,
    aspirationalValue: 300,
    unit: "USD/m2",
    percentImprovement: 0,
    popoverText: "testing a;sldkjfa",
    sources: ["link.com", "hello.com"],
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
    label: "Cost of RF Transmitter",
    stateOfTheArtValue: 500,
    aspirationalValue: 500,
    unit: "USD/m2",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Mass of RF Transmitter",
    stateOfTheArtValue: 0.1,
    aspirationalValue: 0.1,
    unit: "kg/m2",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Cost Per Kg to LEO",
    stateOfTheArtValue: 80000,
    aspirationalValue: 80000,
    unit: "USD/kg",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Vehicle Payload Mass",
    stateOfTheArtValue: 100000,
    aspirationalValue: 100000,
    unit: "kg",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Vehicle Mass After LEO Payload Deploy",
    stateOfTheArtValue: 105000,
    aspirationalValue: 105000,
    unit: "kg",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Cost of Receiver",
    stateOfTheArtValue: 500,
    aspirationalValue: 500,
    unit: "USD/m2",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Cost of Li-Ion Battery Storage",
    stateOfTheArtValue: 217,
    aspirationalValue: 217,
    unit: "USD/kWh",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Cost Factor for Battery Management Systems",
    stateOfTheArtValue: 0.2,
    aspirationalValue: 0.2,
    unit: "",
    percentImprovement: 0,
    popoverText: "",
    sources: [""],
  },
  {
    label: "Cost of Capital",
    stateOfTheArtValue: 0.05,
    aspirationalValue: 0.05,
    unit: "",
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
  function initLossesTableData(lossesTableData) {
    // Define the data for the editable table
    lossesTableData.addColumn("string", "Label");
    lossesTableData.addColumn("number", "State-of-The-Art Value");
    lossesTableData.addColumn("number", "Aspirational Value");
    lossesTableData.addColumn("string", "Unit");
    lossesTableData.addColumn("number", "% Improvement");
    lossesTableData.addRows(formatRowData(SBSlossesTableRowData));

    initTable("SBSlossesTable", lossesTableData);
  }

  function initCostsTableData(costsTableData) {
    // Define the data for the editable table
    costsTableData.addColumn("string", "Label");
    costsTableData.addColumn("number", "State-of-The-Art Value");
    costsTableData.addColumn("number", "Aspirational Value");
    costsTableData.addColumn("string", "Unit");
    costsTableData.addColumn("number", "% Improvement");
    costsTableData.addRows(formatRowData(SBScostsTableRowData));
    initTable("SBScostsTable", costsTableData);
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
    //var operatingTemperature = parseFloat(tableData.getValue(row, 2)); row++;
    var solarPanelAbsorptivity = parseFloat(tableData.getValue(row, 2));
    row++;
    var rfPowerAmplifierConversionEfficiency = parseFloat(tableData.getValue(row, 2));
    row++;
    var transmissionAntennaEfficiency = parseFloat(tableData.getValue(row, 2));
    row++;
    var rfTransmitterArrayDiameter = parseFloat(tableData.getValue(row, 2));
    row++;
    var rfReceiverArrayDiameter = parseFloat(tableData.getValue(row, 2));
    row++;
    var transmitterReceiverSeparation = parseFloat(tableData.getValue(row, 2));
    row++;
    var rfWavelength = parseFloat(tableData.getValue(row, 2));
    row++;
    var atmosphericAttenuation = parseFloat(tableData.getValue(row, 2));
    row++;
    var maximumRFEnergyFlux = parseFloat(tableData.getValue(row, 2));
    row++;
    var rxAntennaEfficiency = parseFloat(tableData.getValue(row, 2));
    row++;
    var rxPowerRectifierEfficiency = parseFloat(tableData.getValue(row, 2));
    row++;
    var rfEnergyDensitySafetyLimit = parseFloat(tableData.getValue(row, 2));
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

    var rxPowerInverterOutputPower = baseloadPowerDeliveredToGrid;
    var rxPowerInverterInputPower = rxPowerInverterOutputPower / rxPowerInverterEfficiency;

    var earthsCenterToGeoAltitude = 42164000; // m
    var geoCircumference = 2 * Math.PI * earthsCenterToGeoAltitude;
    var earthsDiameter = 12742000; // m
    var timeInEarthsShadowInSeconds = (24 * 3600 * earthsDiameter) / geoCircumference;
    var energyStorageCapacityNeeded =
      (baseloadPowerDeliveredToGrid * timeInEarthsShadowInSeconds) / energyStorageDepthOfDischargeFactor; // GJ
    var energyStorageRechargeTime = 24 * 3600 - timeInEarthsShadowInSeconds; // s
    var energyStorageRechargePower =
      (energyStorageCapacityNeeded * energyStorageDepthOfDischargeFactor) /
      energyStorageRoundTripEfficiency /
      energyStorageRechargeTime /
      energyStorageVoltageManagementFactor; // GJ
    var energyLostInVoltageManagement = energyStorageRechargePower * (1 - energyStorageVoltageManagementFactor);

    var rxPowerRectifierOutputPower = rxPowerInverterInputPower + energyStorageRechargePower;
    var rxAntennaOutputPower = rxPowerRectifierOutputPower / rxPowerRectifierEfficiency;
    var incidentRfPower = rxAntennaOutputPower / rxAntennaEfficiency;

    // We need to make sure that the energy density is low enough to be considered safe, so lets assume that
    //var rfTransmitterArrayArea = Math.PI * Math.pow(rfTransmitterArrayDiameter/2, 2);
    var rfTransmitterArrayArea = (incidentRfPower * 1e9) / rfEnergyDensitySafetyLimit; // Using the same area as is calcualted for the receiver

    //var rfReceiverArrayArea = Math.PI * Math.pow(rfReceiverArrayDiameter/2, 2);
    var rfReceiverArrayArea = (incidentRfPower * 1e9) / rfEnergyDensitySafetyLimit;
    // var areaOfTransmitter = Math.PI * Math.pow(rfTransmitterArrayDiameter/2, 2);
    // var areaOfReceiver = Math.PI * Math.pow(rfReceiverArrayDiameter/2, 2);
    var rfTransmissionEfficiency = 0.9; //areaOfTransmitter * areaOfReceiver * ((rfWavelength / 4 / Math.PI**2)**2) / (transmitterReceiverSeparation**2);

    var rfPowerEmitted = incidentRfPower / (rfTransmissionEfficiency * (1 - atmosphericAttenuation));
    var rfPowerIntoTxAntennas = rfPowerEmitted / transmissionAntennaEfficiency;
    var dcElectricalPower = rfPowerIntoTxAntennas / rfPowerAmplifierConversionEfficiency;

    var stefanBoltzmannConstant = 5.67e-8; //	W/m2K4
    var averageEmissivity = 0.82;

    let solarPanelEfficiency = solarPanelEfficiencyAtRefTemp; // * (1 + solarPanelTemperatureEfficiencyFactor * (referenceTemperature - operatingTemperature));
    let panelTemperatureKelvin;
    let panelTemperatureCelcius;

    for (let itterations = 0; itterations < 5; itterations++) {
      panelTemperatureKelvin =
        ((averageSolarIrradiance * (solarPanelAbsorptivity - solarPanelEfficiency)) /
          (stefanBoltzmannConstant * averageEmissivity * 2)) **
        0.25;
      panelTemperatureCelcius = panelTemperatureKelvin - 273.15;
      solarPanelEfficiency =
        solarPanelEfficiencyAtRefTemp *
        (1 + solarPanelTemperatureEfficiencyFactor * (referenceTemperature - panelTemperatureCelcius));
      //console.log(panelTemperatureCelcius, solarPanelEfficiency)
    }

    var absorbedSolarPower = dcElectricalPower / solarPanelEfficiency;
    var incidentSolarPower = absorbedSolarPower / solarPanelAbsorptivity;
    var reflectedSolarPower = incidentSolarPower * (1 - solarPanelAbsorptivity);

    var overallSystemEfficiency = baseloadPowerDeliveredToGrid / incidentSolarPower;
    var solarPanelArrayArea = (incidentSolarPower * 1e9) / averageSolarIrradiance;
    var solarPanelArrayDiameter = Math.sqrt(solarPanelArrayArea / Math.PI) * 2;

    lossesOutputData["baseloadPowerDeliveredToGrid"] = baseloadPowerDeliveredToGrid;
    lossesOutputData["solarPanelArrayArea"] = solarPanelArrayArea;
    lossesOutputData["energyStorageCapacityNeeded"] = energyStorageCapacityNeeded;
    lossesOutputData["overallSystemEfficiency"] = overallSystemEfficiency;
    lossesOutputData["rfTransmitterArrayArea"] = rfTransmitterArrayArea;
    lossesOutputData["rfReceiverArrayArea"] = rfReceiverArrayArea;

    // ToDo
    // Losses
    // Add station keeping power
    // Add panel to power transmitter Ohmic losses
    // Solar panel degredation over time
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
        text: "Space Solar Power Losses",
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
          keys: ["from", "to", "weight", "outgoing"],
          data: [
            ["Incident Solar Power", "Reflected Energy", reflectedSolarPower],
            [
              "Incident Solar Power",
              "Heating of Satellite 1",
              incidentSolarPower - reflectedSolarPower - dcElectricalPower,
            ],
            ["Incident Solar Power", "DC Electrical Power", dcElectricalPower],
            ["DC Electrical Power", "Heating of Satellite 2", dcElectricalPower - rfPowerIntoTxAntennas],
            ["DC Electrical Power", "RFAC Power To Tx Antennas", rfPowerIntoTxAntennas],
            ["RFAC Power To Tx Antennas", "Heating of Satellite 3", rfPowerIntoTxAntennas - rfPowerEmitted],
            ["RFAC Power To Tx Antennas", "RF Power Emitted as Microwaves", rfPowerEmitted],
            ["RF Power Emitted as Microwaves", "Heating of Earth 1", rfPowerEmitted - incidentRfPower],
            ["RF Power Emitted as Microwaves", "RF Power at Rx Antennas", incidentRfPower],
            ["RF Power at Rx Antennas", "Heating of Earth 2", incidentRfPower - rxAntennaOutputPower],
            ["RF Power at Rx Antennas", "RFAC Power at Rx Antenna Output", rxAntennaOutputPower],
            [
              "RFAC Power at Rx Antenna Output",
              "Heating of Earth 3",
              rxAntennaOutputPower - rxPowerRectifierOutputPower,
            ],
            ["RFAC Power at Rx Antenna Output", "DC Power at Rectifier Output", rxPowerRectifierOutputPower],
            [
              "DC Power at Rectifier Output",
              "Heating of Earth 4",
              rxPowerRectifierOutputPower - rxPowerInverterOutputPower,
            ],
            ["DC Power at Rectifier Output", "AC Power at Inverter Output", rxPowerInverterOutputPower, true],
            ["AC Power at Inverter Output", "Heating of Earth 5", energyLostInVoltageManagement],
            ["AC Power at Inverter Output", "Energy Storage Recharge", energyStorageRechargePower],
            ["AC Power at Inverter Output", "AC Power to Grid", baseloadPowerDeliveredToGrid],
          ],
          type: "sankey",
          nodeWidth: 30,
          nodePadding: 20,
          minLinkWidth: 1, // Warning - may generate a misleading plot!
          borderRadius: 0,
          layoutAlgorithm: {
            type: "sequential",
            direction: "right",
          },
          nodes: [
            {
              id: "Incident Solar Power",
              column: 0,
              name: "Incident Solar Power",
            },
            {
              id: "Reflected Energy",
              column: 1,
              name: "Reflected Energy",
            },
            {
              id: "Heating of Satellite 1",
              column: 1,
              name: "Heating of Satellite",
            },
            {
              id: "DC Electrical Power",
              column: 1,
              name: "DC Electrical Power",
              //offset: chartHeight / 2 - chartHeight * dcElectricalPower / (incidentSolarPower * sf) / 2 + 1 * sf2,
            },
            {
              id: "Heating of Satellite 2",
              column: 2,
              name: "Heating of Satellite",
            },
            {
              id: "RFAC Power To Tx Antennas",
              column: 2,
              name: "RFAC Power To Tx Antennas",
              offset: chartHeight / 2 - (chartHeight * rfPowerIntoTxAntennas) / (incidentSolarPower * sf) / 2 + 2 * sf2,
            },
            {
              id: "Heating of Satellite 3",
              column: 3,
              name: "Heating of Satellite",
            },
            {
              id: "RF Power Emitted as Microwaves",
              column: 3,
              name: "RF Power Emitted as Microwaves",
              offset: chartHeight / 2 - (chartHeight * rfPowerEmitted) / (incidentSolarPower * sf) / 2 + 3 * sf2,
            },
            {
              id: "Heating of Earth 1",
              column: 4,
              name: "Heating of Earth",
            },
            {
              id: "RF Power at Rx Antennas",
              column: 4,
              name: "RF Power at Rx Antennas",
              offset: chartHeight / 2 - (chartHeight * incidentRfPower) / (incidentSolarPower * sf) / 2 + 4 * sf2,
            },
            {
              id: "Heating of Earth 2",
              column: 5,
              name: "Heating of Earth",
            },
            {
              id: "RFAC Power at Rx Antenna Output",
              column: 5,
              name: "RFAC Power at Rx Antenna Output",
              offset: chartHeight / 2 - (chartHeight * rxAntennaOutputPower) / (incidentSolarPower * sf) / 2 + 5 * sf2,
            },
            {
              id: "Heating of Earth 3",
              column: 6,
              name: "Heating of Earth",
            },
            {
              id: "DC Power at Rectifier Output",
              column: 6,
              name: "DC Power at Rectifier Output",
              offset: chartHeight / 2 + 15, // - chartHeight * rxPowerRectifierOutputPower/(incidentSolarPower*sf) + 6*sf2,
            },
            {
              id: "Heating of Earth 4",
              column: 7,
              name: "Heating of Earth",
            },
            {
              id: "AC Power at Inverter Output",
              column: 7,
              name: "AC Power at Inverter Output",
              offset: chartHeight / 2 + 20, //- chartHeight * rxPowerInverterInputPower/(incidentSolarPower*sf) + 7*sf2,
            },
            {
              id: "Heating of Earth 5",
              column: 8,
              name: "Heating of Earth",
            },
            {
              id: "Energy Storage Recharge",
              column: 8,
              name: "Energy Storage Recharge",
              offset: chartHeight / 4,
            },
            {
              id: "AC Power to Grid",
              column: 8,
              name: "AC Power to Grid",
              offset: chartHeight / 2,
            },
          ],
        },
      ],
    };

    // Create the chart
    console.log("options", options);
    Highcharts.chart("SBSlossesSankey", options);
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
    var unitCostOfRFTransmitter = parseFloat(tableData.getValue(row, 2));
    row++;
    var unitMassOfRFTransmitter = parseFloat(tableData.getValue(row, 2));
    row++;
    var costPerKgToLEO = parseFloat(tableData.getValue(row, 2));
    row++;
    var vehiclePayloadToLEO = parseFloat(tableData.getValue(row, 2));
    row++;
    var vehicleMassAfterLEOPayloadDeploy = parseFloat(tableData.getValue(row, 2));
    row++;
    var unitCostOfRFReceiver = parseFloat(tableData.getValue(row, 2));
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
    var costOfRFTransmitterArray = unitCostOfRFTransmitter * lossesOutputData["rfTransmitterArrayArea"];
    var costOfRFTransmitterSupportingStructure =
      unitCostOfSupportingStructure * lossesOutputData["rfTransmitterArrayArea"];
    var costOfRFReceiverArray = unitCostOfRFReceiver * lossesOutputData["rfReceiverArrayArea"];
    var costOfRFReceiverSupportingStructure = unitCostOfSupportingStructure * lossesOutputData["rfReceiverArrayArea"];
    var costOfEnergyStorage =
      unitCostOfLiIonBatteryStorage *
      lossesOutputData["energyStorageCapacityNeeded"] *
      (1 + costFactorforBatteryManagementSystems);
    var totalSatelliteComponentsCost =
      costOfSolarPanelArray +
      costOfSolarPanelSupportingStructure +
      costOfRFTransmitterArray +
      costOfRFTransmitterSupportingStructure;

    // Tally up the mass of the components that must be placed in GEO
    var massOfSolarPanelArray = unitMassOfSolarPanels * lossesOutputData["solarPanelArrayArea"];
    var massOfSolarPanelSupportingStructure = unitMassOfSupportingStructure * lossesOutputData["solarPanelArrayArea"];
    var massOfRFTransmitterArray = unitMassOfRFTransmitter * lossesOutputData["rfTransmitterArrayArea"];
    var massOfRFTransmitterSupportingStructure =
      unitMassOfSupportingStructure * lossesOutputData["rfTransmitterArrayArea"];

    var totalMassToGEO =
      massOfSolarPanelArray +
      massOfRFTransmitterArray +
      massOfSolarPanelSupportingStructure +
      massOfRFTransmitterSupportingStructure;

    // Refilling Factor
    var deltaVLEOtoGTO = 2440; // m/s
    var deltaVGTOtoGEO = 1472; // m/s
    var vacuumEngineExhaustVelocity = 3560; //	m/s

    // Working backwards...
    // Return trip, one burn: Deceleration from GEO to GTO
    // Note: the following assumes that the vehicle can reenter directly from the perigee of an eliptical GTO orbit.
    var vehicleMassAfterGEOPayloadDeploy =
      vehicleMassAfterLEOPayloadDeploy * Math.exp(deltaVGTOtoGEO / vacuumEngineExhaustVelocity); // kg

    // Add the mass of the payload back in...
    var vehicleMassBeforePayloadDeploy = vehicleMassAfterGEOPayloadDeploy + vehiclePayloadToLEO; // kg

    // Outbound trip, two burns: one from LEO to GTO and the other from GTO to GEO
    var vehicleMassAfterRefilling =
      vehicleMassBeforePayloadDeploy * Math.exp((deltaVGTOtoGEO + deltaVLEOtoGTO) / vacuumEngineExhaustVelocity); // kg

    var propellantNeededToRefillOrbiter =
      vehicleMassAfterRefilling -
      vehicleMassBeforePayloadDeploy +
      (vehicleMassAfterGEOPayloadDeploy - vehicleMassAfterLEOPayloadDeploy); // kg
    var numberOfRefillingLaunchesToLEO = propellantNeededToRefillOrbiter / vehiclePayloadToLEO;

    var costPerKgToGEO = costPerKgToLEO * (1 + numberOfRefillingLaunchesToLEO);
    var launchCosts = totalMassToGEO * costPerKgToGEO;

    // Other Costs not accounted for yet...
    // var costOfLand = parseFloat(tableData.getValue(row, 2)); row++;
    // var costOfPermitting = parseFloat(tableData.getValue(row, 2)); row++;
    // var costOfConstruction = parseFloat(tableData.getValue(row, 2)); row++;
    // var costOfTransmissionLines = parseFloat(tableData.getValue(row, 2)); row++;
    // var costOfDecommissioning = parseFloat(tableData.getValue(row, 2)); row++;

    var totalComponentsCost = totalSatelliteComponentsCost + costOfRFReceiverArray + costOfEnergyStorage;
    var satelliteCapitalCost = totalSatelliteComponentsCost + launchCosts;
    var receiverCapitalCost = costOfRFReceiverArray + costOfRFReceiverSupportingStructure + costOfEnergyStorage;
    var totalCapitalCost = totalComponentsCost + launchCosts; // etc.

    var yearlyCapitalCost =
      (totalCapitalCost * costOfCapital * (1 + costOfCapital) ** lifeofProject) /
      ((1 + costOfCapital) ** lifeofProject - 1);
    // Other Costs not accounted for yet...
    // var costOfOperations = parseFloat(tableData.getValue(row, 2)); row++;
    // var costOfInsurance = parseFloat(tableData.getValue(row, 2)); row++;
    // var costOfMaintenance = parseFloat(tableData.getValue(row, 2)); row++;

    var yearlyCosts = yearlyCapitalCost; // etc.
    var hoursInYear = 8760;
    var secondsInHour = 3600;
    var energyDeliveredToGridEachYearInGJ =
      lossesOutputData["baseloadPowerDeliveredToGrid"] * hoursInYear * secondsInHour; // GJoules
    var energyDeliveredToGridEachYearInKiloWattsHours = (energyDeliveredToGridEachYearInGJ * 1000000) / secondsInHour;
    var costOfEnergy = yearlyCosts / energyDeliveredToGridEachYearInKiloWattsHours;
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
    const chartHeight = 600;
    const sf = 1.25;
    const sf2 = 3;
    var options = {
      plotOptions: {
        sankey: {
          //...
        },
        series: {
          animation: false,
        },
      },
      title: {
        text: "Space Solar Power Costs",
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
            ["Solar Panels", "Satellite Components", costOfSolarPanelArray],
            ["Solar Panel Structure", "Satellite Components", costOfSolarPanelSupportingStructure],
            ["RF Transmitter Components", "Satellite Components", costOfRFTransmitterArray],
            ["RF Transmitter Structure", "Satellite Components", costOfRFTransmitterSupportingStructure],
            ["Solar Panels (Launch)", "Launch Costs", massOfSolarPanelArray * costPerKgToGEO],
            ["Solar Panel Structure (Launch)", "Launch Costs", massOfSolarPanelSupportingStructure * costPerKgToGEO],
            ["RF Transmitter Components (Launch)", "Launch Costs", massOfRFTransmitterArray * costPerKgToGEO],
            [
              "RF Transmitter Structure (Launch)",
              "Launch Costs",
              massOfRFTransmitterSupportingStructure * costPerKgToGEO,
            ],
            ["Satellite Components", "Satellite Capital Cost", totalSatelliteComponentsCost],
            ["Launch Costs", "Satellite Capital Cost", totalMassToGEO * costPerKgToGEO],
            ["RF Receiver Components", "Receiver Capital Cost", costOfRFReceiverArray],
            ["RF Receiver Structure", "Receiver Capital Cost", costOfRFReceiverSupportingStructure],
            ["Energy Storage", "Receiver Capital Cost", costOfEnergyStorage],
            ["Satellite Capital Cost", "Total Capital Costs", satelliteCapitalCost],
            ["Receiver Capital Cost", "Total Capital Costs", receiverCapitalCost],
          ],
          type: "sankey",
          nodeWidth: 30,
          nodePadding: 20,
          minLinkWidth: 1, // Warning - may generate a misleading plot!
          borderRadius: 0,
          nodes: [
            {
              id: "Satellite Components",
              nodeShape: "rect",
            },
            {},
          ],
        },
      ],
    };

    // Create the chart
    Highcharts.chart("SBScostsSankey", options);
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
    document.getElementById("SBSoverallSystemEfficiency").innerHTML = (
      lossesOutputData["overallSystemEfficiency"] * 100
    ).toFixed(2);
    document.getElementById("SBScapitalCost").innerHTML = Math.round(costsOutput["capitalCost"] / 1e7) / 1e2;
    document.getElementById("SBScostOfEnergy").innerHTML = Math.round(costsOutput["costOfEnergy"] * 10000) / 10000;
    document.getElementById("SBSrelativeCost").innerHTML = Math.round(costsOutput["relativeCost"] * 100) / 100;
  }

  // Create the editable losses table
  initLossesTableData(lossesTableData);
  // Create the editable costs table
  initCostsTableData(costsTableData);

  drawPage();
}
