//Question link- https://edabit.com/challenge/caeSeQ3K53GMQKenX
function getDistance(a, b) {
    let w=Object.values(a);
    let u=Object.values(b);
    let c=u[0]-w[0];
    let d=u[1]-w[1];
    let e=c*c;
    let f=d*d;
    let g=e+f;
    let h=g**.5;
    return h
    
	
}
let a={x:-2,y:1};

let b={x:4,y:3};
console.log(getDistance(a,b));