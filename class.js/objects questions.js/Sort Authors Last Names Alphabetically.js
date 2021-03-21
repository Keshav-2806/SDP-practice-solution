//https://edabit.com/challenge/vtFsh5CzFep6b9gDf
/*
sortByLastName([
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
]) ➞ [
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
]
*/
function sortByLastName(books) {
    let x=books.sort(function(a,b){
        let name1=a.author.toUpperCase();
        let name2=b.author.toUpperCase();
        if(name1<name2){
            return -1;
        }
        if(name1>name2){
            return 1;
        }
        return 0;
    });
       
	return x;
}
let books=[
    { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
    { name: "Warcross", rating: "13+", author: "Marie Lu" },
    { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
  ]
console.log(sortByLastName(books));