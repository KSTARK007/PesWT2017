<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>PRICE</title>
  </head>
  <body>
    <h1>Login</h1>
    <form  action="login.php" target="_blank"  method="post">
        NAME <input type="text" name="name" >
        PASSWORD <input type="text" name="pass">
      <input type="submit" name="" value="submit">
    </form>



    <?php

      $f1 = fopen("all.txt" , "a+");
      $nameValue = $_POST["name"];
      $passValue = $_POST["pass"];
      echo $nameValue . " dfjhdafh " .$passValue;
      
     ?>

  </body>
</html>
