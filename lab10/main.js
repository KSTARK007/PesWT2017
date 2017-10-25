function pass(k)
{
  var a = document.querySelector("#inputPassValue").value;
  var b = k;
  a +=b;
  document.querySelector("#inputPassValue").value = a;
}
function clearValue()
{
  var a = "" ;
  document.querySelector("#inputPassValue").value = a;
}

function show()
{
  alert(document.querySelector("#inputPassValue").value);
}

function append(k)
{
  var a = document.querySelector("#inputValue").value;
  var b = k;
  a +=b;
  document.querySelector("#inputValue").value = a;

}
function fun(k)
{
var a = document.querySelector("#inputValue").value;
  switch (k)
   {
    case 1: a = a+ "+";
            break;
    case 2: a = a+ "-";
            break;
    case 3: a = a + "*";
            break;
    case 4: a = a + "/";
            break;
    case 0 : a = "";
  }
  document.querySelector("#inputValue").value = a;
}
function eva()
{
  var a = document.querySelector("#inputValue").value;
  b = eval(a);
  document.querySelector("#inputValue").value = b;
}
function newFun()
{
  var a = document.querySelector("#inputValue").value;
  b = a.split("");
  b.pop();
  b=b.join("");
  document.querySelector("#inputValue").value = b;
}
function noIn()
{
  event.preventDefault();
}
document.addEventListener("keydown",noIn,false);
document.addEventListener("keypress",noIn,false);
