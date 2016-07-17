<?php
include("config.php");

$ara = array();




$result = mysqli_query($con,"SELECT * FROM `course`") or die(mysqli_error($con));
while($x = mysqli_fetch_assoc($result)){
		$x['hod'] = getHodWithPhoto($x['id'],$con);
		array_push($ara,$x);
	}


echo json_encode($ara,true);




//FUNCTION getHodWithPhoto()
function getHodWithPhoto($id,$con){
	$res = mysqli_query($con,"SELECT * FROM teachers where courseid = '$id' AND post = 'H.O.D.'") or die(mysqli_error($con));
	return mysqli_fetch_assoc($res);
}


?>
