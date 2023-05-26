// Load the Google Charts API
google.charts.load("current", { packages: ["table"] });
google.charts.setOnLoadCallback(initilizePage);

const TSlossesTableRowData = [
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
    popoverText:
      "This is the \"in-space\" value and it ranges from 1321 to 1414 throughout the year. The Earth is nearer the sun when it is summer in the southern hemisphere and winter in the northern hemisphere. If supplying energy is hardest in the summer, use the summer value for your hemisphere.",
    sources: ["https://en.wikipedia.org/wiki/Solar_irradiance"],
  },
  {
    label: "Solar Panel Cell Efficiency At Ref Temp",
    stateOfTheArtValue: 0.2,
    aspirationalValue: 0.2,
    unit: "",
    percentImprovement: 0,
    popoverText:
      "The National Renewable Energy Laboratory provides efficiencies of many research cells and \"champion\" modules. This value is not intended to be the highest value on either of these charts. This value is the efficiency, at a “reference temperature” (typically 25&deg;C), of the photovoltaic technology that achieves the highest Levelized Cost of Energy (LCoE).",
    sources: ["https://www.nrel.gov/pv/cell-efficiency.html", "https://www.nrel.gov/pv/module-efficiency.html"],
  },
  {
    label: "Reference Temperature",
    stateOfTheArtValue: 25,
    aspirationalValue: 25,
    unit: "&deg;C",
    percentImprovement: 0,
    popoverText: "The reference temperature is the temperature that was used to determine the solar panel's efficiency. It is typically 25&deg;C, but if you have a specification sheet for a solar panel, you should confirm that this is the value that they are using.",
    sources: [""],
  },
  {
    label: "Solar Panel Temperature Efficiency Factor",
    stateOfTheArtValue: 0.0045,
    aspirationalValue: 0.0045,
    unit: "1/&deg;C",
    percentImprovement: 0,
    popoverText: "The temperature of a solar panel has a direct effect on its ability to generate electricity. This has to do with the laws of thermodynamics and how heat limits any electronics ability to produce power.",
    sources: ["https://www.solar.com/learn/does-solar-panel-temperature-coefficient-matter/"],
  },
  {
    label: "Solar Panel Operating Temperature",
    stateOfTheArtValue: 30,
    aspirationalValue: 30,
    unit: "&deg;C",
    percentImprovement: 0,
    popoverText: "This is the temperature that the panel is expected to operate at. This is several &deg;C above the average ambient temperature.  In practice, the operating temperature of a solar cell in outdoor conditions is typically 50&deg;C–55&deg;C or higher. This heating has significant adverse consequences for the performance and reliability of solar cells.",
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
    label: "Latitude of Installation Site",
    stateOfTheArtValue: 39.742043,
    aspirationalValue: 39.742043,
    unit: "degrees",
    percentImprovement: 0,
    popoverText: "This value is used to estimate the amount of time that the panel will be exposed to sunlight on the shortest day of the year.",
    sources: [""],
  },
  {
    label: "Horizon-to-Horizon Angle",
    stateOfTheArtValue: 170,
    aspirationalValue: 170,
    unit: "degrees",
    percentImprovement: 0,
    popoverText: "This value is used to estimate the amount of time that the panel will be exposed to sunlight on the shortest day of the year. If you have a specific site in mind, you can measure the angle to the horizon where the sun rises and sets to determine the horizon to horizon angle. It will be 180&deg; for someone in a raft on the ocean. It will be less in a location with nearby trees or mountains.",
    sources: [""],
  },
  {
    label: "Atmosphere Attenuation",
    stateOfTheArtValue: 0.2,
    aspirationalValue: 0.2,
    unit: "",
    percentImprovement: 0,
    popoverText:
      "Atmospheric conditions can reduce direct beam radiation by 10% on clear, dry days and by 100% during thick, cloudy days.",
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
    popoverText: "This value represents how clean the panels are kept on average. If the panels perfectly clean, then enter a value of zero. Pollen, dust, leaves, snow, and grime cause the value to be higher.",
    sources: ["https://www.sciencedirect.com/science/article/abs/pii/S0048969722011421"],
  },
  {
    label: "Voltage Management Factor",
    stateOfTheArtValue: 0.95,
    aspirationalValue: 0.95,
    unit: "",
    percentImprovement: 0,
    popoverText: "Panel power is maximized when the current and voltage are optimized, and this is done by a device that converts the DC power from the panel from the optimal panel voltage to a different voltage (either AC or DC) more suitable for energy storage or transmission. This value represents the efficiency of that convertor.",
    sources: [""],
  },
  {
    label: "Battery Depth Of Discharge Factor",
    stateOfTheArtValue: 0.8,
    aspirationalValue: 0.8,
    unit: "",
    percentImprovement: 0,
    popoverText: "The analysis currently assumes that energy storage uses a battery of some kind. The cycle-life of most batteries can be improved by not fully charging and discharging them every cycle. Depth-of-dischrge is the portion of full charge that will actually be used, in the interest of increasing the batteries cycle-life.",
    sources: [""],
  },
  {
    label: "Battery Round Trip Efficiency",
    stateOfTheArtValue: 0.8,
    aspirationalValue: 0.8,
    unit: "",
    percentImprovement: 0,
    popoverText: "This is the portion of the energy that is stored in the batteries can be recovered. The rest is lost to heat.",
    sources: [""],
  },
  {
    label: "DC to AC (Power Inverter Efficiency)",
    stateOfTheArtValue: 0.9,
    aspirationalValue: 0.9,
    unit: "",
    percentImprovement: 0,
    popoverText: "This is the efficeincy of the device that converts DC power from the battery or panels to AC power at the freqeuncy of the grid, typically 50Hz or 60Hz.",
    sources: [""],
  },
  {
    label: "Horizontal Power Transmisison Factor",
    stateOfTheArtValue: 1,
    aspirationalValue: 1,
    unit: "USD/m",
    percentImprovement: 0,
    popoverText: "Power also needs to be transmitted from where it is collected to where it is needed. For example, by placing a solar farm in a far away desert, the cost of the land can be reduced, but the cost of transmission lines and the energy loss over those power lines will be greater. This value represents the efficiency of the power lines and will depend on site selection.",
    sources: [""],
  },
];
// Should add "step-up transformer efficiency"
// Should investigate if panel voltage management and DC->AC inverter electronics are generally combined into a single system with a single efficiency.

