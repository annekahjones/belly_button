// Creating Bar charts
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };

 var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

var trace2 = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
}

var layout2 = {
    title: "Beverage Orders",
    xaxis: {title: "Type of Beverage"},
    yaxis: {title: "Percentage Ordered"}
}

// Creating pie charts
var trace3 = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
};

var data = [trace3];

var layout3 = {
    title: "'Pie' Chart",
};

// Creating Scatter Plots
var trace4 = {
    x: [34, 24, 45, 13, 45, 26, 37],
    y: [1, 2, 3, 4, 5, 6, 7],
    mode: "markers",
    type: "scatter"
};

var data2 = [trace4];

var layout4 = {
    title: "Scatter Plot",
    xaxis: {title: "X axis"},
    yaxis: {title: "Y axis"}
};

Plotly.newPlot("plotArea", data2, layout4);

// Using the map() method
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num +5;
});
console.log(doubled);

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.population;
});
console.log(cityNames);

// Using the filter() method
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});
console.log(larger);


var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var startsS = words.filter(function(word){
    return word.startsWith("s")
});
console.log(startsS)