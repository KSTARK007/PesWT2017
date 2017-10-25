var temp=0;
var tempText = 0;
function changeColor()
{
  if(temp%2 == 0 )
    document.body.style.backgroundColor = "red";
  else
  {
    document.body.style.backgroundColor = "blue";
  }
  temp+=1;
}


function listColorChange()
{
  document.querySelector("#submitId").style.backgroundColor = "green";
}

function colorNotChange()
{
    document.querySelector("#submitId").style.backgroundColor = "blue";
}

function dropDown(event)
{
  event.preventDefault();
  if(document.querySelector("#main") != null)
  {
    document.querySelector("#main").parentNode.removeChild(document.querySelector("#main"));
  }
  var mainDiv = document.createElement("div");
  mainDiv.setAttribute("id","main");
  mainDiv.style.position = "fixed";
  mainDiv.style.top = event.pageY +"px";
  mainDiv.style.left = event.pageX +"px";
  var mainList = document.createElement("ul");
  mainList.setAttribute("id","mainDiv");
  var listValue1 = document.createElement("li");
  var listValue1tag = document.createElement("a");
  listValue1tag.innerHTML = "CLICK HERE FOR GOOGLE" ;
  listValue1tag.setAttribute("href","www.google.com");
  listValue1tag.setAttribute("target","_blank");
  var listValue2 = document.createElement("li");
  listValue2.setAttribute("onclick","changeColor()");
  listValue2.innerHTML = "to change the body color";
  var listValue3 = document.createElement("li");
  listValue3.innerHTML = "Color Change";
  var listValue4 = document.createElement("li");
  listValue4.innerHTML =" list 4 "
  var listValue4tag = document.createElement("a");
  document.body.appendChild(mainDiv);
  mainDiv.appendChild(mainList);
  mainList.appendChild(listValue1);
  listValue1.appendChild(listValue1tag);
  mainList.appendChild(listValue2);
  mainList.appendChild(listValue3);
  mainList.appendChild(listValue4);
}

function remove()
{
    document.querySelector("#main").parentNode.removeChild(document.querySelector("#main"));
}

function textBlur(event)
{
    event.currentTarget.setAttribute("placeholder","NAME")
}
function textfocus(event)
{
    event.currentTarget.setAttribute("placeholder","")
}

function passwordCheck()
{
  var password = document.querySelector("#passwordId").value;
  var Cap = 0;
  var length = 0;
  var numbers = 0;
  var special = 0;
  var i =0;
  if(password.length < 8)
    length = 0;
  else
    length = 1;
  for(i=0;i<password.length;i++)
  {
    if(password[i]>="A" && password[i]<="Z")
      Cap++;
    if(password[i]>="0" && password[i]<="9")
      numbers++;

  }
//  alert(Cap +" " + numbers +" " + special);
  if(Cap>=2 && length == 1 && numbers >=1 )
    alert("strong password");
  else {
    alert( password + " is not good please have 2 CAPS 8 char long atleast 1 number")
  }
}

function alt(event)
{
  if(event.key == "r" || event.key=="R")
    document.querySelector("#main").style.display = "none";
}

document.querySelector("#inputId").addEventListener("blur",textBlur,false);
document.querySelector("#inputId").addEventListener("focus",textfocus,false);
document.addEventListener("contextmenu",dropDown,false);
document.addEventListener("click",remove,false);
document.addEventListener("keydown",alt,false);
