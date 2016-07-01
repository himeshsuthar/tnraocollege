<?php
include("config.php");


$result = mysqli_query($con,"SELECT * FROM `course` where 1 ") or die(mysqli_error($con));


$ara = array();

while($x = mysqli_fetch_assoc($result)){
		$ara[] = $x;		
		// echo json_encode($x);
	}


	echo json_encode($ara[1]);

?>