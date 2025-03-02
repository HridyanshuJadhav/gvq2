<?php
// Firebase Database ka URL
$firebase_url = "https://gvq2-contactus-default-rtdb.firebaseio.com/";

// User Input
$contactus_name = $_POST['contactus_name'];
$contactus_email = $_POST['contactus_email'];
$contactus_message = $_POST['contactus_message'];

// Data Array
$data = [
    "name" => $contactus_name,
    "email" => $contactus_email,
    "message" => $contactus_message
];

// Convert data to JSON
$json_data = json_encode($data);

// cURL Setup
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $firebase_url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);

$response = curl_exec($ch);
curl_close($ch);

if ($response) {
    echo "Data Submitted Successfully!";
} else {
    echo "Error!";
}
?>
