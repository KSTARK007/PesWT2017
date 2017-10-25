var obj = {};
obj.rightClick = function(event)
          {
            if(document.querySelectorAll("img").length > 0)
            {
            event.currentTarget.removeChild(document.querySelector("img"));
            }
            event.preventDefault();
            var el = document.createElement("img");
            el.setAttribute("src","1.JPG");
            document.body.appendChild(el);
            el.style.position = "fixed";
            el.style.top = event.pageY + "px";
            el.style.left = event.pageX + "px";
          }
obj.right = function(event)
{
  event.preventDefault();
  if(document.querySelector("#mainRightClick") != null)
  {
    document.querySelector("#mainRightClick").parentNode.removeChild(document.querySelector("#mainRightClick"));
  }
  var el = document.createElement("div");
  el.setAttribute("id","mainRightClick");
  el.style.position = "fixed";
  el.style.top = event.pageY + "px";
  el.style.left = event.pageX + "px";
  var mainList = document.createElement("ul");
  var ListValue1 = document.createElement("li");
  ListValue1.setAttribute("id","kiran");
  var ListValue1tag = document.createElement("a");
  ListValue1tag.innerHTML = "value1";
  //ListValue1tag.setAttribute("href","1.JPG");
  var ListValue2 = document.createElement("li");
  var ListValue2tag = document.createElement("a");
  ListValue2tag.innerHTML = "value2";
  ListValue2tag.setAttribute("href","1.JPG");
  var ListValue3 = document.createElement("li");
  var ListValue3tag = document.createElement("a");
  ListValue3tag.innerHTML = "value3";
  ListValue3tag.setAttribute("href","1.JPG");
  var ListValue4 = document.createElement("li");
  var ListValue4tag = document.createElement("a");
  ListValue4tag.innerHTML = "value4";
  ListValue4tag.setAttribute("href","1.JPG");
  document.body.appendChild(el);
  el.appendChild(mainList);
  mainList.appendChild(ListValue1);
  ListValue1.appendChild(ListValue1tag);
  mainList.appendChild(ListValue2);
  ListValue2.appendChild(ListValue2tag);
  mainList.appendChild(ListValue3);
  ListValue3.appendChild(ListValue3tag);
  mainList.appendChild(ListValue4);
  ListValue4.appendChild(ListValue4tag);
}

obj.keydown = function(event)
          {
            var el = document.querySelector("#a");
            el.innerHTML = event.key;
          }
obj.keyPress = function(event)
          {
            var el = document.querySelector("#b");
            el.innerHTML = event.key;
          }
obj.clickDelete = function(event)
{
  document.querySelector("#mainRightClick").parentNode.removeChild(document.querySelector("#mainRightClick"));
}
obj.colorChange =function(event)
{
  document.body.style.backgroundColor = "red";
}
obj.list = function()
{
  alert(document.querySelector("#kiran"));
  //document.querySelector("#kiran").addEventListener("click",obj.colorChange,false);
}
document.body.addEventListener("contextmenu",obj.right,false);
document.body.addEventListener("keydown",obj.keydown,false);
document.body.addEventListener("keypress",obj.keyPress,false);
document.body.addEventListener("click",obj.clickDelete,false);
alert(document.querySelector("'query'"))
//document.querySelector("#kiran").addEventListener("click",obj.colorChange,false);
alert(document.querySelector("#kiran"));
