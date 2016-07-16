<?php
include("config.php");
//header('Content-Type: application/json');

$data = file_get_contents("php://input");
$data = json_decode($data,true);
print_r($data);
$name = $data['name'];
$description = $data['description'];
$date = $data['date'];
$place = $data['place'];


	mysqli_query($con,"INSERT INTO events(
		`name`,
		`description`,
		`date`,
		`place`) VALUES 
		('".$name."',
		'".$description."',
		'".$date."',
		'".$place."')")
		or die(mysql_error($con));
	
