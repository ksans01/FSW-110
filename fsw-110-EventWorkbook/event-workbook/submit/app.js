// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function


const inputElement = document.getElementById("name");
inputElement.value = "First Name";

const form = document.myForm;

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    console.log(form.name.value);
})