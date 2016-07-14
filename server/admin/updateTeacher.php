<?php
include("config.php");

$data = file_get_contents("php://input");
$data = json_decode($data,true);
$name=$data['name'];
$course=$data['course'];
$qualification=$data['qualification'];
$post=$data['post'];

$id=$data['id'];

if(isset($id)){

	mysqli_query($con,"UPDATE `teachers` 
		SET 
		`name` 				=		'".$name."', 
		`course` 				=		'".$course."',
		`qualification` =  '".$qualification."',
		`post` = '".$post."',
		where id = '$id'") or die(mysqli_error($con));

}
