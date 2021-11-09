var farmItems = ["More Eggs", "Beef", "Pork"];
var farmList = document.getElementById("farm");

for (var i = 0; i < farmItems.length; i++){
    
    var newName = document.createElement("li");
    newName.textContent = farmItems[i];
    farmList.append(newName);
}