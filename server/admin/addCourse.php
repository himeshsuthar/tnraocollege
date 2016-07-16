<?php
include("config.php");
//header('Content-Type: application/json');

$data = file_get_contents("php://input");
$data = json_decode($data,true);
print_r($data);
$course = $data['course'];
$name = $data['name'];
$content = $data['content'];
$eligibility = $data['eligibility'];
$duration = $data['duration'];
$fees = $data['fees'];
$hod = $data['hod'];
$hodphoto = $data['hodphoto'];



	mysqli_query($con,"INSERT INTO coursedetails(
		`name`,
		`course`,
		`content`,
		`eligibility`,
		`duration`,
		`fees`,
		`hod`,
		`hodphoto`) VALUES 
		('".$name."',
		'".$course."',
		'".$content."'
		'".$eligibility."',
		'".$duration."',
		'".$fees."',
		'".$hod."',
		'".$hodphoto."')")
		or die(mysql_error($con));
	
