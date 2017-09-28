document.write("HELLO WORLD");
alert("THIS IS A ALERT TEXT !");
for (var i = 0; i < 5; i++) {
  document.write(i+"<br>")
}

var x=0;
while(x<6)
{
  x++;
}
document.write(x);

var user=prompt("enter your name please","kstark");
document.write("<br>" + user);

function k() {

  document.write("");

}

var con=confirm("ARE YOU SURE");
if(con)
{
  alert("peace");
}
else {
  alert("nOOO!");
}

setInterval(k,20000);

function present() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  document.body.innerHTML = h+":" + m + ":" + s;
}
setInterval(present,2000);
