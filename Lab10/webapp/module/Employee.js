/**
 * employee.js
 */

"use strict";
import { Person } from "./Person.js"

class Employee extends Person{
    salary;
    hireDate; 

    constructor(salary, hireDate){
        this.salary = salary;
        this.hireDate = hireDate;
    }
    doJob =  function(jobTitle) {
        
    }

}