/**
 * main.js
 */

import{ Person } from "../module/Person.js";
import { Employee } from "../module/Employee.js";

const person = [

    new Person("Ana Smith", new Date(1998,11,15)),
    new Person("Bob Jone", new Date(1945,11,16)),
    new Person("Carlos Slim Helu", new Date(1976,8,24)),

]
person.forEach(p => console.log(p.toString()));

//or
// for (const per of person) {
//     console.log(per.toString())
    
// }

const hanson = new Employee("Jim Hanson", new Date(1998,10,12), 245990.0);

hanson.doJob("Software Engineer");
// console.log(hanson);