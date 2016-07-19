<?php

	include("config.php");
	$id = $_GET['id'];
/*
	if(!isset($course)){
		echo $course;
		header("HTTP/1.0 500 Inappropriate Arguments.");
	}*/

	$result = mysqli_query($con,"SELECT * FROM teachers where id like '".$id."'") or die(mysqli_error($con));
	while($x = mysqli_fetch_assoc($result)){
		echo json_encode($x);
		return;
	}
