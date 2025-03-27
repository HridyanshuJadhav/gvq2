<?php

$server = "localhost";
$username = "root";
$password = "";
$dbname = "gvq_major";

$con = mysqli_connect($server, $username, $password, $dbname);

//start
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$feedback_name = $_POST['feedback_name'];
$feedback_email = $_POST['feedback_email'];
$feedback_textarea = $_POST['feedback_textarea'];

$sql = "INSERT INTO feedback (feedback_name, feedback_email, feedback_textarea) 
        VALUES ('$feedback_name', '$feedback_email', '$feedback_textarea')";

$result = mysqli_query($con, $sql);

if ($result) {
    echo "<script>alert('Data Submitted Successfully!'); window.location.href='/gvq2/Feedback page/feedback.html';</script>";
} else {
    echo "Error: " . mysqli_error($con);
}
}
?>
