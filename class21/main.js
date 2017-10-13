var obj = {};
obj.rightClick = function(event)
          {
            if(document.body.children.length > 1)
            {
            //  document.body.removeChild(document.querySelector("img"));
            }
            event.preventDefault();
            var el = document.createElement("img");
            el.setAttribute("src","1.JPG");
            document.body.appendChild(el);
            el.style.position = "fixed";
            el.style.top = event.pageY + "px";
            el.style.left = event.pageX + "px";
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

document.body.addEventListener("contextmenu",obj.rightClick,false);
document.body.addEventListener("keydown",obj.keydown,false);
document.body.addEventListener("keypress",obj.keyPress,false);
