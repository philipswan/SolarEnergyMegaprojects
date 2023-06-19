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
    popoverText:
      "A city of 1 million people needs approximately 2 GW of power. The Office of Energy Efficiency & Renewable Energy published a fun article on what 1GW of power is. A Solarsat FAQ explains that the efficiency if a space-based solar wireless link is fundamentally limited by physics. Proponents of space-based solar concepts will generally assert that the wireless link in a space-based solar concept must be GW scale to avoid having physics limit the wireless link's efficiency.",
    sources: ["https://www.energy.gov/eere/articles/how-much-power-1-gigawatt", "https://solarsat.org/faq.htm"],
  },
  {
    label: "Average Solar Irradiance",
    stateOfTheArtValue: 1361,
    aspirationalValue: 1361,
    unit: "W/m2",
    percentImprovement: 0,
    popoverText:
      'This is the "in-space" value and it ranges from 1321 to 1414 throughout the year. The Earth is nearer the sun when it is summer in the southern hemisphere and winter in the northern hemisphere. If supplying energy is hardest in the summer, use the summer value for your hemisphere.',
    sources: ["https://en.wikipedia.org/wiki/Solar_irradiance"],
  },
  {
    label: "Solar Panel Cell Efficiency At Ref Temp",
    stateOfTheArtValue: 0.2,
    aspirationalValue: 0.2,
    unit: "",
    percentImprovement: 0,
    popoverText:
      'The National Renewable Energy Laboratory provides efficiencies of many research cells and "champion" modules. This value is not intended to be the highest value on either of these charts. This value is the efficiency, at a “reference temperature” (typically 25&deg;C), of the photovoltaic technology that achieves the highest Levelized Cost of Energy (LCoE).',
    sources: ["https://www.nrel.gov/pv/cell-efficiency.html", "https://www.nrel.gov/pv/module-efficiency.html"],
  },
  {
    label: "Reference Temperature",
    stateOfTheArtValue: 25,
    aspirationalValue: 25,
    unit: "&deg;C",
    percentImprovement: 0,
    popoverText:
      "The reference temperature is the temperature that was used to determine the solar panel's efficiency. It is typically 25&deg;C, but if you have a specification sheet for a solar panel, you should confirm that this is the value that they are using.",
    sources: [""],
  },
  {
    label: "Solar Panel Temperature Efficiency Factor",
    stateOfTheArtValue: 0.0045,
    aspirationalValue: 0.0045,
    unit: "1/&deg;C",
    percentImprovement: 0,
    popoverText:
      "The temperature of a solar panel has a direct effect on its ability to generate electricity. This has to do with the laws of thermodynamics and how heat limits any electronics ability to produce power. Since the solar panels are locates in space, it is possible to directly calculate their operating temperature.",
    sources: ["https://www.solar.com/learn/does-solar-panel-temperature-coefficient-matter/"],
  },
  {
    label: "Solar Panel Absorptivity",
    stateOfTheArtValue: 0.96,
    aspirationalValue: 0.96,
    unit: "",
    percentImprovement: 0,
    popoverText:
      "This is the portion of the sun's energy that is absorbed by the panel as opposed to being reflected away. Some of the absorbed energy is converted to electricity and the rest is converted to heat.",
    sources: [""],
  },
  {
    label: "Solar Panel Emissivity",
    stateOfTheArtValue: 0.82,
    aspirationalValue: 0.82,
    unit: "",
    percentImprovement: 0,
    popoverText:
      "A panel in space can only cool itself by radiating heat away. When this is the case, it becomes possible to estimate the panel's operating temperature with a formula. One of the terms in this formula is the emissivity of the panel.",
    sources: [""],
  },
  // Add PMAC??
  {
    label: "DC to AC (RF Power Amplifier Conversion Efficiency)",
    stateOfTheArtValue: 0.5,
    aspirationalValue: 0.5,
    unit: "",
    percentImprovement: 0,
    popoverText:
      'A power amplifier is part of the electronic circuit that converts DC to AC at microwave frequenies. To create the kind of high quality wave that will form a tight beam and not generate radio frequency interferance, a the power amplifier needs to be "Type A". There efficiency of these amplifiers is limited by physics to 50%. This is only one of the electronic components that will generate heat during this energy conversion.',
    sources: ["https://ieeexplore.ieee.org/document/9030683/"],
  },
  {
    label: "AC to RF (Transmission Antenna Efficiency)",
    stateOfTheArtValue: 0.5,
    aspirationalValue: 0.5,
    unit: "",
    percentImprovement: 0,
    popoverText: "After the radio frequency AC signal exits the electronic circuit that generated it, it must travel through wires to a specific antenna element in the phased-array antenna. The antenna element will emit a portion of this energy as microwave photons. This value represents the portion of RF AC electrical energy that is successfully conveted into microwave photon energy by the individual antenna elements. The efficiency of an antenna is a ratio of the power delivered to the antenna relative to the power radiated from the antenna. A high efficiency antenna has most of the power present at the antenna's input radiated away. A low efficiency antenna has most of the power absorbed as losses within the antenna, or reflected away due to impedance mismatch.",
    sources: ["https://ieeexplore.ieee.org/document/9030683/", "https://antenna-theory.com/basics/efficiency.php"],
  },
  // Need to capture this info from Wikipedia as a formula...
  // Inability to constrain power transmission inside tiny beam angles. For example, a beam of 0.002 degrees (7.2 arc seconds) is required to stay within a one kilometer receiving antenna target from geostationary altitude. The most advanced directional wireless power transfer systems as of 2019 spread their half power beam width across at least 0.9 arc degrees.[46][47][48][49]
  {
    label: "Transmission Antenna Diameter",
    stateOfTheArtValue: 2000,
    aspirationalValue: 2000,
    unit: "m",
    percentImprovement: 0,
    popoverText: "This analyzer assumes that the microwave transmitter is a disk-shaped phased-array.",
    sources: ["https://ieeexplore.ieee.org/document/1427746"],
  },
  {
    label: "Receiver Antenna Diameter",
    stateOfTheArtValue: 2000,
    aspirationalValue: 2000,
    unit: "m",
    percentImprovement: 0,
    popoverText: "This analyzer assumes that the microwave receiver is disk-shaped.",
    sources: [""],
  },
  {
    label: "Transmitter-Receiver Separation",
    stateOfTheArtValue: 35000000,
    aspirationalValue: 35000000,
    unit: "m",
    percentImprovement: 0,
    popoverText: "This is the distance between the microwave transmitter and the microwave receiver.",
    sources: [""],
  },
  {
    label: "RF Wavelength",
    stateOfTheArtValue: 0.125,
    aspirationalValue: 0.125,
    unit: "m",
    percentImprovement: 0,
    popoverText: "This is the wavelength of the microwaves used for transmitting power.",
    sources: [""],
  },
  {
    label: "Atmospheric Attenuation",
    stateOfTheArtValue: 0.1,
    aspirationalValue: 0.1,
    unit: "",
    percentImprovement: 0,
    popoverText:
      "This is the degree to which microwaves will be attenuated while travelling through the atmosphere on a worse-case day for weather. (On the Moon this value would be zero.) This value is dependant on site selection for the microwave receiver.",
    sources: [""],
  },
  {
    label: "RF to AC (Receiver Antenna Efficiency)",
    stateOfTheArtValue: 0.5,
    aspirationalValue: 0.5,
    unit: "",
    percentImprovement: 0,
    popoverText: "This value represents the amount of microwave photon energy that is converted to electrical energy at radio frequencies by the receiving antennas.",
    sources: ["https://ieeexplore.ieee.org/document/9030683/", "https://ieeexplore.ieee.org/document/10091717"],
  },
  {
    label: "RF AC to DC (Power Rectifier Efficiency)",
    stateOfTheArtValue: 0.5,
    aspirationalValue: 0.5,
    unit: "",
    percentImprovement: 0,
    popoverText:
      "The value represents the amount of electrical energy at the RF AC frequency that is successfully converted into low voltage DC energy by the rectifier electronics. Recifier efficiency is related to the power of the voltage of the RF AC signal, which in turn is related to the RF Energy Flux at the antenna elements. At flux levels that are safe for living things, rectifier efficiencies tend to be much lower.",
    sources: ["https://ieeexplore.ieee.org/document/9030683/"],
  },
  {
    label: "RF Energy Density Safety Limit",
    stateOfTheArtValue: 200,
    aspirationalValue: 200,
    unit: "W/m2",
    percentImprovement: 0,
    popoverText:
      "This value represents an upper energy flux limit for safety. For example, it could be set low enough to make it safe for a parachutist to accidentally fly into the beam or it could be set low enough to be safe for birds.",
    sources: [""],
  },
  {
    label: "Battery Voltage Management Factor",
    stateOfTheArtValue: 0.95,
    aspirationalValue: 0.95,
    unit: "",
    percentImprovement: 0,
    popoverText:
      "Panel power is maximized when the current and voltage are optimized, and this is done by a device that converts the DC power from the panel from the optimal panel voltage to a different voltage (either AC or DC) more suitable for energy storage or transmission. This value represents the efficiency of that convertor.",
    sources: [""],
  },
  {
    label: "Battery Depth Of Discharge Factor",
    stateOfTheArtValue: 0.8,
    aspirationalValue: 0.8,
    unit: "",
    percentImprovement: 0,
    popoverText:
      "The analysis currently assumes that energy storage uses a battery of some kind. The cycle-life of most batteries can be improved by not fully charging and discharging them every cycle. Depth-of-dischrge is the portion of full charge that will actually be used, in the interest of increasing the batteries cycle-life.",
    sources: [""],
  },
  {
    label: "Battery Round Trip Efficiency",
    stateOfTheArtValue: 0.86,
    aspirationalValue: 0.86,
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
    popoverText: "This is the cost-per-kg to a LEO orbit of sufficient altitude for docking and refilling operations to occur. The assumption used here is that a fully and rapidly reusable heavy-lift launch system, with the ability to refill in orbit, is used to deploy the solar power satellite. The number of refill launches needed to prep the orbiting spacecraft so that it can travel from LEO o GEO and back is calculated, by using orbital mechanics math, from the user-provided parameters.",
    sources: ["https://ieeexplore.ieee.org/document/9900032/", "https://oig.nasa.gov/docs/IG-18-016.pdf", "https://www.nasa.gov/feature/nasa-awards-spacex-more-crew-flights-to-space-station"],
  },
  {
    label: "Vehicle Payload Mass",
    stateOfTheArtValue: 100000,
    aspirationalValue: 100000,
    unit: "kg",
    percentImprovement: 0,
    popoverText:
      "This is the mass that the launch system can place into a LEO orbit of sufficient altitude for docking and refilling operations to occur each time it launches.",
    sources: [""],
  },
  {
    label: "Vehicle Mass After LEO Payload Deploy",
    stateOfTheArtValue: 105000,
    aspirationalValue: 105000,
    unit: "kg",
    percentImprovement: 0,
    popoverText: "This is the dry mass of the orbiting vehicle (that is, not including propellant or payload) after it has deployed its payload into GEO.",
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
    label: "Installed Cost of Energy Storage per kWh",
    stateOfTheArtValue: 385,
    aspirationalValue: 385,
    unit: "USD/kWh",
    percentImprovement: 0,
    popoverText: "The state-of-the art value is based on the best 2020 values for Li-Ion LFP battery based storage system, from Figure 2 of the report referenced below. The value does not include warranty, insurance, or decommissioning costs.",
    sources: ["https://www.pnnl.gov/sites/default/files/media/file/Final%20-%20ESGC%20Cost%20Performance%20Report%2012-11-2020.pdf"],
  },
  {
    label: "Installed Cost of Energy Storage per kW",
    stateOfTheArtValue: 1541,
    aspirationalValue: 1541,
    unit: "USD/kW",
    percentImprovement: 0,
    popoverText: "The state-of-the art value is based on the best 2020 values for Li-Ion LFP battery based storage system, from Figure 2 of the report referenced below. The value does not include warranty, insurance, or decommissioning costs.",
    sources: ["https://www.pnnl.gov/sites/default/files/media/file/Final%20-%20ESGC%20Cost%20Performance%20Report%2012-11-2020.pdf"],
  },
  {
    label: "Cycle Life of Energy Storage System",
    stateOfTheArtValue: 2000,
    aspirationalValue: 2000,
    unit: "Cycles",
    percentImprovement: 0,
    popoverText: "The cycle life for an energy storage system is a function of depth of discharge (DOD) and measures the total number of cycles that the energy storage system can provide over its life.",
    sources: ["https://www.pnnl.gov/sites/default/files/media/file/Final%20-%20ESGC%20Cost%20Performance%20Report%2012-11-2020.pdf", "https://www.nrel.gov/docs/fy22osti/80688.pdf"],
  },
  {
    label: "Cost of Capital",
    stateOfTheArtValue: 0.05,
    aspirationalValue: 0.05,
    unit: "",
    percentImprovement: 0,
    popoverText: "This is the cost of borrowing money.",
    sources: [""],
  },
  {
    label: "Life of Project",
    stateOfTheArtValue: 30,
    aspirationalValue: 30,
    unit: "Years",
    percentImprovement: 0,
    popoverText: "This is the number of years that the project will be in operation.",
    sources: [""],
  },
];

