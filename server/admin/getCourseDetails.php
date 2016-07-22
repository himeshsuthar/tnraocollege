<?php
include("config.php");
mysqli_set_charset($con,"utf8");

error_reporting(1);

$course = $_GET['course'];

$result = mysqli_query($con,"SELECT * FROM course where `id` like '$course' ") or die(mysqli_error($con));

while($x = mysqli_fetch_assoc($result))
	echo json_encode($x,true);


?>
