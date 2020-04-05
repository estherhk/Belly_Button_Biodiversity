function init() {
  var selector = d3.select("#selDataset");
  
  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
    const firstSample = sampleNames[0];
    buildMetadata(firstSample);
    buildCharts(firstSample);
  })}
  
init();

function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
};

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");
      
    PANEL.html("");
    PANEL.append("h6").text(`ID: ${result.id}`);
    PANEL.append("h6").text(`Ethnicity: ${result.ethnicity}`);
    PANEL.append("h6").text(`Gender: ${result.gender}`);
    PANEL.append("h6").text(`Age: ${result.age}`);
    PANEL.append("h6").text(`Location: ${result.location}`);
    PANEL.append("h6").text(`Bbtype: ${result.bbtype}`);
    PANEL.append("h6").text(`Wfreq: ${result.wfreq}`);
  });
};

//Create Bar Chart
function barChart(sample){
  d3.json("samples.json").then((data) => {
    var samples= data.samples;
    var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    var currentSample = resultArray[0];

    var barSamples = {
      x: currentSample.sample_values.slice(0,10).reverse(),
      y: currentSample.otu_ids.slice(0,10).map(otuID=> "OTU " + otuID.toString()).reverse(),
      text: currentSample.otu_labels.reverse(),
      type: 'bar',
      orientation: 'h'
    };
    var layout = {
      title: "<b>Belly Button Top 10 OTUs</b>",
      xaxis: { title: "Sample Values"},
      yaxis: { title: "OTU IDs"}
    };
    
    Plotly.newPlot("bar", [barSamples], layout);
  });
}

//Create Gauge Chart
function gaugeChart(sample){
  d3.json("samples.json").then((data) => {
    var samples= data.metadata;
    var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    var currentSample = resultArray[0];
  
    var gaugeSamples = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: currentSample.wfreq,
        title: "<b>Belly Button Washing Frequency</b> <br>Scrubs per Week",
        type: 'indicator',
        mode: 'gauge+number',
        gauge: {
          bar: {color: "1ea4b0"},
          axis: {range: [0,9]},
          steps: [
            {range: [0,2], color: "#f7f2eb"},
            {range: [2,4], color:"#e8e6c8"},
            {range: [4,6], color: "#d4e494"},
            {range: [6,8], color: "#86be7e"},
            {range: [8,9], color: "#7fb485"}  
          ]
          }
      }
    ]; 
    var layout = { 
      width: 600, height: 500, margin: { t: 0, b: 0 } 
    };

    Plotly.newPlot('gauge', gaugeSamples, layout);
  });
}

//Create Bubble Chart
function bubbleChart(sample){
  d3.json("samples.json").then((data) => {
    var samples= data.samples;
    var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    var currentSample = resultArray[0];

    var bubbleSamples = {
      x: currentSample.otu_ids,
      y: currentSample.sample_values,
      text: currentSample.otu_labels,
      mode: 'markers',
      marker: {
        color: currentSample.otu_ids,
        colorscale: 'Earth',
        opacity: [1, 0.8, 0.6, 0.4],
        size: currentSample.sample_values.map(sampleSize => sampleSize/2) 
      }
    };

    var layout = {
      title: "<b>Belly Button Bacterias</b>",
      showlegend: false,
      xaxis: { title: "OTU ID"},
      yaxis: { title: "Sample Values"}
    };
    
    Plotly.newPlot("bubble", [bubbleSamples], layout);
  });
}  


// Create Charts
function buildCharts(sample) {
 barChart(sample)
 gaugeChart(sample)
 bubbleChart(sample)
}