const TScostsTableRowData = [
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
    label: "Other Hardware, Installation, and Soft Costs",
    stateOfTheArtValue: 300,
    aspirationalValue: 300,
    unit: "USD/m2",
    percentImprovement: 0,
    popoverText: "Varies significantly by country. Includes soft costs such as margin and permitting, installation costs, and hardware costs (other than photovoltaic modules).",
    sources: ["https://ourworldindata.org/grapher/solar-pv-system-costs", "https://www.irena.org/publications/2019/May/Renewable-power-generation-costs-in-2018#RestrictedModal"],
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
  {
    label: "Yearly Operating Costs",
    stateOfTheArtValue: 10,
    aspirationalValue: 10,
    unit: "Million",
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
    lossesTableData.addRows(formatRowData(TSlossesTableRowData));

    initTable("TSlossesTable", lossesTableData);
  }

  function initCostsTableData(costsTableData) {
    // Define the data for the editable table
    costsTableData.addColumn("string", "Label");
    costsTableData.addColumn("number", "State-of-The-Art Value");
    costsTableData.addColumn("number", "Aspirational Value");
    costsTableData.addColumn("string", "Unit");
    costsTableData.addColumn("number", "% Improvement");
    costsTableData.addRows(formatRowData(TScostsTableRowData));
    initTable("TScostsTable", costsTableData);
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

    var solarPowerNearPanel = incidentSolarPower / (1 - dirtAndDebrisAttenuation);
    var solarPowerLostToDirtAndDebris = solarPowerNearPanel * dirtAndDebrisAttenuation;
    var unattenuatedSolarPower = solarPowerNearPanel / (1 - atmosphereAttenuation);
    var solarPowerLostToAtmosphere = unattenuatedSolarPower * atmosphereAttenuation;

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
        // width: chartWidth * sf,
        spacingRight: 30,
        spacingLeft: 30,
        spacingTop: 30,
        spacingBottom: 30,
        // zoomType: "y",
      },
      series: [
        {
          keys: ["from", "to", "weight"],
          data: [
            ["Unattenuated Solar Power", "Atmosphere Loss", solarPowerLostToAtmosphere],
            ["Unattenuated Solar Power", "Solar Power Near Panel", solarPowerNearPanel],
            ["Solar Power Near Panel", "Dirt and Debris Loss", solarPowerLostToDirtAndDebris],
            ["Solar Power Near Panel", "Incident Solar Power", incidentSolarPower],
            ["Incident Solar Power", "Reflected Energy", reflectedSolarPower],
            ["Incident Solar Power", "Lost as Heat 1", incidentSolarPower - reflectedSolarPower - dcElectricalPower],
            ["Incident Solar Power", "DC Electrical Power", dcElectricalPower],
            [
              "DC Electrical Power",
              "Lost as Heat 2",
              energyStorageRechargePower * (1 - energyStorageVoltageManagementFactor),
            ],
            ["DC Electrical Power", "Energy Storage Recharge", energyStorageRechargePower],
            ["DC Electrical Power", "DC Power at Inverter Input", powerInverterInputPower],
            ["DC Power at Inverter Input", "Lost as Heat 3", powerInverterInputPower - powerInverterOutputPower],
            ["DC Power at Inverter Input", "AC Power to Grid", powerInverterOutputPower],
          ],
          type: "sankey",
          nodeWidth: 30,
          nodePadding: 120,
          minLinkWidth: 1, // Warning - may generate a misleading plot!
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
              name: "Reflected Energy",
            },
            {
              id: "Lost as Heat 1",
              column: 3,
              name: "Lost as Heat",
            },
            {
              id: "DC Electrical Power",
              column: 3,
              name: "DC From Panel",
            },
            {
              id: "Lost as Heat 2",
              column: 4,
              name: "Lost as Heat",
            },
            {
              id: "Energy Storage Recharge",
              column: 4,
              name: "Energy Storage Recharge",
            },
            {
              id: "DC Power at Inverter Input",
              column: 4,
              name: "To Inverter",
            },
            {
              id: "Lost as Heat 3",
              column: 5,
              name: "Lost as Heat",
            },
            {
              id: "AC Power to Grid",
              column: 5,
              name: "AC to Grid",
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
    var unitCostOfHardwareInstallEtc = parseFloat(tableData.getValue(row, 2));
    row++;
    var unitCostOfLiIonBatteryStorage = parseFloat(tableData.getValue(row, 2));
    row++;
    var costFactorforBatteryManagementSystems = parseFloat(tableData.getValue(row, 2));
    row++;
    var costOfCapital = parseFloat(tableData.getValue(row, 2));
    row++;
    var lifeofProject = parseFloat(tableData.getValue(row, 2));
    row++;
    var yearlyOperatingCosts = parseFloat(tableData.getValue(row, 2));
    row++;

    // Tally up component costs
    var costOfSolarPanelArray = unitCostOfSolarPanels * lossesOutputData["solarPanelArrayArea"];
    var costOfSolarPanelHardwareInstallEtc = unitCostOfHardwareInstallEtc * lossesOutputData["solarPanelArrayArea"];
    var unitCostOfLiIonBatteryStorageInUSDPerGJ = (unitCostOfLiIonBatteryStorage * 1000000) / 3600;
    var costOfEnergyStorage =
      unitCostOfLiIonBatteryStorageInUSDPerGJ *
      lossesOutputData["energyStorageCapacityNeeded"] *
      (1 + costFactorforBatteryManagementSystems);
    var totalSatelliteComponentsCost = costOfSolarPanelArray + costOfSolarPanelHardwareInstallEtc;

    var totalComponentsCost = totalSatelliteComponentsCost + costOfEnergyStorage;
    var satelliteCapitalCost = totalSatelliteComponentsCost;
    var totalCapitalCost = totalComponentsCost; // etc.

    var yearlyCapitalCost =
      (totalCapitalCost * costOfCapital * (1 + costOfCapital) ** lifeofProject) /
      ((1 + costOfCapital) ** lifeofProject - 1);
    //console.log(totalSatelliteComponentsCost/1e9, costOfEnergyStorage/1e9, yearlyCapitalCost/1e9);
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
            ["Solar Panels", "Solar Power Plant", costOfSolarPanelArray],
            ["Hardware, Install, Etc.", "Solar Power Plant", costOfSolarPanelHardwareInstallEtc],
            ["Solar Power Plant", "Capital Costs", totalSatelliteComponentsCost],
            ["Energy Storage", "Capital Costs", costOfEnergyStorage],
            ["Capital Costs", "Total Costs", satelliteCapitalCost + costOfEnergyStorage],
            ["Operating Costs", "Total Costs", yearlyOperatingCosts*1e6*lifeofProject],
          ],
          type: "sankey",
          nodeWidth: 30,
          nodePadding: 20,
          minLinkWidth: 1, // Warning - may generate a misleading plot!
          borderRadius: 0,
          nodes: [
            {
              id: "Solar Power Plant",
              offsetVertical: -40,
            },
            {
              id: "Capital Costs",
              offsetVertical: -10,
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