function formatRowData(data) {
  return data.map((item) => {
    if (item.sources[0] != "") {
      let mobileLinksHTML = item.sources.reduce((acc, item, idx) => {
        return (acc += `<div><a href="${item}" class="mobile-link" target="_blank" rel="noopener noreferrer">View Source ${idx + 1}</a></div>`);
      }, "");

      let linksHTML = item.sources.reduce((acc, item, idx) => {
        return (acc += `<div><a href="${item}" target="_blank" rel="noopener noreferrer">View Source ${idx + 1}</a></div>`);
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
    var solarPanelAbsorptivity = parseFloat(tableData.getValue(row, 2));
    row++;
    var solarPanelEmissivity = parseFloat(tableData.getValue(row, 2));
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

    var earthsCenterToGeoDistance = 42164000; // m
    var geoCircumference = 2 * Math.PI * earthsCenterToGeoDistance;
    var earthsDiameter = 12742000; // m
    var timeInEarthsShadowInSeconds = (24 * 3600 * earthsDiameter) / geoCircumference;
    var energyStorageCapacityNeeded = (baseloadPowerDeliveredToGrid * timeInEarthsShadowInSeconds) / energyStorageDepthOfDischargeFactor; // GJ
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

    
    var rfTransmitterArrayArea = (incidentRfPower * 1e9) / rfEnergyDensitySafetyLimit; // Using the same area as is calcualted for the receiver
    var rfReceiverArrayArea = (incidentRfPower * 1e9) / rfEnergyDensitySafetyLimit;

    {
      // Calculate zeta
      var zeta = rfTransmitterArrayDiameter * rfReceiverArrayDiameter / rfWavelength / transmitterReceiverSeparation
      console.log('DTx', rfTransmitterArrayDiameter)
      console.log('DRx', rfReceiverArrayDiameter)
      console.log('wavelength', rfWavelength)
      console.log('separation', transmitterReceiverSeparation)
      console.log('zeta', zeta)

      var rfTransmitterArrayArea = Math.PI * Math.pow(rfTransmitterArrayDiameter/2, 2);
      var rfReceiverArrayArea = Math.PI * Math.pow(rfReceiverArrayDiameter/2, 2);
      var rfTransmissionEfficiencyTau = Math.sqrt(rfTransmitterArrayArea * rfReceiverArrayArea) / rfWavelength / transmitterReceiverSeparation;
      var rfTransmissionEfficiency = impericalCurve(rfTransmissionEfficiencyTau);
      console.log('rfTransmissionEfficiencyTau', rfTransmissionEfficiencyTau)
    }

    var allowableError = Math.sqrt(rfTransmitterArrayDiameter**2 + transmitterReceiverSeparation**2) - transmitterReceiverSeparation;
    var allowableErrorInWavelengths = allowableError / rfWavelength;
    console.log('allowableError', allowableError)
    console.log('allowableErrorInWavelengths', allowableErrorInWavelengths)
    
    function impericalCurve() {
      return 0.9;
    }

    var rfTransmissionEfficiency = 0.9; // Hack

    var rfPowerEmitted = incidentRfPower / (rfTransmissionEfficiency * (1 - atmosphericAttenuation));
    var rfPowerIntoTxAntennas = rfPowerEmitted / transmissionAntennaEfficiency;
    var dcElectricalPower = rfPowerIntoTxAntennas / rfPowerAmplifierConversionEfficiency;

    var stefanBoltzmannConstant = 5.67e-8; //	W/m2K4

    let solarPanelEfficiency = solarPanelEfficiencyAtRefTemp; // * (1 + solarPanelTemperatureEfficiencyFactor * (referenceTemperature - operatingTemperature));
    let panelTemperatureKelvin;
    let panelTemperatureCelcius;

    for (let itterations = 0; itterations < 5; itterations++) {
      panelTemperatureKelvin =
        ((averageSolarIrradiance * (solarPanelAbsorptivity - solarPanelEfficiency)) / (stefanBoltzmannConstant * solarPanelEmissivity * 2)) ** 0.25;
      panelTemperatureCelcius = panelTemperatureKelvin - 273.15;
      solarPanelEfficiency =
        solarPanelEfficiencyAtRefTemp * (1 + solarPanelTemperatureEfficiencyFactor * (referenceTemperature - panelTemperatureCelcius));
      //console.log(panelTemperatureCelcius, solarPanelEfficiency)
    }
    console.log("Space-Solar panelTemperatureCelcius", panelTemperatureCelcius);
    console.log("Space-Solar solarPanelEfficiency", solarPanelEfficiency);

    var incidentSolarPower = dcElectricalPower / solarPanelEfficiency;
    var absorbedSolarPower = incidentSolarPower * solarPanelAbsorptivity;
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
        // width: chartWidth * sf,
        spacingRight: 30,
        spacingLeft: 30,
        spacingTop: 30,
        spacingBottom: 30,
        // zoomType: "y",
      },
      series: [
        {
          keys: ["from", "to", "weight", "outgoing"],
          data: [
            ["Incident Solar Power", "Reflected Energy", Math.round(reflectedSolarPower * 100) / 100],
            ["Incident Solar Power", "Heating of Satellite 1", Math.round((incidentSolarPower - reflectedSolarPower - dcElectricalPower) * 100) / 100],
            ["Incident Solar Power", "DC Electrical Power", Math.round(dcElectricalPower * 100) / 100],
            ["DC Electrical Power", "Heating of Satellite 2", Math.round((dcElectricalPower - rfPowerIntoTxAntennas) * 100) / 100],
            ["DC Electrical Power", "RFAC Power To Tx Antennas", Math.round(rfPowerIntoTxAntennas * 100) / 100],
            ["RFAC Power To Tx Antennas", "Heating of Satellite 3", Math.round((rfPowerIntoTxAntennas - rfPowerEmitted) * 100) / 100],
            ["RFAC Power To Tx Antennas", "RF Power Emitted as Microwaves", Math.round(rfPowerEmitted * 100) / 100],
            ["RF Power Emitted as Microwaves", "Heating of Earth 1", Math.round((rfPowerEmitted - incidentRfPower) * 100) / 100],
            ["RF Power Emitted as Microwaves", "RF Power at Rx Antennas", Math.round(incidentRfPower * 100) / 100],
            ["RF Power at Rx Antennas", "Heating of Earth 2", Math.round((incidentRfPower - rxAntennaOutputPower) * 100) / 100],
            ["RF Power at Rx Antennas", "RFAC Power at Rx Antenna Output", Math.round(rxAntennaOutputPower * 100) / 100],
            ["RFAC Power at Rx Antenna Output", "Heating of Earth 3", Math.round((rxAntennaOutputPower - rxPowerRectifierOutputPower) * 100) / 100],
            ["RFAC Power at Rx Antenna Output", "DC Power at Rectifier Output", Math.round(rxPowerRectifierOutputPower * 100) / 100],
            ["DC Power at Rectifier Output", "Heating of Earth 4", Math.round((rxPowerRectifierOutputPower - rxPowerInverterOutputPower) * 100) / 100],
            ["DC Power at Rectifier Output", "AC Power at Inverter Output", Math.round(rxPowerInverterOutputPower * 100) / 100],
            ["AC Power at Inverter Output", "Heating of Earth 5", Math.round(energyLostInVoltageManagement * 100) / 100],
            ["AC Power at Inverter Output", "Energy Storage Recharge", Math.round(energyStorageRechargePower * 100) / 100],
            ["AC Power at Inverter Output", "AC Power to Grid", Math.round(baseloadPowerDeliveredToGrid * 100) / 100],
          ],
          type: "sankey",
          nodeWidth: 30,
          nodePadding: 140,
          minLinkWidth: 1, // Warning - may generate a misleading plot!
          nodeAlignment: 2,
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
            },
            {
              id: "Heating of Satellite 2",
              column: 2,
              name: "Heating of Satellite",
            },
            {
              id: "RFAC Power To Tx Antennas",
              column: 2,
              name: "RFAC To Tx Antennas",
            },
            {
              id: "Heating of Satellite 3",
              column: 3,
              name: "Heating of Satellite",
            },
            {
              id: "RF Power Emitted as Microwaves",
              column: 3,
              name: "Microwaves Out",
            },
            {
              id: "Heating of Earth 1",
              column: 4,
              name: "Heat",
            },
            {
              id: "RF Power at Rx Antennas",
              column: 4,
              name: "Microwaves In",
            },
            {
              id: "Heating of Earth 2",
              column: 5,
              name: "Heat",
            },
            {
              id: "RFAC Power at Rx Antenna Output",
              column: 5,
              name: "RFAC from Rx Antenna",
            },
            {
              id: "Heating of Earth 3",
              column: 6,
              name: "Heat",
            },
            {
              id: "DC Power at Rectifier Output",
              column: 6,
              name: "DC from Rectifier",
            },
            {
              id: "Heating of Earth 4",
              column: 7,
              name: "Heat",
            },
            {
              id: "AC Power at Inverter Output",
              column: 7,
              name: "AC from Inverter",
            },
            {
              id: "Heating of Earth 5",
              column: 8,
              name: "Heat",
            },
            {
              id: "Energy Storage Recharge",
              column: 8,
              name: "Energy Storage Recharge",
            },
            {
              id: "AC Power to Grid",
              column: 8,
              name: "To Grid",
            },
          ],
        },
      ],
    };

    // Create the chart
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
    // var unitCostOfLiIonBatteryStorage = parseFloat(tableData.getValue(row, 2));
    // row++;
    // var costFactorforBatteryManagementSystems = parseFloat(tableData.getValue(row, 2));
    // row++;
    var installedCostOfEnergyStoragePerkWh = parseFloat(tableData.getValue(row, 2));
    row++;
    var installedCostOfEnergyStoragePerkW = parseFloat(tableData.getValue(row, 2));
    row++;
    var cycleLifeOfEnergyStorage = parseFloat(tableData.getValue(row, 2));
    row++;
    var costOfCapital = parseFloat(tableData.getValue(row, 2));
    row++;
    var lifeofProject = parseFloat(tableData.getValue(row, 2));
    row++;

    // Tally up component costs
    var costOfSolarPanelArray = unitCostOfSolarPanels * lossesOutputData["solarPanelArrayArea"];
    var costOfSolarPanelSupportingStructure = unitCostOfSupportingStructure * lossesOutputData["solarPanelArrayArea"];
    var costOfRFTransmitterArray = unitCostOfRFTransmitter * lossesOutputData["rfTransmitterArrayArea"];
    var costOfRFTransmitterSupportingStructure = unitCostOfSupportingStructure * lossesOutputData["rfTransmitterArrayArea"];
    var costOfRFReceiverArray = unitCostOfRFReceiver * lossesOutputData["rfReceiverArrayArea"];
    var costOfRFReceiverSupportingStructure = unitCostOfSupportingStructure * lossesOutputData["rfReceiverArrayArea"];

    var installedCostOfEnergyStoragePerkWhInUSDPerGJ = (installedCostOfEnergyStoragePerkWh * 1000000) / 3600;
    var installedCostOfEnergyStoragePerkWInUSDPerGJ = (installedCostOfEnergyStoragePerkW * 1000000) / 3600;
    var numberOfDaysStorageCycledEachYear = 30;
    var numberOfTimesStorageSystemIsReplaced = Math.ceil(lifeofProject * numberOfDaysStorageCycledEachYear / cycleLifeOfEnergyStorage);
    var costOfEnergyStorageBasedOnCapacity = installedCostOfEnergyStoragePerkWhInUSDPerGJ * lossesOutputData["energyStorageCapacityNeeded"];
    var costOfEnergyStorageBasedOnPower = installedCostOfEnergyStoragePerkWInUSDPerGJ * lossesOutputData["baseloadPowerDeliveredToGrid"];
    console.log(numberOfTimesStorageSystemIsReplaced, Math.round(costOfEnergyStorageBasedOnCapacity/1e6)/1e3, 'B', Math.round(costOfEnergyStorageBasedOnPower/1e6)/1e3, 'B')
    var costOfEnergyStorageSystem = Math.max(costOfEnergyStorageBasedOnCapacity, costOfEnergyStorageBasedOnPower)
    var costOfEnergyStorage = costOfEnergyStorageSystem  * numberOfTimesStorageSystemIsReplaced;

    var totalSatelliteComponentsCost =
      costOfSolarPanelArray + costOfSolarPanelSupportingStructure + costOfRFTransmitterArray + costOfRFTransmitterSupportingStructure;

    // Tally up the mass of the components that must be placed in GEO
    var massOfSolarPanelArray = unitMassOfSolarPanels * lossesOutputData["solarPanelArrayArea"];
    var massOfSolarPanelSupportingStructure = unitMassOfSupportingStructure * lossesOutputData["solarPanelArrayArea"];
    var massOfRFTransmitterArray = unitMassOfRFTransmitter * lossesOutputData["rfTransmitterArrayArea"];
    var massOfRFTransmitterSupportingStructure = unitMassOfSupportingStructure * lossesOutputData["rfTransmitterArrayArea"];

    var totalMassToGEO =
      massOfSolarPanelArray + massOfRFTransmitterArray + massOfSolarPanelSupportingStructure + massOfRFTransmitterSupportingStructure;

    // Refilling Factor
    var deltaVLEOtoGTO = 2440; // m/s
    var deltaVGTOtoGEO = 1472; // m/s
    var vacuumEngineExhaustVelocity = 3560; //	m/s

    // Working backwards...
    // Return trip, one burn: Deceleration from GEO to GTO
    // Note: the following assumes that the vehicle can reenter directly from the perigee of an eliptical GTO orbit.
    var vehicleMassAfterGEOPayloadDeploy = vehicleMassAfterLEOPayloadDeploy * Math.exp(deltaVGTOtoGEO / vacuumEngineExhaustVelocity); // kg

    // Add the mass of the payload back in...
    var vehicleMassBeforePayloadDeploy = vehicleMassAfterGEOPayloadDeploy + vehiclePayloadToLEO; // kg

    // Outbound trip, two burns: one from LEO to GTO and the other from GTO to GEO
    var vehicleMassAfterRefilling = vehicleMassBeforePayloadDeploy * Math.exp((deltaVGTOtoGEO + deltaVLEOtoGTO) / vacuumEngineExhaustVelocity); // kg

    var propellantNeededToRefillOrbiter =
      vehicleMassAfterRefilling - vehicleMassBeforePayloadDeploy + (vehicleMassAfterGEOPayloadDeploy - vehicleMassAfterLEOPayloadDeploy); // kg
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

    var yearlyCapitalCost = (totalCapitalCost * costOfCapital * (1 + costOfCapital) ** lifeofProject) / ((1 + costOfCapital) ** lifeofProject - 1);
    // Other Costs not accounted for yet...
    // var costOfOperations = parseFloat(tableData.getValue(row, 2)); row++;
    // var costOfInsurance = parseFloat(tableData.getValue(row, 2)); row++;
    // var costOfMaintenance = parseFloat(tableData.getValue(row, 2)); row++;

    var yearlyCosts = yearlyCapitalCost; // etc.
    var hoursInYear = 8760;
    var secondsInHour = 3600;
    var energyDeliveredToGridEachYearInGJ = lossesOutputData["baseloadPowerDeliveredToGrid"] * hoursInYear * secondsInHour; // GJoules
    var energyDeliveredToGridEachYearInKiloWattsHours = (energyDeliveredToGridEachYearInGJ * 1000000) / secondsInHour;
    var costOfEnergy = yearlyCosts / energyDeliveredToGridEachYearInKiloWattsHours;
    //console.log('capitalCost', Math.round(totalCapitalCost / 1e9), 'B USD')
    //console.log('costOfEnergy', costOfEnergy, 'USD/kWh')
    //console.log('Relative Cost', Math.round(costOfEnergy / 0.05 * 100) / 100, 'times the current wholesale price of electricity in the US ($0.05/kWh)')

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
            ["Solar Panels", "Satellite Components", Math.round(costOfSolarPanelArray * 100) / 100],
            ["Solar Panel Structure", "Satellite Components", Math.round(costOfSolarPanelSupportingStructure * 100) / 100],
            ["RF Transmitter Components", "Satellite Components", Math.round(costOfRFTransmitterArray * 100) / 100],
            ["RF Transmitter Structure", "Satellite Components", Math.round(costOfRFTransmitterSupportingStructure * 100) / 100],
            ["Solar Panels (Launch)", "Launch Costs", Math.round(massOfSolarPanelArray * costPerKgToGEO * 100) / 100],
            ["Solar Panel Structure (Launch)", "Launch Costs", Math.round(massOfSolarPanelSupportingStructure * costPerKgToGEO * 100) / 100],
            ["RF Transmitter Components (Launch)", "Launch Costs", Math.round(massOfRFTransmitterArray * costPerKgToGEO * 100) / 100],
            ["RF Transmitter Structure (Launch)", "Launch Costs", Math.round(massOfRFTransmitterSupportingStructure * costPerKgToGEO * 100) / 100],
            ["Satellite Components", "Satellite Capital Cost", Math.round(totalSatelliteComponentsCost * 100) / 100],
            ["Launch Costs", "Satellite Capital Cost", Math.round(totalMassToGEO * costPerKgToGEO * 100) / 100],
            ["RF Receiver Components", "Receiver Capital Cost", Math.round(costOfRFReceiverArray * 100) / 100],
            ["RF Receiver Structure", "Receiver Capital Cost", Math.round(costOfRFReceiverSupportingStructure * 100) / 100],
            ["Energy Storage", "Receiver Capital Cost", Math.round(costOfEnergyStorage * 100) / 100],
            ["Satellite Capital Cost", "Total Capital Costs", Math.round(satelliteCapitalCost * 100) / 100],
            ["Receiver Capital Cost", "Total Capital Costs", Math.round(receiverCapitalCost * 100) / 100],
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
    document.getElementById("SBSoverallSystemEfficiency").innerHTML = (lossesOutputData["overallSystemEfficiency"] * 100).toFixed(2);
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
