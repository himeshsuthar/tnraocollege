<?php
include("config.php");
	$id = $_GET['id'];
	$result = mysqli_query($con," select * from events where id = '$id'") or die(mysqli_error($con));
	$ara = array();
	while($x = mysqli_fetch_array($result)){
		array_push($ara,$x);
	}
	echo json_encode($ara);

?>
