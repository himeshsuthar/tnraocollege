<?php

include("config.php");

$data = file_get_contents("php://input");
$data = json_decode($data,true);


print_r($data);

 $name=$data['name'];
 $courseid = $data['courseid'];
 $qualification=$data['qualification'];
 $post=$data['post'];
 $id=$data['id'];
 $phone=$data['phone'];
 $email=$data['email'];


 	mysqli_query($con,"UPDATE `teachers`
 		SET
 		`name` 				=		'$name',
 		`courseid` 				=		'$courseid',
 		`qualification` =  '$qualification',
 		`post` = '$post',
		`phone` ='$phone',
		`email` ='$email'

 		where `id` = '$id'") or die(mysqli_error($con));


?>
