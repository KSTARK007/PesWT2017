var obj={};
//inline
//the onclick is a attribute of first h1 tag
obj.fun1 = function()
            {
              var el = document.querySelector("h1");
              el.style.color = "#4e342e";
            }
//Traditional
obj.fun2 = function()
            {
              el2.style.color = "#5e214e";//here we can use el2 before declaring because the function is just defined but not called
            }
var el2 = document.querySelector("#a");
el2.ondblclick = obj.fun2;//here it is important to not give () to the function
//W3C
obj.fun3 = function()
          {
            el3.style.color = "red";
          }
          var i = 0;
obj.fun4 = function()
          {

            el3.style.fontSize = i+"px";
            i++;
            if(i>=179)
            el3.innerHTML = "POP";
            else
            el3.innerHTML = "I AM GROOT "
            i=i%200;

          }
var el3 = document.querySelector("#b");
el3.addEventListener("mouseover",obj.fun3,false)//here it is important to not give () to the function
//document.body.addEventListener("mousemove",obj.fun4,false)

obj.imgc = function()
{
  ele.style.filter = "grayscale(0%)";
  ele.style.borderRadius = "20px";
}

obj.imgg = function()
{
  ele.style.borderRadius = "0px";
  ele.style.filter = "grayscale(100%)";
}

var ele = document.querySelector("img");
ele.addEventListener("mouseover",obj.imgc,false);
ele.addEventListener("mouseout",obj.imgg,false);
