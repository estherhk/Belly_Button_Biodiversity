// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };

// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };

// Plotly.newPlot("plotArea", [trace], layout);


// // var beverages = {
// //     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini",
// //     "nonalcoholic margarita", "ice tea", "nonalcoholic rum&cake", "nonalcoholic maitai", "nonalcoholic gin&tonic"],
// //     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
// //     type: "bar"
// // };

// // var layout = {
// //  title: "'Bar' Chart",
// //  xaxis: { title: "Drinks"},
// //  yaxis: { title: "% of Drinks Ordered"}
// // };

// // Plotly.newPlot("drinks", [beverages], layout);

// // Creating a Bar Chart
// var trace = {
//  x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//  y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//  type: "bar"
// };
// var data = [trace];
// var layout = {
//  title: "'Bar' Chart",
//  xaxis: { title: "Drinks"},
//  yaxis: { title: "% of Drinks Ordered"}
// };
// Plotly.newPlot("plotArea", data, layout);

// // Creating a Pie Chart
// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Bar' Chart",
//    };
// Plotly.newPlot("plotArea", data, layout);

// // Creating a Scatter Chart
// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     mode: 'markers',
//     type: 'scatter'
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Bar' Chart",
//    };
// Plotly.newPlot("plotArea", data, layout);

// //SKILL DRILL Practice map() method
// var numbers = [0,2,4,6,8];
// var add = numbers.map(function(plus){
//     return plus + 5;
// });
// console.log(add);

// //SKILL DRILL Practice map () method with specific object
// cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// cityPopulation = cities.map(function(city){
//     return city.population;
// });
// console.log(cityPopulation);

// //SKILL DRILL Practice filter() method
// // var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// // var animals = words.filter(function(letter){
// //     return letter [0] == "s";
// // });
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// var animals = words.filter(letter => letter.startsWith("s"));
// console.log(animals);

// // SKILL DRILL slice() method
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// slice1 = words.slice(3, );

// // Sort and Select Cities
// var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
// var topFiveCities = sortedCities.slice(0,7);

// // Create Arrays of City Names & Growth Figures
// var topFiveCityNames = topFiveCities.map(city => city.City);
// var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// // Create a Bar Chart with Arrays
// var trace = {
//     x: topFiveCityNames,
//     y: topFiveCityGrowths,
//     type: "bar"
//   };
//   var data = [trace];
//   var layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: { title: "City" },
//     yaxis: { title: "Population Growth, 2016-2017"}
//   };
//   Plotly.newPlot("bar-plot", data, layout);

  //Dropdown
  // function init() {
  //   data = [{
  //     x: [1, 2, 3, 4, 5],
  //     y: [1, 2, 4, 8, 16] }];
  //   Plotly.newPlot("plot", data);
  // };
  
  // d3.selectAll("#dropdownMenu").on("change", updatePlotly);
  // function updatePlotly() {
  //   var dropdownMenu = d3.select("#dropdownMenu");
  //   var dataset = dropdownMenu.property("value");
  
  //   var xData = [1, 2, 3, 4, 5];
  //   var yData = [];
  
  //   if (dataset === 'dataset1') {
  //     yData = [1, 2, 4, 8, 16];
  //   };
  
  //   if (dataset === 'dataset2') {
  //     yData = [1, 10, 100, 1000, 10000];
  //   };
  
  //   var trace = {
  //     x: [xData],
  //     y: [yData],
  //   };
  //   Plotly.restyle("plot", trace);
  // };
  
  // init();

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
    PANEL.append("h6").text(result.ethnicity);
    PANEL.append("h6").text(result.gender);
    PANEL.append("h6").text(result.age);
    PANEL.append("h6").text(result.location);
    PANEL.append("h6").text(result.bbtype);
    PANEL.append("h6").text(result.wfreq);
  });
};

function buildCharts(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    PANEL.append("h6").text(result.location);
  });
}