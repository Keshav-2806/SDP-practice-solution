//Question link- https://edabit.com/challenge/4gzDuDkompAqujpRi
function addUp(num) {
    if(num==1){
        return 1;
    }else{
        return num+addUp(num-1);
    }
    
	
}
let num=4;
console.log(addUp(num));
let num1=13;
console.log(addUp(num1));
let num2=600;
console.log(addUp(num2));

