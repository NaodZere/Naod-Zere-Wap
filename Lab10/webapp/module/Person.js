/**
 * Person.js
 */

"use strict";

export class Person{
    name = "";
    dateOfBirth = "";

    constructor(name, dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }

    getName = function(){
        return this.name;
    }

  setName = function(value){
        this.name = value;
    }
 getDateOfBirth = function(){
        return this.dateOfBirth;
    }
  setDateOfBirth = function(value){
        this.dateOfBirth = value;
    }

    toString(){
        return `Name: ${this.getName()}, DateOfBirth: ${this.getDateOfBirth().getFullYear()}-${this.getDateOfBirth().getMonth()+ 1}- ${this.getDateOfBirth().getDate()}`
    }
}

// const per = new Person("Ana Smith", Date(1998-12-15));
// console.log(per.toString());