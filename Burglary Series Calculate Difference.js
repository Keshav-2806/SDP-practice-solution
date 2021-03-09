//Question link- https://edabit.com/challenge/8s2jy9hR2TAeQinKD
function calculateDifference(obj, limit) {
    let count=0;
	let x=Object.values(obj);
    for(let i of x){
        count=count+i;
    }
    return (count-limit);
}
let obj={ "baseball bat": 20 };
let limit=5;
console.log(calculateDifference(obj,limit));
let obj1={ skate: 10, painting: 20 };
let limit1=19;
console.log(calculateDifference(obj1,limit1));
let obj2={ skate: 200, painting: 200, shoes: 1 };
let limit2=400;
console.log(calculateDifference(obj2,limit2));
