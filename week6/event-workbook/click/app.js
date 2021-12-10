// make the box disapear when the user clicks it

const redBox = document.getElementsByClassName("red-box")[0];
console.log(redBox)

redBox.addEventListener('click', function (){
    redBox.remove();
})

