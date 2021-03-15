/*
Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

Make two variants of the solution.

Using setInterval.
Using nested setTimeout.
*/


//using setInterval

function printNumbers(from, to){
    let current=from;
    let timerId=setInterval(function(){
        console.log(current);
        if(current==to){
            clearInterval(timerId);

        }
        current++;
        
    },1000);

}
printNumbers(5,10);

//by using nested setTimeout

function printNumbers1(from,to){
    let current1 = from;
    setTimeout(function go(){
        console.log(current1);
        if(current1<to){
            setTimeout(go,1000);
        }
        current1++;
    },1000);
}
printNumbers1(5,10);