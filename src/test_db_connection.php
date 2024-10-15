<?php
include 'db.php';

$result = $conn->query("SELECT * FROM users");
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        print_r($row);
    }
} else {
    echo "0 results";
}
$conn->close();
?>
