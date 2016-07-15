<?php

	include("config.php");
	$course = $_GET['course'];
/*
	if(!isset($course)){
		echo $course;
		header("HTTP/1.0 500 Inappropriate Arguments.");
	}*/

	$result = mysqli_query($con,"SELECT * FROM coursedetails where course like '".$course."'") or die(mysqli_error($con));
	while($x = mysqli_fetch_assoc($result)){
		echo json_encode($x);
		return;
	}
