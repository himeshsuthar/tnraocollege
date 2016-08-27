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
function checkUserName($username,$con){
	$user= mysqli_query($con,"SELECT * FROM admin where `username` = '$username'") or die(mysqli_error($con));
	$row = mysql_fetch_row($user);
	$user_count=$row[0];
	if($user_count>0){
		echo "username '.$username.' not available";
	}
	else {
		echo "username '.$username.' is available";
	}
}

?>
