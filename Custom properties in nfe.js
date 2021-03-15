function sayHi() {
    console.log("Hi");
  
    // let's count how many times we run
    sayHi.counter++;
  }
  sayHi.counter = 0; // initial value
  
  sayHi(); // Hi
  sayHi(); // Hi
  sayHi();
  
  console.log( sayHi.counter );

//using variable scope and closure
 
function makeCounter1() {
  
    function counter1() {
      return counter1.count++;
    };
  
    counter1.count = 0;
  
    return counter1;
  }



  
  let counter1 = makeCounter1();
  console.log( counter1() ); // 0
  console.log( counter1() );
  