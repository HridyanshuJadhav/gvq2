<?php

$server = "localhost";
$username = "root";
$password = "";
$dbname = "gvq_major";

$con = mysqli_connect($server, $username, $password, $dbname);

if(!$con){
    echo "Not connected";
}

else{
    echo "Connected";
}

//start
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$contactus_name = $_POST['contactus_name'];
$contactus_email = $_POST['contactus_email'];
$contactus_message = $_POST['contactus_message'];

$sql = "INSERT INTO test1 (contactus_name, contactus_email, contactus_message) 
        VALUES ('$contactus_name', '$contactus_email', '$contactus_message')";

$result = mysqli_query($con, $sql);

if ($result) {
    echo "Data Submitted Successfully!";
} else {
    echo "Error: " . mysqli_error($con);
}
}
?>