<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Access to MySQL using php</title>
  </head>
  <style media="screen">
    input[type=submit]
    {
      margin-left: 500px;
      margin-top: 50px;
      border: none;
      border-radius: 10px;
      padding: 20px;
      width: 50%;
    }
    input[type=submit]:hover
    {
      background-color: black;
      color: white;
    }
  </style>
  <body>
    <form class="" action="signup.php" method="post" target="_blank">
      <input type="submit" value="New user">
    </form>
    <form class="" action="login.php" method="post" target="_blank">
      <input type="submit" value="Login">
    </form>


<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "userDatabase";
  $c = mysqli_connect($servername,$username,$password);//forth parameter is when you what to connect to only one database
  if(!$c)
  {
      echo("conection failed!<br>");
  }
  else
  {
    echo("conection established!<br>");
    $q = "CREATE DATABASE user"; // will just create a querry
    var_dump(mysqli_query($c,$q)); // mysqli_query($c,$q) is a must. it will actually query in the table
    mysqli_close($c);
    $c = mysqli_connect($servername,$username,$password,"user");//forth parameter is when you what to connect to only one database
    if(!$c)
    {
        echo("conection failed!<br>");
    }
    else
    {
      echo("conection established!<br>");
      $query = "CREATE TABLE students (ID INT(30) PRIMARY KEY AUTO_INCREMENT ,Name VARCHAR(30) NOT NULL ,password VARCHAR(30))";
      var_dump(mysqli_query($c,$query));
    }
  }
?>
</body>
</html>
