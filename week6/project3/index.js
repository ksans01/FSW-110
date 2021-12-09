var submit = document.querySelectorAll(".btn");
var total = document.querySelectorAll(".priceBox");
var amount = document.querySelector(".amount");

function getBagels(e) {
    e.preventDefault();
    var price = e.target.getAttribute("data-price");
    var howMany = e.target.parentElement.children[2].value;
    var total = parseInt(price) * parseInt(howMany);
    console.log("Your total is " + total);
}

function getTea(e) {
    e.preventDefault();
    var price = e.target.getAttribute("data-price");
    var howMany = e.target.parentElement.children[2].value;
    var total = parseInt(price) * parseInt(howMany);
    console.log("Your total is " + total);
}

function getCoffee(e) {
    e.preventDefault();
    var price = e.target.getAttribute("data-price");
    var howMany = e.target.parentElement.children[2].value;
    var total = parseInt(price) * parseInt(howMany);
    console.log(total);
}

function getTotal(e) {
    e.preventDefault();
    var amount1 = total[0];
    var amount2 = total[1];
    var amount3 = total[2];
    var sum = parseInt(amount1.value*3) + parseInt(amount2.value*7) + parseInt(amount3.value*11);
    
    console.log("Your total is " + sum);
    amount.innerHTML = "Your total is: " + sum;
    
}


submit[0].addEventListener("click", getTotal);