window.onload = setInterval(showDate,1000);


function showDate(){
    const div = document.getElementById("dateTime");

    let date = new Date();
    let month = date.getMonth() + 1;

    div.innerHTML = ` ${date.getFullYear()}-${month}-${date.getDate()}
${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

}
