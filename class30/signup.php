<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <form class="" action="signup.php" method="post">
      <h1> enter your name
      <input type="text" name="id" required></h1>
      <h1>enter your password
        <input type="password" name="password" required></h1>
        <h1>renter the password
        <input type="password" name="reenter" value=""></h1>
        <input type="submit">
    </form>
    <?php
    if($_POST["password"]==$_POST["reenter"])
    {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "user";
    $c = mysqli_connect($servername,$username,$password,$dbname);
    $q = "INSERT INTO students(Name,password) values ('$_POST[id]','$_POST[password]')";
    var_dump(mysqli_query($c,$q));
    }
    else {
      echo ("reenter the password ");
    }
     ?>


</body>
</html>
