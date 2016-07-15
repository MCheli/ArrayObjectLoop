var _ = require('underscore'); //Import the underscore library

//Instantiate the array of objects
var objectArray = [
    {
        name: "First",
        condition: false
    },
    {
        name: "Second",
        condition: true
    },
    {
        name: "Third",
        condition: false
    },
    {
        name: "Fourth",
        condition: true
    }];

//The object(s) that will be used as a filter in the search
var searchObject = [
    {name: "First"},
    {name: "Fourth"}
];

var names = {}; //Instantiates the name object

//Creates a truth test for filter
_.each(searchObject, function (object) { //http://underscorejs.org/#each
    names[object.name] = true;
});

//Applies filter to create a minimal array of objects
var minObjectArray = _.filter(objectArray, function (val) { //http://underscorejs.org/#filter
    return names[val.name];
}, searchObject);

for (var i = 0; i < minObjectArray.length; i++) { //Loop through the array
    var object = minObjectArray[i]; //Examine single object
    object.newAttribute = "Added a new attribute"; //Add the new attribute to the object
}

console.log("The filter object is: " + JSON.stringify(searchObject, undefined, 2));
console.log("The names object is: " + JSON.stringify(names, undefined, 2))
console.log("The minObjectArray object is: " + JSON.stringify(minObjectArray, undefined, 2))
console.log("The final result is: " + JSON.stringify(objectArray, undefined, 2))
