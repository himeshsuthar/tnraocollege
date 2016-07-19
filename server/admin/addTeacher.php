<?php
include("config.php");
//header('Content-Type: application/json');

$data = file_get_contents("php://input");
$data = json_decode($data,true);
print_r($data);
$name = $data['name'];
$qualification = $data['qualification'];
$post = $data['post'];
$photo = $data['photo'];
$course = $data['course'];


	mysqli_query($con,"INSERT INTO teachers(
		`name`,
		`qualification`,
		`post`,
		`photo`,
		`course`) VALUES
		('".$name."',
		'".$qualification."',
		'".$post."',
		'".$photo."',
		'".$course."')")
		or die(mysql_error($con));
