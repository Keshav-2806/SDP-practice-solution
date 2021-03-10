//Question link- https://edabit.com/challenge/Hs4TpDHX57Rqegmgg
/*let arg=[1, 2, 3];
let arg1=[4, 5];
let arg2= [6, 7];
let x=arg.concat(arg1,arg2);
console.log(x);*/
function concat(...args) {
    let y=[]
   let x= y.concat(...args)
	return x;
}
let arg=[1, 2, 3];
let arg1=[4, 5];
let arg2= [6, 7]
console.log(concat(arg,arg1,arg2));
let arg3=[1, 2];
let arg4=[3,4];
console.log(concat(arg3,arg4));



