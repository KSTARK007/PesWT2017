<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="main.css">
    <title></title>
  </head>
  <body>
    <h1><a href="phpCode.txt" target="_blank"> CLICK HERE FOR PHP CODE</a></h1>
    <h1>FORM</h1>
    <form action="form.php" method="get" target="_blank">
        <input type="text" name="text" value="">
        <input type="submit">
    </form>
<?php
  echo "<h1>HELLO WORLD</h1>";
  $a =  print "hello world";
  echo "<br>";
  echo $a;
  echo "<br>";
  printf("%d",$a);
  $a = 10;
  $b = 20;
  echo "<br>";
  echo "<br> \"+\" <br>";
  echo $a+$b;
  echo "<br> \"-\" <br>";
  echo $a-$b;
  echo "<br> \"*\" <br>";
  echo $a*$b;
  echo "<br> \"/\" <br>";
  echo $a/$b;
  echo "<br> \"%\" <br>";
  echo $a%$b;
  echo "<br> \"++\" <br>";
  echo $a++;
  echo "<br> \"--\" <br>";
  echo $a--;
  echo "<br>";
  echo "and many more ";


 ?>

<h1>NOTES</h1>
<ol>
  <li>types of output
    <ol>
      <li>echo</li>
      <li>print</li>
      <li>printf</li>
    </ol>
  </li>
  <li>";" is a  must in the syntax unlike JS</li>
  <li>";" can be skipped in the last line of the php code <b>Only</b></li>
  <li>all the variable name should start with a "$" symbol </li>
  <li>all the variables are Case sensitive but <b>inbuilt functions are <b>not</b></b></li>
  <li>variables are used directly without declaring</li>
  <li>"$_GET" is a Super Global Array which is key:value type of post type GET</li>
</ol>

  <script type="text/javascript" src="main.js"></script>
  </body>
</html>
