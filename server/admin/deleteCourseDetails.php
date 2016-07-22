<?php

	include("config.php");
	$id = $_GET["x"];
if(isset($course)){
	mysqli_query($con,"DELETE from course where `id` = '".$id."'") or die(mysqli_error($con));
}
else{
		header("HTTP/1.0 500 Student couldn't be deleted.");
}
