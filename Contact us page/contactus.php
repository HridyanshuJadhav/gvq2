<?php

$server = "localhost";
$username = "root";
$password = "";
$dbname = "gvq";

$con = mysqli_connect($server, username, $password, $dbname);

if(!$con){
    echo "Not connected";
}

else{
    echo "Connected";
}

//start

$first_name1 = $_POST['first_name1'];
$last_name1 = $_POST['last_name1'];
$email1 = $_POST['email1'];
$textarea1 = $_POST['textarea1'];

$sql = "INSERT INTO `test1`(`first_name1`, `last_name1`, `email1`, `textarea1`) 
VALUES ('[value-1]','[value-2]','[value-3]','[value-4]')";

$result = mysqli_query($con, $sql);

if($result){
    echo "Data Submitted";
}

else{
    echo "Data submission failed";
}

?>