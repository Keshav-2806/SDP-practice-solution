let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return this.name +" "+this.surname;
    }
  };
  
  console.log(user.fullName);//John Smith
  user.fullName="test";//property has only a getter 
  console.log(user.fullName);//John Smith
