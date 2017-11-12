
obj = window.open("","A NEW WINDOW");
alert("a new window close");
obj.document.write("this is a text on new window ");
//obj.close();
//alert(obj.closed);
obj.document.write(window.innerHeight);
obj.document.write(document.getElementById("head").innerHTML);

console.log("hello");
alert(Date.now());
function fun() {
  document.write("BOOOO");
}
