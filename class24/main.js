var obj = {};
obj.fun1 = function()
{
  document.cookie = "name=" + document.querySelector("#a").value+";";
}
  document.querySelector("form").addEventListener("submit",obj.fun1,false);

if(document.cookie)
{
  var name = document.cookie.split(";")[0].split("=")[1];
  document.querySelector("h1").innerHTML = "WELCOME ,"+name;
}

obj.fun2 = function(event)//event defined
{
  alert("event fired");
  alert(event.currentTarget);
  alert(event.isTrusted);
  alert(event.detail.date);
}


var ev1 = new CustomEvent("myEvent1",{detail:{date:new Date()}});
document.body.addEventListener("myEvent1",obj.fun2,true);
document.body.dispatchEvent(ev1);

count = 0 ;

function try1()
{
  if(count >1)
      clearInterval(x);
  else {
      alert(count);
  }
  count++;
}
var x = window.setInterval(try1 , 2000);
