const url = "https://api.spacexdata.com/v2/launchpads";

//retrieve full name
// d3.json(url).then(spaceXResults =>console.log(spaceXResults[0].full_name));

// //retrieve latitude
// d3.json(url).then(spaceXResults =>
//     console.log(spaceXResults[0].location.latitude));

// d3.json(url).then(spaceXResults =>
//     console.log(spaceXResults[0].location.longitude));    

// var location = url.map(function(location){
//     return latitude;
// });


d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
    person.wfreq).sort((a,b) => b - a);
   filteredWfreq = wfreq.filter(element => element !=
    null);
    console.log(filteredWfreq);
});

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});