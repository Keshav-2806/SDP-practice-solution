//Question link- https://edabit.com/challenge/rgXMMHEmbh2MCKSrM
function factorial(num) {
    if(num==0){
        return 1;
    }else if(num==1){
        return 1;
    }else{
        return num*factorial(num-1);
    }
	
}
let num=4;
console.log(factorial(num));
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(1));
console.log(factorial(0));
