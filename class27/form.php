<?php
    setcookie("text1",$_GET["avalue"],time()+3600);//3600 it is Seconds
 ?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>File Handling</title>
  </head>
  <body>
      <h1><a href="phpCode.txt" target="_blank"> CLICK HERE FOR PHP CODE</a></h1>
      <?php

      $text = $_COOKIE["text1"];
      echo $text;
      ?>
  </body>
</html>
