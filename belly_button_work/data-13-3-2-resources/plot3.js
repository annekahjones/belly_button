// Calling to retrieve the data from the samples.json file
d3.json("samples.json").then(function(data){
    console.log(data);
});

// Modifying the call to only receive the "wfreq" values of each volunteer
//d3.json("samples.json").then(function(data){
    //wfreq = data.metadata.map(person => person.wfreq);
    //console.log(wfreq);
//});

// Modifying the call to only receive the "wfreq" values of each volunteer in descending order
//d3.json("samples.json").then(function(data){
    //wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
    //console.log(wfreq);
//});

// Modifying the call to only recieve the "wfreq" values of each volunteer in descending order and 
// filtering out the null values
//d3.json("samples.json").then(function(data){
    //wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
    //filteredWfreq = wfreq.filter(element => element != null);
    //console.log(filteredWfreq);
//});

// Object example
researcher1 = {
    name: 'Roza',
    age: 34,
    hobby: 'Hiking'
};

// Print each key-value pair in an array
console.log(Object.entries(researcher1));

// Array example
researcher2 = [['name', 'Roza'], ['age', 34], ['hobby',
'Hiking']];

// Print each trait and corresponding property
researcher2.forEach(([first, second]) => console.log(first + ": " + second));

// Print all the metadata for the first person in the dataset
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) => {console.log(key + ': ' + value);});
});