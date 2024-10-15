<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);
$email = $conn->real_escape_string($data['email']); // Escape user input
$name = $conn->real_escape_string($data['name']);   // Escape user input
$password = password_hash($conn->real_escape_string($data['password']), PASSWORD_BCRYPT); // Escape user input and hash password

$sql = "INSERT INTO users (email, name, password) VALUES ('$email', '$name', '$password')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(['message' => 'User registered successfully']);
} else {
    echo json_encode(['error' => 'Failed to register user']);
}

$conn->close();
?>
