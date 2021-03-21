/*
Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

Examples
makeTitle("This is a title") ➞ "This Is A Title"

makeTitle("capitalize every word") ➞ "Capitalize Every Word"

makeTitle("I Like Pizza") ➞ "I Like Pizza"

makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"*/
function makeTitle(str){
    let x=str.split(" ")
    for(let i=0;i<x.length;i++){
        for(let j in i){
            if(j==0){
               let c= i[j].toUpperCase();
               return c;
            }
        }
    }
    return x;

}
console.log(makeTitle("This is a title"));
console.log(makeTitle("capitalize every word"));
