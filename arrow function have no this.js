//ForEach the arrow function is used,so this.title in it is exactly the same as in the outer method
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(
        student => console.log(this.title + ': ' + student)
      );
    }
  };
  
  group.showList();


  //with the regular function ,there would be an error
  //The error occurs because forEach runs functions with this=undefined by default,
  // so the attempt to access undefined.title is made.
  
  let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList1() {
      this.students.forEach(function(student) {
        // Error: Cannot read property 'title' of undefined
        console.log(this.title + ': ' + student);
      });
    }
  };
  
  group1.showList1();