/**
 * produ.js
 */

window.onload = function(){
    const form = document.getElementById("form");

    const productNum = document.getElementById("productNumber");
    const productName = document.getElementById("productName");
    const unitPrice = document.getElementById("unitPrice");
    const quantity = document.getElementById("quantity");
    const supplier = document.getElementById("supplier");
    const date = document.getElementById("date")


    form.onsubmit(function(){
        alert(`Product Number: ${productNum.value }
        Product Name: ${productName.value } Product unitPrice: ${unitPrice.value }
        Product quantity: ${quantity.value } Product supplier: ${supplier.value }
        Product date: ${date.value }`
        )

    })



}