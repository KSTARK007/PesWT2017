var styleChanger = {};
styleChanger.change=function()
                    {
                      var pE1 = document.querySelector("p");
                      pE1.style.textAlign = "center";
                      pE1.style.fontSize = "50px";
                      pE1.style.color = "red";
                      document.body.style.backgroundColor = "#ff6f00";
                    }
c=1;
function change ()
{
  var k = document.querySelector("#cd");

  if(c%5==1)
{   k.style.fontSize = "30px";
    k.style.color = "red";
}
  if(c%5==2)
{     k.style.fontSize = "40px";
      k.style.color = "green";
}
  if(c%5==3)
{       k.style.fontSize = "50px";
        k.style.color = "blue";
}
  if(c%5==4)
  {       k.style.fontSize = "60px";
          k.style.color = "yellow";
}
  if(c%5==0)
  {
            k.style.fontSize = "70px";
            k.style.color = "black";
 }

    c++;
}



function fun()
{
  var k = document.querySelector("div p");
  alert(k.parentNode.children[1].innerHTML);
  alert(k.parentNode.children[0].textContent);
}

function alertall()
{
    for (i = 0 ; i<document.body.children.length;i++)
  {
    alert(document.body.children[i]);
    for (var j = 0; j < document.body.children[i].children.length; j++)
     {
      alert(document.body.children[i]+"  child-->   "+document.body.children[i].children[j]);
     }
  }
}
