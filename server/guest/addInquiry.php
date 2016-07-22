<?php
include("config.php");
$data = file_get_contents("php://input");
$data = json_decode($data,true);
print_r($data);
$name = $data['name'];
$phone = $data['phone'];
$email = $data['email'];
$city = $data['city'];
$course = $data['course'];
$query = $data['query'];


	mysqli_query($con,"INSERT INTO inquiry(
		`name`,
		`phone`,
		`email`,
		`city`,
		`course`,
		`query`) VALUES
		('".$name."',
		'".$phone."',
		'".$email."',
		'".$city."',
		'".$course."',
		'".$query."')")
		or die(mysql_error($con));
