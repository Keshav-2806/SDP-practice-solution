//Question link- https://edabit.com/challenge/PyLwHawLofXKZWw4i
function collatz(num) {
   if(num<=0){
       return "enter valid input"
    }
    let c=0;
    let n=num;
    while(n!==1){
        if(n%2==0){
            n=n/2;
        }else{
            n=n*3+1;
        }
        c++
    }
    return c;
	}
console.log(collatz(10));
console.log(collatz(2));
console.log(collatz(3));
console.log(collatz(22));