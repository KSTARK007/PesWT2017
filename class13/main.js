//first method
var obj1 = {
  type:"fruit",
  name: "red",
  sweetnes: 9 ,
   fun1: function(){alert("this is the best script");}
 };
obj1.fun1();
alert(typeof obj1);
alert(obj1.name);

//second method
var obj2 = {};
obj2.type = "fruit";
obj2.name = "LEMON";
obj2.color = "yellow";
alert(obj2.color);

obj1.addnew = "random";

//third method
function fruit(type , name , color, sweetness)
{
  this.type = type;
  this.name = name;
  this.color = color;
  this.sweetness = sweetness
}

var obj3 = new fruit("fruit","mango","yellow",10);
alert(obj3.name);
//we have to add a "new" key word
var random = 100;
alert(window.random); // this variable is added to the window object
//for window object we need not use window.object
