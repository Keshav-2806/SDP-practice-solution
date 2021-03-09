//Question link- https://edabit.com/challenge/5xrKJPsXLG3czFpuq
function isObject(value) {
    if(typeof value==='object'){
        return true;
    }else{
        return false;
    }
	
}
let value=function add(x,y) {return x + y};
console.log(isObject(value));
let value1={};
console.log(isObject(value1));
let value2=("");
console.log(isObject(value2));