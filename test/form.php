<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
      $arr = array("Onion" => 50, "Mushroon" => 60, "Olive" => 70, "Jalepeno" => 40 ,"Extra Cheese" => 30);
      $price = 0;
      $v = 0;
      foreach ($_POST["t"] as $key)
      {
        $price = $price + $arr[$key];
      }
      echo "$price";
      /*$variable = array($_GET["type"]);
      echo "<br/>";
      var_dump($variable);
      echo "<br/>";
      for($i=0;$i<$variable.length;$i++)
      {
          $price = $price + $arr[$variable[$i]];
      }
      echo "$price";*/
     ?>
  </body>
</html>
