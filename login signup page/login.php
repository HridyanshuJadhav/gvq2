<?php
session_start();

$server = "localhost";
$username = "root";
$password = "";
$dbname = "gvq_major";

$con = mysqli_connect($server, $username, $password, $dbname);

if (!$con) {
    die("Connection Failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $login_email = mysqli_real_escape_string($con, $_POST['login_email']);
    $login_password = $_POST['login_password'];

    $query = "SELECT * FROM userdata WHERE signup_email='$login_email'";
    $result = mysqli_query($con, $query);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);

        if (password_verify($login_password, $row['signup_password'])) {
            $_SESSION['user_id'] = $row['id'];
            $_SESSION['user_name'] = $row['signup_name'];
            echo "<script>alert('Login Successful! Redirecting to Dashboard...'); window.location.href='/gvq2/Personal dashboard/personaldashboard.html';</script>";
            exit();
        } else {
            echo "<script>alert('Incorrect Password! Try again.'); window.location.href='/gvq2/index.html';</script>";
        }
    } else {
        echo "<script>alert('User not found! Please sign up.'); window.location.href='/gvq2/signup.html';</script>";
    }
}
?>
