var submitPrice = document.querySelectorAll(".btn");
var total = document.querySelectorAll(".priceBox");
var amount = document.querySelector(".amount");
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const form = document.myForm;
const shopping = document.getElementsByClassName('shopping');
const shopAgain = document.getElementsByClassName('shopAgain');
const info = document.querySelector(".info");
var clear = document.getElementById("my-form");


form.addEventListener("submit", (event) => {

    event.preventDefault();
    var fullName = firstName.value + ' ' + lastName.value; 
    var ageInput = age.value;  
    
    console.log("Name: "+fullName+"\n"+
    "Age: "+ageInput+"\n"+
    "Have you ever shopped with us before? "+form.decision.value+"\n"+
    "Would you shop with us again? "+form.shopAgain.value)

    info.innerHTML= "Name: "+fullName+"<p>"+
                    "Age: "+ageInput+"<p>"+
                    "Have you ever shopped with us before? "+form.decision.value+"<p>"+
                    "Would you shop with us again? "+form.shopAgain.value;   
    
   clear.reset();
})

function getEggs(e) {
    e.preventDefault();
    var price = e.target.getAttribute("data-price");
    var howMany = e.target.parentElement.children[2].value;
    var total = parseInt(price) * parseInt(howMany);
    console.log(total);
}

function getHens(e) {
    e.preventDefault();
    var price = e.target.getAttribute("data-price");
    var howMany = e.target.parentElement.children[2].value;
    var total = parseInt(price) * parseInt(howMany);
    console.log(total);
}

function getRoosters(e) {
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
    var sum = parseInt(amount1.value*3) + parseInt(amount2.value*20) + parseInt(amount3.value*25);
    
    console.log("Your total is " + sum);
    amount.innerHTML = "Your total is: $" + sum;
    
}


submitPrice[0].addEventListener("click", getTotal);
