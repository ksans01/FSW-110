var header = document.createElement('h1');
header.textContent = 'Little Dinosaur Farm';
document.body.appendChild(header);


var paragraph = document.createElement('p');
paragraph.textContent = 'Welcome to Little Dinosaur Farm! Where we have little dinosaurs running WILD! See our list of items we offer below!';
document.body.appendChild(paragraph);

var itemList = document.createElement('ol');
itemList.textContent = 'Things we offer:'
document.body.appendChild(itemList); 

var item1 = document.createElement('li');
var item2 = document.createElement('li');
var item3 = document.createElement('li');
var item4 = document.createElement('li');
item1.textContent = 'Fresh Eggs';
item2.textContent = 'Hatching Eggs';
item3.textContent = 'Roosters';
item4.textContent = 'Laying Hens';
itemList.appendChild(item1);
itemList.appendChild(item2);
itemList.appendChild(item3);
itemList.appendChild(item4);

var footer = document.createElement('footer');
footer.textContent = 'Author: Kurt Sanson';
document.body.appendChild(footer);
var email = document.createElement('p');
email.innerHTML = 'kurt.sanson@bryanuniversity.edu';
footer.appendChild(email);

