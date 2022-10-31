var input = document.getElementById("userinput");
var button= document.getElementById("enter");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");


function inputValueLength(){
  return input.value.length;
}

//new list

function createListElem(){
  var li=document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  

  //create btn
  var btn1=document.createElement("button");
  var btn2=document.createElement("button");

  btn1.innerHTML='Done';
  btn2.innerHTML='Delete';
  li.appendChild(btn1);
  li.appendChild(btn2);
  
 
  btn2.addEventListener("click",()=>{
    li.parentNode.removeChild(li);
  })
  
  li.addEventListener("click",()=>{
    li.classList.toggle("done");
  })

  ul.appendChild(li);
  input.value="";

}

//existing list
Array.from(items).forEach(function (item){
  var btn1=document.createElement("button");
  var btn2=document.createElement("button");

  btn1.innerHTML='Done';
  btn2.innerHTML='Delete';
  item.appendChild(btn1);
  item.appendChild(btn2);

  btn2.addEventListener("click",()=>{
    item.parentNode.removeChild(item);
  });

  item.addEventListener("click",()=>{
    item.classList.toggle("done");
  });
  
});

function addListAfterClick(){
  if(inputValueLength()>0){
    createListElem();
  }

}
function addListAfterKeypress(e){
  if(inputValueLength()>0 && e.keyCode ===13){
    createListElem();
  }
}

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);