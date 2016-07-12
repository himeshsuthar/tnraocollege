<?php
include("config.php");
//header('Content-Type: application/json');

$data = file_get_contents("php://input");
$data = json_decode($data,true);
print_r($data);
$name = $data['name'];
$qualification = $data['qualification'];
$post = $data['$post'];
$photo = $data['$photo']


	mysqli_query($con,"INSERT INTO feeds(
		`name`,
		`description`,
		`date`) VALUES 
		('".$name."',
		'".$description."',
		'".$date."')")
		or die(mysql_error($con));
	
