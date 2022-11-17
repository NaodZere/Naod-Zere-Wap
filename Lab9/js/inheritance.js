/**
 * inheritance.js
 */
 "use strict";

//Define a javaScript object literal named, person, with the following specification
//1,a

const Person = {
    name: "",
    dateOfBirth: "",

   getName: function(){
    return this.name;
   },
   setName: function(value){
    this.name = value;
   },

   Johnn: function() {
    this.getName = "John";
    this.dateOfBirth = '1998-12-10';
    console.log(`The person's name is ${this.getName}`);
    console.log(`John was born on ${this.dateOfBirth}`);
},

};
TheJohn.prototype = Object.create(Person);

function TheJohn(){
    return this.Johnn();
}
Person.Johnn();


//q 2


const employee = Object.create(Person, {
  salary: {
    value: 0,
  },
  hireDate: {
    value: new Date(),
  },
});

employee.doJob = function (jobTitle) {
  console.log(`${this.name} is a ${jobTitle} who earns $${this.salary}`);
};

const person3 = Object.create(employee, {
  name: {
    value: "Anna",
  },
  salary: {
    value: 249995.5,
  },
});

person3.doJob("Programmer");




//q 3
function Person2(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
}
    Person2.prototype.toString = function(){
        let output = `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}}`;
        return output;
    }
const per = new Person2("Peter", new Date(1985,10,10));
console.log(per.toString());


