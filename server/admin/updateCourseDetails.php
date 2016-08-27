<?php
include("config.php");

$data = file_get_contents("php://input");
$data = json_decode($data,true);

$name=$data['name'];
$content=$data['content'];
$eligibility=$data['eligibility'];
$duration=$data['duration'];
$fees=$data['fees'];

$id=$data['id'];

if(isset($id)){

	mysqli_query($con,"UPDATE `course`
		SET
		`name` 				=		'".$name."',
		`id`					= '".$id."',
		`content` =  '".$content."',
		`eligibility` = '".$eligibility."',
		`duration` =  '".$duration."',
		`fees` =  '".$fees."'


		where id = '$id'") or die(mysqli_error($con));

}
