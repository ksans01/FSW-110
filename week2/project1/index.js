var header = document.createElement('h1');
header.textContent = 'Little Dinosaur Farm';
document.body.appendChild(header);


var paragraph = document.createElement('p');
paragraph.textContent = 'Welcome to Little Dinosaur Farm! Where we have little dinosaurs running WILD! See our list of items we offer below!';
document.body.appendChild(paragraph);

var itemList = document.createElement('ol');
itemList.textContent = 'Things we offer:'
document.body.appendChild(itemList); 


var footer = document.createElement('footer');
footer.textContent = 'Author: Kurt Sanson';
document.body.appendChild(footer);
var email = document.createElement('p');
email.innerHTML = 'kurt.sanson@bryanuniversity.edu';
footer.appendChild(email);

var farmItems = ["Fresh Eggs", "Hatching Eggs", "Roosters", "Laying Hens"];
var farmList = document.getElementById("farm");

for (var i = 0; i < farmItems.length; i++){
    
    var newName = document.createElement("li");
    newName.textContent = farmItems[i];
    itemList.append(newName);
}
