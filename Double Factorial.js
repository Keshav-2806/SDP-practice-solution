//Question link- https://edabit.com/challenge/ZYE9zs95bJrBWpDxg
function doubleFactorial(num) {
    if(num==0){
        return 1;
    }else if(num==1){
        return 1;
    }else if(num%2==0){
        return num*doubleFactorial(num-2);
    }else{
        return num*doubleFactorial(num-2);
    }	
}
console.log(doubleFactorial(0));
console.log(doubleFactorial(2));
console.log(doubleFactorial(9));
console.log(doubleFactorial(14));