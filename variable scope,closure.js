//by regular func.
let a=10;
function sum(){
    let b=90
    return a+b;
}
console.log(sum());

// by nested function
function runExp(){
    var a1=10;
    function add(){
        var b1=90
        return a1+b1;
    }
   // console.log(b);
    return add();
    
}
console.log(runExp());


//by nested function(closure)
function runexp1(){
    var a2=10;
    function add(b2){
        return a2+b2;
    }
    console.log(add(90),add(10));
}
runexp1();



//closures:
function foo(){
    var x=10;
    function inner(){
        return x;
    }
    return inner();
}
console.log(foo());
console.log(foo());