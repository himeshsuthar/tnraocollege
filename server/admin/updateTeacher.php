<?php
include("config.php");

$data = file_get_contents("php://input");
$data = json_decode($data,true);
$name=$data['name'];
$courseid = $data['courseid'];
$qualification=$data['qualification'];
$post=$data['post'];
$id=$data['id'];

if(isset($id)){

	mysqli_query($con,"UPDATE `teachers`
		SET
		`name` 				=		'".$name."',
		`courseid` 				=		'".$courseid."',
		`qualification` =  '".$qualification."',
		`post` = '".$post."',
		where id = '$id' ") or die(mysqli_error($con));

}
?>
