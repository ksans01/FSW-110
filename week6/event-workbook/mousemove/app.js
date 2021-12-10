let output = document.querySelector('.red-box');

document.addEventListener('mousemove', (e)=> {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "X: " + x + ", Y: " + y;
    output.innerText = coor;
});