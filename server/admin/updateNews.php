<?php
include("config.php");

$data = file_get_contents("php://input");
$data = json_decode($data,true);
$name=$data['name'];
$description=$data['description'];
$id=$data['id'];

if(isset($id)){

	mysqli_query($con,"UPDATE `feeds`
		SET
		`name` 				=		'".$name."',
		`description` 				=		'".$description."',
		where id = '$id'") or die(mysqli_error($con));

}
