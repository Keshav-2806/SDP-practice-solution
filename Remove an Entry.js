//Question link- https://edabit.com/challenge/y4K6Mi7XfaauvoT3u
function removeEntry(obj, itemName) {
    delete obj[itemName];
    return obj;
	
}
let obj={ piano: 300, tv: 100, skate:50 }
let itemName="skate";
console.log(removeEntry(obj,itemName));
let obj1={ mirror: 500, painting: 1 };
let itemName1="mirror";
console.log(removeEntry(obj1,itemName1));