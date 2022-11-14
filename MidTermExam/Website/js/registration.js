/**
 * registration.js
 */
"use strict"

const form = document.forms[0];
const firstName = document.getElementById("firstName");
const middleInitial = document.getElementById("middleInitial")
const lastName = document.getElementById("lastName")
const address = document.getElementById("address");
const personalBio = document.getElementById("personalBio");
const id = document.getElementById("id");
const course = document.getElementById("course");
const studyLevel = form.elements["studyLevel"];




form.onsubmit = function (event) {
    event.preventDefault();
    alert(`
    Level of Study: ${studyLevel.value}
    Applicant's Full Name: ${firstName.value} ${middleInitial.value} ${lastName.value} 
    Address: ${address.value}
    Applicant's ID Number: ${id.value}
    Course: ${course.value}
    
    `)
    firstName.value = "";
    lastName.value = "";
    middleInitial.value = "";
    address.value="";
    personalBio.value = "";
    id.value = "";
    course.value="";
    studyLevel.value = "";


}