//Named Function Expression, or NFE, is a term for Function Expressions that have a name
//an ordinary function expression
/*let sayHi= function(who){
    console.log(`Hello,${who}`);
};
sayHi();*/

//Add to name it
/*
let sayHi=function func(who){
    console.log(`Hello ,${who}`);
  //  func("john");

}
sayHi("hii"); */


let sayHi = function func(who) {
    if (who) {
      console.log(`Hello, ${who}`);
    } else {
      func("Guest"); // use func to re-call itself
    }
  };
  
  sayHi(); // Hello, Guest
  sayHi("hyy"); 
  
  // But this won't work:
  //func();//func is not defined