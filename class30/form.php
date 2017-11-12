<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userDatabase";
$c = mysqli_connect($servername,$username,$password,$dbname);

$q = "INSERT INTO students values ('$_POST[id]','$_POST[password]')";
var_dump(mysqli_query($c,$q));
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
