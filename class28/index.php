<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="main.css">
    <title>Pattern matching</title>
  </head>
  <body>
    <h1><a href="phpCode.txt" target="_blank"> CLICK HERE FOR PHP CODE</a></h1>

<form action="exec.php" method="post">
  <input type="submit" name="" value="click here for exec stuff">
</form>
<?php
  $str = "Hello, how are you ? Today is tuesday . It is 11. K";
  $str2 = "abc 123 jkl 898 mmmmmm HJKL abc";
  $ret = preg_match("/^H/",$str);
  $ret2 = preg_match("/Z/",$str);
  $ret3 = preg_match("/^K/",$str);
  $ret4 = preg_match("/K$/",$str);
  $ret5 = preg_match("/h+/",$str);
  $ret6 = preg_match_all("/[a-z]/",$str2,$m1);
  $ret7 = preg_match_all("/[a-z]+/",$str2,$m2);
  $ret8 = preg_match_all("/[a-z]*/",$str2,$m3);
  preg_match_all("/[a-z]{3}/",$str2,$m4);
  preg_match_all("/[a-z]{3,4}/",$str2,$m5);
  preg_match_all("/[a-z]?/",$str2,$m6);
  var_dump($ret);
  echo"<br>";
  var_dump($ret2);
  echo"<br>";
  var_dump($ret3);
  echo"<br>";
  var_dump($ret4);
  echo"<br>";
  var_dump($ret5);
  echo"<br>";
  echo"<br>";
  var_dump($m1);
  echo"<br>";
  echo"<br>";
  var_dump($m2);
  echo"<br>";
  echo"<br>";
  var_dump($m3);
  echo"<br>";
  echo"<br>";
  var_dump($m4);
  echo"<br>";
  echo"<br>";
  var_dump($m5);
  echo"<br>";
  echo"<br>";
  var_dump($m6);
  echo"<br>";
  echo"<br>";
  var_dump(ceil(8.9));
  echo"<br>";
  echo"<br>";
  var_dump(floor(8.9));
  echo"<br>";
  echo"<br>";
  var_dump(abs(8.9));
  echo"<br>";
  echo"<br>";
  var_dump(rand());
  echo"<br>";
  echo"<br>";
  var_dump(srand(10));
  echo"<br>";
  echo"<br>";
  var_dump(rand());
  ?>
<br><br><br><br>
<h1>STRING FUNCTIONS</h1>
<br>
<?php

  $s = "mmmmmmm    m ";
  var_dump(strlen($s));
  echo"<br>";
  echo"<br>";
  var_dump(strcmp("AAA","aaa"));
  echo"<br>";
  echo"<br>";
  var_dump(strcmp("AAA","a"));
  echo"<br>";
  echo"<br>";
  var_dump(chop($s));
  echo"<br>";
  echo"<br>";
  var_dump(substr("HELLO" , 1 ));
  echo"<br>";
  echo"<br>";
  var_dump(substr("HELLO" , 3 ));
  echo"<br>";
  echo"<br>";
  $a = [1,2,3];
  var_dump(implode("#",$a));//it is as same join in js
  echo"<br>";
  echo"<br>";
  var_dump(explode(' ' , "HELLO hi"));
  echo"<br>";
  echo"<br>";

 ?>
<br><br><br>
<h1></h1>


<h1>NOTES</h1>
<h1>EXEC</h1>
<ol>
  <li>it is more like a command prompt on php it can run all the </li>
</ol>
<h1>Pattern matching</h1>
  <ol>
    <li>preg_match is the function which is used syntax: $variable = prog_match("pattern",place_to_search_it); it returns 1 or 0 it is case sensitive  </li>
    <li> we use ^ to check the first char of the string  </li>
    <li> we use $ to check the last char  of the string </li>
    <li> we use ? to check the last char  of the string </li>
    <li> we use + returns 1 if the variable exist the in the string </li>
    <li> we use * it returns 1 no matter what the string is </li>
    <li>Regular Expressions (regex) -  are the set of rules to be followed to define a pattern</li>
  </ol>



  <script type="text/javascript" src="main.js"></script>
  </body>
</html>
