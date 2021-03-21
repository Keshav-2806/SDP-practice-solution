/*
Create a function that takes an array of objects like 
{ name: "John", notes: [3, 5, 4] } and returns an array 
of objects like { name: "John", topNote: 5 }.

If student has no notes (an empty array) then let's assume 
 topNote: 0.

Examples
getStudentsWithNamesAndTopNotes({ "name": "John", "notes": [3, 5, 4] })
➞ { "name": "John", "topNote": 5 }

getStudentsWithNamesAndTopNotes({ "name": "Max", "notes": [1, 4, 6] })
➞ { "name": "Max", "topNote": 6 }

getStudentsWithNamesAndTopNotes({ "name": "Zygmund", "notes": [1, 2, 3] })
➞ { "name": "Zygmund", "topNote": 3 }
*/
function getStudentsWithNamesAndTopNotes(students){
   let topNote;
   return students.reduce((acc,cur)=>{
       cur.notes.length===0?topNote=0:
       topNote=Math.max(...cur["notes"]);
       cur["topNote"]=topNote;
       delete cur.notes
   },0)
};
let students={ "name": "John", "notes": [3, 5, 4] };
console.log(getStudentsWithNamesAndTopNotes(students));