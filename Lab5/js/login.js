window.onload = function () {

    const form = document.getElementById("form");
    form.onsubmit = function(event){
    event.preventDefault();
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");

    const email = emailField.value;
    const password = passwordField.value;

    console.log(email);
    console.log(password);

    // const output = document.getElementById("output");
    // output.innerHTML = `
    //      <p>Email : ${email}</p>
    //      <p>Password: ${password}</p>
    // `
 
    }

    
}




