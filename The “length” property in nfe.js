//rest parameters are not counted
function f1() {}
function f3(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length); // 0
console.log(f3.length);//1
console.log(f2.length); // 2
console.log(many.length);//2
