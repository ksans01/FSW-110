// event listeneers listen for events
// event handlers handle events => executing code once whatever we r listenign for happens
// event handlers themselves are "attached" to HTML elements using eventTarget.addEventListener()
const square = document.getElementById("square")
square.addEventListener('mouseover', mouseOver)
square.addEventListener('mousedown', mouseDown)
square.addEventListener('mouseup', mouseUp)
square.addEventListener('dblclick', doubleClick)
window.addEventListener('scroll', scrollColor)


function mouseOver(){    
    square.style.backgroundColor = 'green';
}
function mouseDown(){
    square.style.backgroundColor = 'yellow'
}
function mouseUp(){
    square.style.backgroundColor = 'blue'
}
function doubleClick(){
    square.style.backgroundColor = 'red'
}
function scrollColor(){
    if (scrollY > 1){    
        square.style.backgroundColor = 'purple'
    }else {
        square.style.backgroundColor = 'white'
    }
}

window.addEventListener('keydown', colorChange)
function colorChange(key){
    if (key.keyCode == '82'){
    square.style.backgroundColor = 'red';
    } else if (key.keyCode == '66'){
    square.style.backgroundColor = 'blue';
    } else if (key.keyCode == '71'){
    square.style.backgroundColor = 'green';
    } else if (key.keyCode == '89'){
        square.style.backgroundColor = 'yellow'
    } else if (key.keyCode == '80'){
        square.style.backgroundColor = 'purple'
    } else {
        square.style.backgroundColor = 'white'
    }
}
