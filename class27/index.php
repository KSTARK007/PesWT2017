<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="main.css">
    <title></title>
  </head>
  <body>
    <h1><a href="phpCode.txt" target="_blank"> CLICK HERE FOR PHP CODE</a></h1>
    <form action="form.php" method="get" target="_blank">
      <input type="text" name="avalue" value="">
      <input type="submit" name="" value="SUBMIT">
    </form>
    <form action="form2.php" method="get" target="_blank">
      <input type="text" name="userId">
      <input type="password" name="userPassword" value="">
      <input type="submit" name="" value="SUBMIT" >
    </form>
    <form action="form3.php" target="_blank">
      <input type="submit" value="SUBMIT">
    </form>
  

<h1>NOTES</h1>
  <h2>COOKIE(are on the client) and SESSIONS(are on the servers)</h2>
  <h2>COOKIE</h2>
  <ol>
    <li>IT should be sent as a header file ie before &lthtml&gt</li>
    <li>cookie is not initialized at the first time </li>
    <li>name (key) 1st parameter in setcookie</li>
    <li>value 2nd parameter in setcookie</li>
    <li>time 3rd parameter in setcookie</li>
    <li>Ristriction of cookies to the subdomain is 4th parameter in setcookie</li>
    <li>Ristriction of cookies to only PHP is the last parameter in setcookie</li>
  </ol>
<h2>SESSION</h2>
<ol>
  <li>the session[val] is set in form2.php </li>
  <li>the session[val] is accessed in form3.php</li>
</ol>
  <script type="text/javascript" src="main.js"></script>
  </body>
</html>
