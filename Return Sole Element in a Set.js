//Question link - https://edabit.com/challenge/CRzAffaQgfeATa2Yk
function elementSet(s) {
	for(let i of s)
		return i;
	
}
let s= new Set();
s.add(1);
let s1=new Set();
s1.add("apple");
let s2=new Set(); 
s2.add(false);
console.log(elementSet(s));
console.log(elementSet(s1));
console.log(elementSet(s2));