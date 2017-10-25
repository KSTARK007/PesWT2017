function likeButton()
{
	var likeValue = this.parentNode.children[2];
	var temp = parseInt(likeValue.innerHTML);
	temp+=1;
	likeValue.innerHTML = temp;
}
function replyButton()
{
	var reply = prompt("enter your reply ");
	var replyDiv = document.createElement("p");
	replyDiv.innerHTML = reply;
	replyDiv.setAttribute("class","d");
	this.parentNode.appendChild(replyDiv);
}
function commentDeleteButton()
{	
	var delV = this.parentNode.parentNode;
	delV.removeChild(this.parentNode);

}
function commentButton()
{
	var commentValue = prompt("enter the comment");
	var commentDiv = document.createElement("div");
	commentDiv.setAttribute("class","d");
	var reply = document.createElement("input");
	reply.setAttribute("value","reply");
	reply.setAttribute("type","button");
	reply.addEventListener("click",replyButton,false);
	var del = document.createElement("input");
	del.setAttribute("value","DELETE");
	del.setAttribute("type","button");
	del.addEventListener("click",commentDeleteButton,false);
	var C = document.createElement("p");
	C.innerHTML = commentValue;
	this.parentNode.appendChild(commentDiv);
	commentDiv.appendChild(C);
	commentDiv.appendChild(reply);
	commentDiv.appendChild(del);
}

function deleteButton()
{
	var del = this.parentNode;
  alert(this);
  document.body.removeChild(del);
}
function status()
{
	var statusValue = prompt("enter Your status");
	var mainDiv = document.createElement("div");
	mainDiv.setAttribute("class","d");
	var statusDiv = document.createElement("div");
	statusDiv.setAttribute("class","d");
	var S = document.createElement("p");
	S.innerHTML = statusValue;
	var like = document.createElement("input");
	var likeValue = document.createElement("span");
	like.setAttribute("value","LIKE");
	like.setAttribute("type","button");
	like.addEventListener("click",likeButton,false);
	likeValue.innerHTML = "0";
	var comment = document.createElement("input");
	comment.setAttribute("value","COMMENT");
	comment.setAttribute("type","button");
	comment.addEventListener("click",commentButton,false);
	var del = document.createElement("input");
	del.setAttribute("value","DELETE");
	del.setAttribute("type","button");
	del.addEventListener("click",deleteButton,false);
	document.body.appendChild(mainDiv);
	mainDiv.appendChild(statusDiv);
	statusDiv.appendChild(S);
	mainDiv.appendChild(like);
	mainDiv.appendChild(likeValue);
	mainDiv.appendChild(comment);
	mainDiv.appendChild(del);

}
