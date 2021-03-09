//Question link- https://edabit.com/challenge/4aaBNPnFMc3bzR7JR
function objectToArray(obj) {
    let x=Object.entries(obj);
    return x;

	
}
let obj={ D: 1,
    B: 2,
    C: 3
  };
console.log(objectToArray(obj));
let obj1={likes: 2,
dislikes: 3,
followers: 10
};
console.log(objectToArray(obj1));