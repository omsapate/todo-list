//document.getElementById("buttonId"); // grab button

// adding event listener on button to add item to list 
document.getElementById("buttonId").onclick = function() {
	
	AddItemToList();
};

//delete list item
document.getElementById("ItemList").addEventListener('click',function(event){
	if(event.target.tagName == "LI"){
		event.target.remove()
	}
})

// add item to list
function AddItemToList() {
	
	var ToDo_Text = document.getElementById("inputId").value;
		
	if (ToDo_Text != "") {

		// get <ul> tag from dom
		var ul = document.getElementById("ItemList");

		// now create <li> elemet to add text in it by js
		var li = document.createElement("LI");

		li.appendChild(document.createTextNode(ToDo_Text));
		ul.appendChild(li);

		document.getElementById("inputId").value = "";
	}
	else{
		alert("Add something")
	}
}