// nested setTimeout 
let timerId = setTimeout(function tick() {
    console.log('tick');
    timerId = setTimeout(tick, 2000); // (*)
  }, 2000);
  setTimeout(()=>{clearTimeout(timerId);console.log('stop');},8000);
 
  
  //by setInterval 
  
  let timerId1=setInterval(() => {
    console.log("tick")
    
  }, 2000);
  setTimeout(() => {clearInterval(timerId1);
    console.log("stop")
    
  }, 8000);
  
