//document.getElementById("buttonId"); // grab button

// adding event listener on button to add item to list 
document.getElementById("buttonId").onclick = function() {
	
	AddItemToList();
};

window.addEventListener('keypress',function(event){
	if(event.keyCode ===13){
		AddItemToList();
	}
})

//delete list item
document.getElementById("ItemList").addEventListener('click',function(event){
	if(event.target.tagName == "SPAN"){
		event.target.parentNode.remove()
	}
})

document.getElementById("ItemList").addEventListener('click',function(event){
	if(event.target.tagName == "LI"){
		event.target.classList.toggle("complete");
	}
},false)

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
 // var txt = document.createTextNode("&#xf014;");
  span.className = "fa fa-trash-o";
  //span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


// add item to list
function AddItemToList() {
	
	var ToDo_Text = document.getElementById("inputId").value;
// get <ul> tag from dom
	var ul = document.getElementById("ItemList");
	// now create <li> elemet to add text in it by js
	var li = document.createElement("LI");
		
	if (ToDo_Text != "") {

		li.appendChild(document.createTextNode(ToDo_Text));
		ul.appendChild(li);

		var span = document.createElement("SPAN");
  		//var txt = document.createTextNode("\u00D7");
  		span.className = "fa fa-trash-o";
  		//span.appendChild(txt);
  		li.appendChild(span);

		document.getElementById("inputId").value = "";
	}
	else{
		alert("'Look's like empty entry! You should add something.'");
	}
	// var span = document.createElement("SPAN");
 //  	//var txt = document.createTextNode("\u00D7");
 //  	span.className = "fa fa-trash-o";
 //  	//span.appendChild(txt);
 //  	li.appendChild(span);
}