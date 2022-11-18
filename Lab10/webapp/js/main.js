/**
 * main.js
 */

import{ Person } from "../module/Person.js";


const person = [
    new Person("Ana Smith", new Date(1998-12-15)),
    new Person("Bob Jone", new Date(1945-11-16)),
    new Person("Carlos Slim Helu", new Date(1976-9-24)),

]
person.forEach(p => console.log(p.toString()));