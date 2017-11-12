<?php
    session_start();
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
        echo $_SESSION["val"];
      ?>
  </body>
</html>
