<?php
include("config.php");
//header('Content-Type: application/json');

$data = file_get_contents("php://input");
$data = json_decode($data,true);
print_r($data);
$id = $data['id'];
$name = $data['name'];
$content = $data['content'];
$eligibility = $data['eligibility'];
$duration = $data['duration'];
$fees = $data['fees'];




	mysqli_query($con,"INSERT INTO course(
		`name`,
		`id`,
		`content`,
		`eligibility`,
		`duration`,
		`fees`) VALUES
		('".$name."',
		'".$id."',
		'".$content."',
		'".$eligibility."',
		'".$duration."',
		'".$fees."')")
		or die(mysql_error($con));
