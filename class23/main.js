var obj = {};
flag = 0;
obj.fun1 = function()  // onload
{
  alert("LOADED");
}
obj.fun2 = function() // onerror
{
  alert("ERROR");
}
obj.fun3 = function() //onscroll
{
  if (flag%2 == 0)
  {
      document.body.style.backgroundColor = "#BFF073";
  }
  else
  {
      document.body.style.backgroundColor = "red";
  }
  flag +=1;
}
obj.fun4 = function()  // onresize
{
  alert("resized");
}
obj.fun5 = function()  // onfocus
{
  event.currentTarget.style.border = "2px solid";
  event.currentTarget.style.borderColor = "red";
}
obj.fun6 = function() //onblur
{
  event.currentTarget.style.border = "5px solid";
  event.currentTarget.style.borderColor = "blue";
}
obj.fun7 = function() //onsubmit used for validation
{
  event.preventDefault();
  var r1 = document.createElement("h1");
  r1.innerHTML = "SUBMITTED";
  this.parentNode.appendChild(r1);
}
obj.fun8 = function()// oncopy
{
  event.preventDefault();
}
window.addEventListener("scroll",obj.fun3,false);
window.addEventListener("resize",obj.fun4,false);
document.querySelector("#a").addEventListener("blur",obj.fun6,false);
document.querySelector("form").addEventListener("submit",obj.fun7,false);
document.querySelector("#h").addEventListener("copy",obj.fun8,false);
