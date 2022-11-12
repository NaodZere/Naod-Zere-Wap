/**
 * apartment.js
 */

"use strict"


window.onload = function(){


const form = document.getElementById("form");



const buildingNo = document.getElementById('buildingNo');
const apartmentNo = document.getElementById('apartmentNo');
const title = document.getElementById('title');
const fullNames = document.getElementById('fullNames');
const phoneNo = document.getElementById('phoneNo');
const email = document.getElementById('email');
const driversLicenceNo = document.getElementById('driversLicenceNo');
const floorNo = document.getElementById("floorNo");



form.onsubmit = (event)=>{
    event.preventDefault();
    alert(`
    Building Number ${buildingNo.value}
    Building Number ${buildingNo.value}
    Apartment Number ${apartmentNo.value}
    Title ${title.value}
    Full Names ${fullNames.value}
    Phone Number ${phoneNo.value}
    E-mail ${email.value}
    Driving Licence ${driversLicenceNo.value}
    floorNo ${floorNo.value}
    `);
}

//or we can do in this way 
const form2 = document.getElementById("form");
form2.addEventListener("submit", function(){

    const buildingNo = document.getElementById('buildingNo');
    const apartmentNo = document.getElementById('apartmentNo');
    const title = document.getElementById('title');
    const fullNames = document.getElementById('fullNames');
    const phoneNo = document.getElementById('phoneNo');
    const email = document.getElementById('email');
    const driversLicenceNo = document.getElementById('driversLicenceNo');
    const floorNo = document.getElementById("floorNo");


    const outpu = `

    Building Number ${buildingNo.value}
    Apartment Number ${apartmentNo.value}
    Title ${title.value}
    Full Names ${fullNames.value}
    Phone Number ${phoneNo.value}
    E-mail ${email.value}
    Driving Licence ${driversLicenceNo.value}
    floorNo ${floorNo.value}
    
    `;
    alert(outpu);

    // //reset and clear are different when we use reset API key word eg form.reser(). 
    // it will note clear  everything it onley reset the data that already submited before example 
    // if some error was happened before it will be still remaied so it is better to use clear using 
    // the followeing example 

    //monually doing clear the form when it submited is....


    buildingNo.value = "";
    apartmentNo.value = "";
    title.value = "";
    

})


     



}