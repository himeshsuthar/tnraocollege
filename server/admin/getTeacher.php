<?php

	include("config.php");
	$name = $_GET['name'];
/*
	if(!isset($course)){
		echo $course;
		header("HTTP/1.0 500 Inappropriate Arguments.");
	}*/

	$result = mysqli_query($con,"SELECT * FROM teachers where name like '".$name."'") or die(mysqli_error($con));
	while($x = mysqli_fetch_assoc($result)){
		echo json_encode($x);
		return;
	}
