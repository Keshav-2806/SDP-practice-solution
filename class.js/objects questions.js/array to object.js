/*
Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

Examples
mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }

mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }

mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }


*/
function mappling(letters){
    let x= letters.reduce((a,b)=>{
        a[b]=b.toUpperCase()
        return a;
    },{})
    return x;

}
let letters=["p","s"];
console.log(mappling(letters));
let letters1=["a", "b", "c"];
console.log(mappling(letters1));
let letters2=["a", "v", "y", "z"];
console.log(mappling(letters2));











