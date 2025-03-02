<?php
// Firebase Database URL -  ADD A PATH HERE!!!
$firebase_url = "https://gvq2-contactus-default-rtdb.firebaseio.com/contacts.json"; //Important change

// User Input (Sanitize these inputs!)
$contactus_name = filter_var($_POST['contactus_name'], FILTER_SANITIZE_STRING);
$contactus_email = filter_var($_POST['contactus_email'], FILTER_SANITIZE_EMAIL);
$contactus_message = filter_var($_POST['contactus_message'], FILTER_SANITIZE_STRING);

//Avoid SQL injection-like vulnerabilities, since we aren't using SQL

//Check for empty inputs:
if(empty($contactus_name) || empty($contactus_email) || empty($contactus_message)){
    echo "Please fill in all fields.";
    exit;
}

// Data Array
$data = [
    "name" => $contactus_name,
    "email" => $contactus_email,
    "message" => $contactus_message
];

// Generate a unique key (timestamp is a simple approach)
$uniqueKey = time();

// Update the Firebase URL to include the unique key
$firebase_url = "https://gvq2-contactus-default-rtdb.firebaseio.com/contacts/{$uniqueKey}.json";

// Convert data to JSON
$json_data = json_encode($data);

// cURL Setup
$ch = curl_init($firebase_url); //Simplified curl initialization.
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST"); //Use POST method for creating new entries
curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json', 'Content-Length: ' . strlen($json_data)));


$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode == 200 || $httpCode == 201) { //Check for successful response codes
    echo "Data Submitted Successfully!";
} else {
    echo "Error submitting data. HTTP code: " . $httpCode;  //Provide more specific error message
}

?>
