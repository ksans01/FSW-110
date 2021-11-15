// First h1 "Hello World"

var header = document.createElement('h1');
header.textContent = "Hello World";
document.body.appendChild(header);

// "Hello World" repeated 10 times

for (let i = 0; i < 10; i++){
    var repeat = document.createElement('h1');
    repeat.textContent = "Hello World";
    document.body.appendChild(repeat);

// Adding style

    if (i == 0){
        repeat.style.color = 'red';
        repeat.style.textAlign = 'center'        
    } else if (i >= 7){
        repeat.style.color = 'green';
    } else if (i <= 5){
        repeat.style.backgroundColor = "purple";
        repeat.style.color = 'yellow'
    } else {
        repeat.style.fontStyle = 'italic';
        repeat.style.textAlign = 'right';
        repeat.style.color = 'blue'
    }
}

// array list displayed

const names = ["steve", 
               "larry",
               "joe",
               "shirley",
               "steph",
               "nate",
               "rick",
               "emily"];

    for (let i = 0; i < names.length; i++){
    const newList = document.createElement('li');
    newList.textContent = names[i];
    document.body.appendChild(newList);
    }

