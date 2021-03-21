/*
Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

Examples
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) ➞ []
Notes
Return an empty array if the object is empty.*/
function toArray(obj){
    let x=Object.entries(obj);
    return x;

}
let obj={ a: 1, b: 2 };
console.log(toArray(obj));
let obj1={ shrimp: 15, tots: 12 };
console.log(toArray(obj1));
let obj2={};
console.log(toArray(obj2));
