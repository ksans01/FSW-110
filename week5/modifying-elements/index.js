var firstName = document.getElementById("firstNameInput")
var middleName = document.getElementById("middleNameInput")
var lastName = document.getElementById("lastNameInput")
var submit = document.getElementById('submit')

submit.addEventListener("click", function (e){
    e.preventDefault();
    var fullName = `${firstName.value} ${middleName.value} ${lastName.value}`;
    
    alert(fullName);
    document.getElementById('firstNameInput').value = "";
    document.getElementById('middleNameInput').value = "";
    document.getElementById('lastNameInput').value = "";
})

