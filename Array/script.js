var countries;
countries = ["India", "USA","Canada", "Switzerland"];

console.log("Begin: ", countries);

// PROPERTIES: to be discussed length,
// Methods: to be discussed --
// reverse() --> Reverse the array
// shift(), pop() --> Remove the first and remove the last value of array
// unshift("a", "b"),  push() --> Add comma-separated list of values to the front  and to the end of the array:
// splice(p,n)  --> Starts at the p index item and removes n items.
// indexof(), -->
// slice()   --> Copy array and assign to new variable
// Join()    --> converts array items to a comma-separated string containing each array
// Uncomment code and see the effect in the developer tool console when the script file changes
// ######################################################################
// Get a property of an object by name:
// console.log("Array length: ", countries.length);

// METHODS:
// Reverse the array:
countries.reverse();

// Remove the first value of the array:
countries.shift();

// Add comma-separated list of values to the front of the array:
countries.unshift("UAE", "China");

// Remove the last value of the array:
countries.pop();

// Add comma-separated list of values to the end of the array:
countries.push("Iceland", "Bali");

// Find the specified position (pos) and remove n number of items from the array. Arguments: pens.splice(pos,n):
// countries.splice(pos, n) // Starts at the seccond item and removes two items.

console.log("Meanwhile more changes happening to array: ", countries);

// Create a copy of an array. Typically assigned to a new variable:
// var newcountries = countries.slice();
// console.log("New countries: ", newcountries);

// Return the first element that matches the search parameter after the specified index position. Defaults to index position 0. Arguments: pens.indexOf(search, index):
// var result = countries.indexOf(search, index);
// console.log("The search result index is: ", result);

// Return the items in an array as a comma separated string. The separator argument can be used to change the comma to something else. Arguments: pens.join(separator):
// var arrayString = countries.join(separator);
// console.log("String from array: ", arrayString);
