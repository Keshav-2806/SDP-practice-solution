//rest parameter
/*
function sum(a,b){
    console.log(a);
    console.log(b);
}
sum(1,2,3,4);*/
//function sum(a,...b){
//     console.log(a);
//     console.log(b);}
//sum(1,2,3,4);

//spread operator
function x(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
}
let v=[1,2,3,4];
x(...v)//spread 