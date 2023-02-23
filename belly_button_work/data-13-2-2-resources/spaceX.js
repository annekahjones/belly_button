// Call the SpaceX API
const url = "https://api.spacexdata.com/v2/launchpads";

// Get all of the results
d3.json(url).then(receivedData => console.log(receivedData));

// Get the first result
d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));

// Get the full name of the first result
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// Accessing the latitude of the first result
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

// Get the location of every results
//d3.json(url).then(spaceXResults => console.log(spaceXResults.location));

// Using the map() method to print out the lat and lng coords of each result
//var lats = 

//var lngs = 
