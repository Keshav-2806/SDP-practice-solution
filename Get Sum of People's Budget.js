//Question link- https://edabit.com/challenge/tmnCStcrkdWbreKP5
function getBudgets(arr) {
    
      return arr.reduce((a,b)=>a+b.budget,0);
  
	
}
let arr=[  { name: "John", age: 21, budget: 23000 },
{ name: "Steve",  age: 32, budget: 40000 },
{ name: "Martin",  age: 16, budget: 2700 }
];
console.log(getBudgets(arr));
let arr1=[  { name: "John",  age: 21, budget: 29000 },
{ name: "Steve",  age: 32, budget: 32000 },
{ name: "Martin",  age: 16, budget: 1600 }
];
console.log(getBudgets(arr1));