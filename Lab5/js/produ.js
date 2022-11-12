/**
 * produ.js
 */




 window.onload = function(){
    const form = document.getElementById("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    const productNum = document.getElementById("number");
    const productName = document.getElementById("name");
    const unitPrice = document.getElementById("unitPrice");
    const quantity = document.getElementById("quantity");
    const supplier = document.getElementById("supplier");
    const  date = document.getElementById("date");


    const pNumber = productNum.value;
    const pName = productName.value;
    const uPrice = unitPrice.value;
    const quanti = quantity.value;
    const supp = supplier.value;
    const dat = date.value;



    const output = `
    Product Number: ${pName}
    Product Name: ${pNumber}
    Unit Price: ${uPrice}
    Quantity: ${quanti}
    Supplier: ${supp}
    Date: ${dat}
    `;
    alert(output);

});
    










    // form.onsubmit = function(event){
    //     event.preventDefault();
    //     alert(`
    //     Product Number: ${pName}
    //     Product Name: ${pNumber}
    //     Unit Price: ${uPrice}
    //     Quantity: ${quanti}
    //     Supplier: ${supp}
    //     Date: ${dat}
    //     `);
        

    //     form.reset();
    // };
}





















// window.onload = function(){
//     const form = document.getElementById("form");

//     const productNum = document.getElementById("number");
//     const productName = document.getElementById("name");
//     const unitPrice = document.getElementById("price");
//     const quantity = document.getElementById("quanti");
//     const supplier = document.getElementById("supplier");
//     const date = document.getElementById("date")


//     form.onsubmit = function(event){
//         event.preventDefault();
//         alert(`Product Number: ${productNum.value }
//         Product Name: ${productName.value } 
//         Product unitPrice: ${unitPrice.value }
//         Product quantity: ${quantity.value }
//          Product supplier: ${supplier.value }
//         Product date: ${date.value }`
//         );

//         // form.reset

//     };



// }