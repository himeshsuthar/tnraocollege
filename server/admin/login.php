<?php
include("config.php");
//header('Content-Type: application/json');

$data = file_get_contents("php://input");
$data = json_decode($data,true);
print_r($data);

$username = $data['username'];
$password = $data['password'];

$result = mysqli_query($con,"SELECT * FROM admin where `username` = '$username' AND `password`='$password'") or die(mysqli_error($con));
if(mysqli_num_rows($result)==1){

	while($x = mysqli_fetch_assoc($result)){
		echo json_encode($x);
	}
}
else{
	header("HTTP/1.0 401 Unauthorized Access");
}
?>