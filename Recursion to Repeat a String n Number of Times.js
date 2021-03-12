//Question link- https://edabit.com/challenge/MjqneMZ7aZa8AxXZG
function repetition(txt, n) {
    if(n<0){
        return ""
    }else if(n==1){
        return txt;
    }else{
        return txt+repetition(txt,n-1);
    }
	
}
let txt="ab";
let n=3;
console.log(repetition(txt,n));
console.log(repetition("kiwi",1));
console.log(repetition("cherry",2));