//Question link- https://edabit.com/challenge/RGQXN4TG2CQoBAReQ
function numberSquares(n) {
    let x=n*(n+1)*(2*n+1);
    let y=x/6;
    return y;
	
}
let n=2;
console.log(numberSquares(n));
let n1=4;
console.log(numberSquares(n1));
let n2=5;
console.log(numberSquares(n2));