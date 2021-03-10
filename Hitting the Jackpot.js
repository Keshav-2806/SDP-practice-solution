//Question link- https://edabit.com/challenge/hxyvTffvdT4E238CY
function testJackpot(result) {
    let x=(cureentValue)=>cureentValue==result[0]
    return result.every(x);
}
	

let result=["@", "@", "@", "@"];
console.log(testJackpot(result));
let result1=["abc", "abc", "abc", "abc"];
console.log(testJackpot(result1));
let result2=["SS", "SS", "SS", "SS"];
console.log(testJackpot(result2));
let result3=["&&", "&", "&&&", "&&&&"];
console.log(testJackpot(result3));
let result4=["SS", "SS", "SS", "Ss"];
console.log(testJackpot(result4));

