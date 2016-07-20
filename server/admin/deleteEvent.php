<?php

	include("config.php");
	$id = $_GET["id"];
if(isset($id)){
	mysqli_query($con,"DELETE from events where id = '".$id."'") or die(mysqli_error($con));
}
else{
		header("HTTP/1.0 500 Student couldn't be deleted.");
}
