//Question link- https://edabit.com/challenge/ebcd4Xu8TLizaj6dm
function arrayOfMultiples (num, length) {
    let arr=[];
    for(let i=1;i<length+1;i++){
        let x=num*i;
        arr.push(x);
    }
    return arr;
    
    
}
let num=7;
let length=5;
console.log(arrayOfMultiples(num,length));
let num1=12;
let length1=10;
console.log(arrayOfMultiples(num1,length1));
console.log(arrayOfMultiples(17,6));