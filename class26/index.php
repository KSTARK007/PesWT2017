<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="main.css">
    <title></title>
  </head>
  <body>
    <h1><a href="phpCode.txt" target="_blank"> CLICK HERE FOR PHP CODE</a></h1>

<?php
  $a1 = [1,2,3];
  $a2 = ["abc","def","ghi"];
  $a3 = ["jane",123,9.99];
  var_dump($a1);
  echo "<br>";
  var_dump($a2);
  echo "<br>";
  var_dump($a3);
  echo "<br>";
  $a4 = array(1,2,3,4);
  $a5[0]=10;
  $a5[1] = 20;
  var_dump($a4);
  echo "<br>";
  var_dump($a5);
  echo "<br>";
  $a5[10] = 30;
  var_dump($a5);
  echo "<br>";
  $a6 = array("name" =>"harry" ,"age"=>100,"gpa"=>9.9,0=>10);
  var_dump($a6);
  echo "<br>";
  echo $a6[0];
  $s = 99;
  var_dump(is_array($a1));
  echo "<br>";
  var_dump(is_array($s));
  echo "<br>";
  var_dump(in_array("abc",$a2));
  echo "<br>";
  var_dump(in_array("name",$a6));
  echo "Because it is a key and not a value ";
  echo "<br>";
  var_dump(array_keys($a6));
  echo "<br>";
  var_dump(array_values($a6));
  echo "<br>";
  $new = array_merge($a1,$a2,$a3);
  var_dump($new);
  echo "<br>";
  var_dump(array_push($a6,20));
  echo "<br>";
  var_dump($a6);
  echo "<br>";
  var_dump(array_pop($a6));
  echo "<br>";
  var_dump($a6);
  echo "<br>";
  var_dump(array_pop($a6));
  echo "<br>";
  var_dump(array_pop($a6));
  echo "<br>";
  var_dump($a6);
  $count_variable = count($a6);
  echo "<br>";
  echo $count_variable;
  foreach ($a6 as $key => $value)
  {
      echo "<br>" . $key . " is the key " . $value . " is the value<br> ";
  }
   ?>


<h1>NOTES</h1>
  <h3>ARRAY</h3>
  <ol>
    <li>var_dump($variable) - gives all information about the arrya</li>
    <li>Array are like Dictionary in PHP hence we can have a </li>
  </ol>
  <h2>Types Of Array </h2>
<ol>
  <li>INDEXED - index starts from 0 </li>
  <li>Associative - like Dictionary (keys can be of any data type)</li>
  <li>Multi Dimensional</li>
</ol>
<h2>types of method on array</h2>
<ol>
  <li>is_array($variable) - checks if the variable is a array or no and it returns a bool value </li>
  <li>in_array(value,$variable) - checks if the variable is in the give array or no and it returns a bool value </li>
  <li>array_keys($variable) - returns all the keys  </li>
  <li>array_values($variable) - returns all the values  </li>
  <li>array_merge($variable1,$variable2,$variable3,.......,$variableN) - returns all the values  </li>
  <li>array_push($variable,value) - push the value into the variable it give the key as 0 </li>
  <li>array_pop($variable) - pops the last value and returns it  </li>
  <li>count($variable) - returns the size of array</li>
</ol>
<h3>Foreach($array_variable as $key => $value)</h3>
<br><br>

<?php
 $e = 900;
function fun1($day,$value = 100)
{
  //global $e = 900; it is an error

  global $e;
  $e = 800;
  echo "$day is sunny<br>";
  echo $day." is sunny<br>";
  echo $value."<br>";
  return 300;
}

fun1("monday");
fun1("sunday",300);
echo $e ;
echo "<br>";
$return_value = fun1("day");
var_dump($return_value);
var_dump(__DIR__);
 ?>
<h1>FUNCTIONS</h1>
<ol>
  <li></li>
</ol>


  <script type="text/javascript" src="main.js"></script>
  </body>
</html>
