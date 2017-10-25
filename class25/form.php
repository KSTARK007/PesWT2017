<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
    if($_GET["text"] == "yes")
      { echo ("true <br>");
        echo $_GET["text"];
      }
    else
      echo "FALSE";
      for ($i=0; $i <5 ; $i++) {
        echo "<br>";
        echo $_GET["text"];
        echo "<br>";
      }
     ?>
  </body>
</html>
