const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const form = document.myForm;
const shopping = document.getElementsByClassName('shopping');
const shopAgain = document.getElementsByClassName('shopAgain');


form.addEventListener("submit", (event) => {

    event.preventDefault();
    var fullName = firstName.value + ' ' + lastName.value; 
    var ageInput = age.value;  
    
    alert("Name: "+fullName+"\n"+
           "Age: "+ageInput+"\n"+
           "Have you ever shopped with us before? "+form.decision.value+"\n"+
           "Would you shop with us again? "+form.shopAgain.value+"\n"+
           "What would you like to order? ");   
   
})