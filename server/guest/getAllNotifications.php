<?php
include("config.php");


$result = mysqli_query($con,"SELECT * FROM `feeds`") or die(mysqli_error($con));


$ara = array();

while($x = mysqli_fetch_assoc($result)){
	 array_push($ara,$x);	
}


	echo json_encode($ara);

?>