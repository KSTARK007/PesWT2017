var x = 200;
function fun1(name1)
{ y = 900;
  alert("hello" + name1);
  alert(x);
  alert(y);
  return 10;
}
function fun2()
{
    alert(x);
    alert("In fun2:  " + y);
}
var ret = fun1("Harry");
fun2();
alert(ret);
