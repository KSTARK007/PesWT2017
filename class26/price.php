<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>PRICE</title>
  </head>
  <body>
    <h1>TOPING</h1>
    <form  action="price.php" target="_blank"  method="post">
      <input type="checkbox" name="topping" value="Tomato">Tomato
      <br>
      <input type="checkbox" name="topping" value="Onion">Onion
      <br>
      <input type="checkbox" name="topping" value="Broccoli">Broccoli
      <br>
      <input type="checkbox" name="topping" value="panner">panner
      <br>
      <input type="checkbox" name="topping" value="Corn">Corn
      <br>
      <input type="checkbox" name="topping" value="BellPepper">BellPepper
      <br>
      <input type="submit" name="" value="submit">
    </form>



    <?php

    $price = array("Tomato" => 10 , "Onion" => 15 ,"Broccoli" => 20 , "panner" => 40 , "Corn" => 25 , "BellPepper" => 30 );
    $toppings = $_GET["topping"];
    var_dump($toppings);

     ?>

  </body>
</html>
