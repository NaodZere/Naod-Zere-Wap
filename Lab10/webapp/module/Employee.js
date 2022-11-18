/**
 * employee.js
 */

"use strict";
import { Person } from "./Person.js"

 export class Employee extends Person{
    salary;
    hireDate; 

    constructor(name, dateOfBirth, salary){
        super(name, dateOfBirth);
        this.salary = salary;
        this.hireDate = new Date();
    }
    doJob =  function(jobTitle) {
        console.log(`${this.name} is a ${jobTitle} who earns $${this.salary}`)
    }

}