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

for (var i = 0; i < objectArray.length; i++) { //Loop through the array
    var object = objectArray[i]; //Examine single object
    if (object.condition) { //Evaluate name
        object.newAttribute = "Added a new attribute"; //Add the new attribute to the object
    }
}

//Print the result of transformation
console.log(JSON.stringify(objectArray, undefined, 2));