<?php

	include("config.php");
	$course = $_GET["course"];
if(isset($course)){
	mysqli_query($con,"DELETE from coursedetails where course = '".$course."'") or die(mysqli_error($con));
}
else{
		header("HTTP/1.0 500 Student couldn't be deleted.");
}