//Question link- https://edabit.com/challenge/eQs2yCBnzRZ3dnRKd
function preventChanges(obj) {

	Object.freeze(obj);
  obj.noChanges = false;
  obj.signature = "whatever";
  return obj;
}
let obj={noChanges:true};
console.log(preventChanges(obj));