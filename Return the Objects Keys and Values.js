//Question link- https://edabit.com/challenge/AP4hnF97anRc2mAZ6
function keysAndValues(obj) {
    let x= Object.keys(obj);
    let y=Object.values(obj);
    
    return [x.sort(),y];
}
let obj={ a: 1, b: 2, c: 3}
console.log(keysAndValues(obj));
let obj1={ a: "Apple", b: "Microsoft", c: "Google" };
console.log(keysAndValues(obj1));
let obj2={ key1: true, key2: false, key3: undefined };
console.log(keysAndValues(obj2));


