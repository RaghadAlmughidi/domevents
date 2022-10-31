let button = document.getElementById("enter");
let input=document.getElementById("userinput");
let ul = document.querySelector("ul");
let items = document.querySelector("li");

console.log()
//create element
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	
	//create btn
	var btn1 = document.createElement("button");
	var btn2= document.createElement("button");
	btn2.innerHTML="Done";
	btn2.innerHTML="Delete";
	li.appendChild(btn1);
	li.appendChild(btn2);

    btn2.addEventListener("click", function(){
		li.parentNode.removeChild(li);
	})
	btn1.addEventListener("click", function(){
		li.classList.toggle("done");
	})

	ul.appendChild(li);
	input.value="";

}