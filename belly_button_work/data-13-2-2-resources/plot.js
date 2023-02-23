console.log(cityGrowths);

// Sort the cities by population growth in descending order
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

// choose the top 5 citiies in terms of population growth
var topFiveCities = sortedCities.slice(0,5);

// Creating the separate arrays for top 5 city growth names and growth numbers
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// Rendering the arrays in Plotly
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);


// choose the top 7 citiies in terms of population growth
var topSevenCities = sortedCities.slice(0,7);

// Creating the separate arrays for top 7 city growth names and growth numbers
var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.Increase_from_2016));

// Rendering the arrays in Plotly
var trace = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);