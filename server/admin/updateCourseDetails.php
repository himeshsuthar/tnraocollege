<?php
include("config.php");

$data = file_get_contents("php://input");
$data = json_decode($data,true);
$course=$data['course']
$name=$data['name'];
$content=$data['content'];
$eligibility=$data['eligibility'];
$duration=$data['duration'];
$fees=$data['fees'];
$hod=$data['hod'];
$id=$data['id'];

if(isset($id)){

	mysqli_query($con,"UPDATE `coursedetails` 
		SET 
		`name` 				=		'".$name."', 
		`course` 				=		'".$course."',
		`content` =  '".$content."',
		`eligibility` = '".$eligibility."',
		`duration` =  '".$duration."',
		`fees` =  '".$fees."',
		`hod` =  '".$hod."',

		where id = '$id'") or die(mysqli_error($con));

}
