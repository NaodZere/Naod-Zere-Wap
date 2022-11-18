/**
 * Person.js
 */

// "use strict";

export class Person{
    name = "";
    dateOfBirth = "";

    constructor(name, dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }

    getname = function(){
        return this.name;
    }

  setname = function(value){
        this.name = value;
    }
 getdateOfBirth = function(){
        return this.dateOfBirth;
    }
  setdateOfBirth = function(value){
        this.dateOfBirth = value;
    }

    toString(){
        return `Name: ${this.getname()}, DateOfBirth: ${this.getdateOfBirth()} `
    }
}

// const per = new Person("Ana Smith", Date(1998-12-15));
// console.log(per.toString());