<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>File Handling</title>
  </head>
  <body>
      <h1><a href="phpCode.txt" target="_blank"> CLICK HERE FOR PHP CODE</a></h1>

      <?php
      $f1 = fopen("all.txt","w+");
      fwrite($f1 , "hello");
      fwrite($f1 , "\n hi");
      $f1 = fopen("all.txt","r+");
      $text = fgets($f1);
      echo $text;
      fclose($f1);
       ?>


    <h1>Types of open</h1>
    <ol>
      <li>r - read Only</li>
      <li>w - write Only</li>
      <li>r+ - read and write</li>
      <li>w+ - write and read</li>
      <li>a - appends at the end </li>
      <li>a+</li>
    </ol>
  </body>
</html>
