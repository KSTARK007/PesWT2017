<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <form class="" action="login.php" method="post">
      <h1> enter your name
      <input type="text" name="id" required></h1>
      <h1>enter your password
        <input type="password" name="password" required></h1>
        <input type="submit">
    </form>

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user";
$c = mysqli_connect($servername,$username,$password,$dbname);
if(!$c)
{
    echo("conection failed!<br>");
}
else
{
  echo("conection established!<br>");
  $q = "SELECT * FROM students";
  $res = mysqli_query($c,$q);
  while(($val = mysqli_fetch_assoc($res))!=NULL)
  {
    if($val["Name"] == $_POST["id"] && $val["password"] == $_POST["password"])
      {
        $check = "TRUE";
        break;
      }
    else
    {
      $check = "FALSE";
    }
  }
if($check == "TRUE")
  echo "WELCOME ".$val["Name"];
else {
  echo "TRY AGAIN";
//  echo $val["Name"];
 }
}



 ?>

</body>
</html>
