likeButton = function()
{
    var likeValue = this.parentNode.children[4].innerHTML;
    var temp = Number(likeValue);
    temp+=1;
    this.parentNode.children[4].innerHTML = temp;
}

function commentButton()
{
  var element = this.parentNode;
  var com = document.createElement("p");
  com.innerHTML = prompt("enter the comment");
  element.appendChild(com);
}
function deleteButton()
{
    var element = this.parentNode;
    document.body.removeChild(element);
}
function status()
{
 statusValue = prompt("enter the status");
 var el = document.createElement("div");
 var s = document.createElement("h1");
 var like = document.createElement("input");
 var comment = document.createElement("input");
 var del = document.createElement("input");
 var likeValue = document.createElement("p");
 s.innerHTML  = statusValue;
 like.setAttribute("value","LIKE");
 like.setAttribute("type","button");
 like.addEventListener("click",likeButton,false);
 comment.setAttribute("value","COMMENT");
 comment.setAttribute("type","button");
 comment.addEventListener("click",commentButton,false);
 del.setAttribute("value","DELETE");
 del.setAttribute("type","button");
 del.addEventListener("click",deleteButton,false);
 likeValue.innerHTML = "0";
 document.body.appendChild(el);
 el.appendChild(s);
 el.appendChild(like);
 el.appendChild(comment);
 el.appendChild(del);
 el.appendChild(likeValue);
}
var statusClick = document.querySelector("h1");
statusClick.addEventListener("click",status,false);
