var header = document.createElement('h1');
header.textContent = 'Welcome to my JS site';
document.body.appendChild(header);

var paragraph = document.createElement('p');
paragraph.textContent = 'All of this was created with JavaScript';
document.body.appendChild(paragraph);

var myList = document.createElement('ol');
myList.textContent = 'Item List';
document.body.appendChild(myList);

var item1 = document.createElement('li');
var item2 = document.createElement('li');
var item3 = document.createElement('li');
item1.textContent = 'Eggs';
item2.textContent = 'Bacon';
item3.textContent = 'Hash Browns';
myList.appendChild(item1);
myList.appendChild(item2);
myList.appendChild(item3);


