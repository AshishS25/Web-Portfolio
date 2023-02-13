<?php
    
    $email = $_GET["username"];
    $password = $_GET["password"];

    $details = array("username"=>$email,"password"=>$password);
    
    foreach($details as $x => $x_value) {
        echo "Key=" . $x . ", Value=" . $x_value;
        echo "<br><br>";
      }
    if($email=="admin"&&$password=="admin@123")  
    echo("Login successful");
    else
    echo("Login unsuccessfull");

?>