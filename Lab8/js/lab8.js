/**
 * lab8.js
*/
     "use strict";
// q 6


(function (){
    var counter = 0;
 
    function add(number){
         counter += number ;
    }
    function reset(){
        counter = 0;
    }

    add(3);
    add(4);
    reset();
    add(4); 
 console.log(`Reset: ${counter}`);

}());

{

    let count = 0;
    const add = function(n){
        count += n;
    
    }
    const reset = function(){
        count = 0;
    }
    add(4);
    add(3);
    reset();
    add(2);
    console.log(`reset2: ${count}`);
};

//q 7
/**
 * the free variabels in my funcions is count
 */


//q 8
(function (){
    var counter = 0;

    function adder(inc){
        return counter += inc;
    }
   
    adder(7);
    adder(7);
    adder(7);

    console.log(`Adder: ${counter}`);

}());



//q9

// we can decleare and excute it inside a function and we can call it immidetly () 
//then they will not be in the golobal namespace

//Other way removing the names from the global namespace using "module pattern"
//



//q 10
const Employee = (function(){
    let name = "";
    let age = 0;
    let salary = 0;

    function setAge(newAge){
        age = newAge;
    }
    function setSalary(newSalary){
        salary = newSalary;
    }
    function setName(newName){
        name = newName;
    }
    function getAge(){
        return age;
    
    }
    function getName(){
        return name;
    }
    function getSalary(){
        return salary;
    }
    function increaseSalary(percentage){
    const  addSalary = getSalary() * percentage;
    }
    function increamentAge(){
        getAge()++;
    }
    return{
        MySetAge: setAge, 
        MySetSalary: setSalary,
        MySetName: setName,
        IncreeSalary: increaseSalary,
        IncremAge: increamentAge
    }
});




//q 11
Employee.address = {state: '', city: '', street: '', zip: ''};
Employee.getAddress = function(){return address};
Employee.setAddress = function(state , city, street, zip){
    this.address = {
        state : state,
        city: city,
        street: street,
        zip: zip,

    }
}

Employee.setAddress("Iowa", "fairfild", 434, 52556);
console.log(Employee.address);




 

