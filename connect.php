<?php
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$dateofbirth = $_POST['dateofbirth'];
$gender = $_POST['gender'];
$MobileNumber = $_POST['MobileNumber'];
$Address = $_POST['Address'];

// Database Connection
$conn = new mysqli('localhost', 'id21288110_admin', 'Admin@123', 'id21288110_careallocator');
if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into Registration(name, email, password, dateofbirth, gender, MobileNumber, Address) values(?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssis", $name, $email, $password, $dateofbirth, $gender, $MobileNumber, $Address);
    $execval = $stmt->execute();
    echo $execval;
    echo "Registration successfully...";
    $stmt->close();
    $conn->close();
}
?>