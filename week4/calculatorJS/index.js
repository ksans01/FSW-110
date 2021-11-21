
// Plus Operation
const plusButton = document.getElementById("plusButton");
function plusOperation(){

   number1 = document.getElementById("number1");
   number2 = document.getElementById("number2");

   sum = parseInt(number1.value) + parseInt(number2.value);

   result = document.getElementById("result");
   result.innerText = sum;

}

plusButton.addEventListener('click', plusOperation);

// Minus Operation
const minusButton = document.getElementById("minusButton");
function minusOperation(){

    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");

    difference = parseInt(number1.value) - parseInt(number2.value);

    result = document.getElementById("result");
    result.innerText = difference;
}

minusButton.addEventListener('click', minusOperation);

// Multiply Operation
const mulButton = document.getElementById("mulButton");
function mulOperation(){

    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");

    product = parseInt(number1.value) * parseInt(number2.value);

    result = document.getElementById("result");
    result.innerText = product;
}

mulButton.addEventListener('click', mulOperation);

// Divide Operation
const divButton = document.getElementById("divButton");
function divOperation(){

    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");

    quotient = parseInt(number1.value) / parseInt(number2.value);

    result = document.getElementById("result");
    result.innerText = quotient;
}

divButton.addEventListener('click', divOperation);
