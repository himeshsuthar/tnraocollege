<?php
include("config.php");

$data = file_get_contents("php://input");
$data = json_decode($data,true);
$name=$data['name'];
$description=$data['description'];
$place=$data['place'];
$id=$data['id'];

if(isset($id)){

	mysqli_query($con,"UPDATE `events`
		SET
		`name` 				=		'".$name."',
		`description` 				=		'".$description."',
		`place` 				=		'".$place."'
		where id = '$id'") or die(mysqli_error($con));

}
