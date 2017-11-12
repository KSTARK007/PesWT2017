<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Access to MySQL using php</title>
  </head>
  <body>


<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "dbx";
  $c = mysqli_connect($servername,$username,$password,$dbname);//forth parameter is when you what to connect to only one database
  if(!$c)
  {
      echo("conection failed!<br>");
  }
  else
  {
    echo("conection established!<br>");
  }
 //creating database
$q = "CREATE DATABASE DATABASE_NAME"; // will just create a querry
var_dump(mysqli_query($c,$q)); // mysqli_query($c,$q) is a must. it will actually query in the table

//creating table
 //$query = "CREATE TABLE students (ID INT(30) PRIMARY KEY AUTO_INCREMENT ,Name VARCHAR(30) NOT NULL ,Age INT(3),Branch VARCHAR(30),CGPA FLOAT(40))";
 //var_dump(mysqli_query($c,$query));


//inserting a value into the table

// $q = "INSERT INTO students (Name,Age,Branch,CGPA) values ('A',19,'cse',9.8)";
// var_dump(mysqli_query($c,$q));
// $q = "INSERT INTO students (Name,Age,Branch,CGPA) values ('B',20,'cse',10.0)";
// var_dump(mysqli_query($c,$q));
// $q = "INSERT INTO students (Name,Age,Branch,CGPA) values ('C',21,'cse',8.0)";
// var_dump(mysqli_query($c,$q));
// $q = "INSERT INTO students (Name,Age,Branch,CGPA) values ('D',21,'cse',9.5)";
// var_dump(mysqli_query($c,$q));
// $q = "INSERT INTO students (Name,Age,Branch,CGPA) values ('E',20,'cse',9.3)";
// var_dump(mysqli_query($c,$q));
// $q = "INSERT INTO students (Name,Age,Branch,CGPA) values ('E',20,'cse',9.3)";
// var_dump(mysqli_query($c,$q));

//$q = "INSERT INTO students (Name,Age,Branch,CGPA) values ('A',20,'cse',9.3)";
//var_dump(mysqli_query($c,$q));


 ?>
</body>
</html>
