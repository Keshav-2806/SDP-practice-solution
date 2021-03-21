/*
Create a function that checks to see if two object arguments are 
equal to one another. Return true if the objects are equal,
 otherwise, return false.
*/
function isEqual(objOne, objTwo) {
    let x=JSON.stringify(objOne);
    let y=JSON.stringify(objTwo);
    if(x==y){
        return true;
    }
    return false;
	
}
let objOne={
    name: "Benny",
    phone: "3325558745",
    email: "benny@edabit.com"
  };
let objTwo={
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
  };
console.log(isEqual(objOne,objTwo));

let objOne1={
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
  };
let objTwo1={
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
  }
  console.log(isEqual(objOne1,objTwo1)); 
  