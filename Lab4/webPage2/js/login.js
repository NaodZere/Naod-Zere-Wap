"strict"

// const submitfield = document.getElementById("submit");
// const emailfield = document.getElementById("email");
// const passwField = document.getElementById("password");
// const urlField   = document.getElementById("url");

// const fields = [emailfield, passwField, urlField];

// window.ariaValueMax.onclick(function(){
//     if(fields.map(x => x.value.length !== 0).reduce((x,y)=> x && y)){
//         console.log("Email: " + emailfield.value);
//         console.log("Password: " + passwField.value);
//         console.log("Url: " +  urlField.value);

//         fields.forEach(x => x.value + "");
//     }
// });


window.onload = function(){
    const emailF = document.getElementById("eamil");
    const passwordF = document.getElementById("password");
    const formF = document.getElementById("form");

    formF.onsubmit = function(){
        console.log( `Email: ${emailF.value}`);
        console.log(`password: ${passwordF.value}`);
        formF.reset();
    };

    formF.addEventListener("submit", function(){

    });

    // formF.addEventListene("submit", test);

    // let test = function(){
    //     console.log( `Email: ${emailF.value}`);
    //     console.log(`password: ${passwordF.value}`);
    // }
}