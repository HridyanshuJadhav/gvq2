<?php

$server = "localhost";
$username = "root";
$password = "";
$dbname = "gvq_major";

$con = mysqli_connect($server, $username, $password, $dbname);

//start
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$signup_name = $_POST['signup_name'];
$signup_email = $_POST['signup_email'];
$signup_password = $_POST['signup_password'];
$signup_confirm = $_POST['signup_confirm'];

if ($signup_password !== $signup_confirm) {
    echo "<script>alert('Passwords do not match!'); window.location.href='/gvq2/login signup page/signup.html';</script>";
    exit();
}

$hashed_password = password_hash($signup_password, PASSWORD_BCRYPT);

$sql = "INSERT INTO userdata (signup_name, signup_email, signup_password) 
        VALUES ('$signup_name', '$signup_email', '$hashed_password')";

$result = mysqli_query($con, $sql);

if ($result) {
    echo "<script>alert('Data Submitted Successfully!'); window.location.href='/gvq2/login signup page/login.html'</script>";
} else {
    echo "Error: " . mysqli_error($con);
}
}
?>
