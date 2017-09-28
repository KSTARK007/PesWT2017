var k = 1;
function change() {
  if(k%2==0)
  document.querySelector('#i').setAttribute("src","1.JPG");
  if(k%2==1)
  document.querySelector('#i').setAttribute("src","img.png");
  k++;
}
var imgT = {};
imgT.toggle = function()
              {
                var imgEle = document.getElementById("i1");
                var curr = imgEle.getAttribute("src");
                if(curr == "img.png")
                    imgEle.setAttribute("src","1.JPG");
                if(curr == "1.JPG")
                    imgEle.setAttribute("src","img.png");
              }

function al() {
  var k = document.querySelectorAll("ul>li");
  var i;
  alert(k.length)
  for (i=0;i<k.length;i++)
    alert(k[i].innerHTML);
}
