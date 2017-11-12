function CP()
{
  var el = document.createElement("p");
  el.innerHTML="HELLO";
  document.body.appendChild(el);
}

function CI()
{
  var el = document.createElement("img");
  el.setAttribute("src","1.jpg");
  el.setAttribute("alt","image")
  document.body.appendChild(el);
}

function CL()
{
  var el = document.createElement("a");
  el.setAttribute("href","#");
  el.innerHTML = "HOME PAGE ";
  document.body.appendChild(el);
}

function b1()
{
  var el = document.createElement("img");
  el.setAttribute("src","1.jpg");
  el.setAttribute("alt","image");
  document.getElementById('box1').appendChild(el);
}

function b2()
{
  var el = document.createElement("img");
  el.setAttribute("src","1.jpg");
  el.setAttribute("alt","image");
  document.querySelector('#box2').appendChild(el);
}

function b3()
{
  var el = document.createElement("img");
  el.setAttribute("src","1.jpg");
  el.setAttribute("alt","image");
  document.querySelector('#box3').appendChild(el);
}

function all()
{
  var el1 = document.createElement("img");
  el1.setAttribute("src","1.jpg");
  el1.setAttribute("alt","image");
  document.querySelector('#box').appendChild(el1);

  var el2 = document.createElement("img");
  el2.setAttribute("src","1.jpg");
  el2.setAttribute("alt","image");
  document.querySelector('#box').appendChild(el2);


  var el3 = document.createElement("img");
  el3.setAttribute("src","1.jpg");
  el3.setAttribute("alt","image");
  document.querySelector('#box').appendChild(el3);
}

function changeall()
{
  var list = document.querySelectorAll('li');
  for (i in list)
  {
    list[i].innerHTML = "LOL";
  }
}

function change()
{
  var val = prompt("enter the value where you want to add the value ");
  var list = document.querySelectorAll("#K>li");
  for (i in list)
  {

    if(list[i].innerHTML == val)
    {
      var newele = document.createElement("li");
      newele.innerHTML = "KSTARK";
      document.querySelector("#K").insertBefore(newele,list[i]);
    }
  }
}

function inter()
{
  var l1 = document.querySelectorAll("#L>li");
  var list1 = l1[1];
  var l2 = document.querySelectorAll("#A>li");
  var list2 = l2[1];
  var temp = list1;
  //document.querySelector("#L").removeChild(list1);
  document.querySelector("#L").insertBefore(list2,list1);
  document.querySelector("#A").insertBefore(temp,l2[2]);

}
