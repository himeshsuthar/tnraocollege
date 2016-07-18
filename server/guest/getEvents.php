<?php
include("config.php");

$ara = array();
$result = mysqli_query($con,"SELECT * FROM `events`") or die(mysqli_error($con));

while($x = mysqli_fetch_array($result)){
		$ar = array();
		$ar['id'] = $x['id'];
		$ar['name'] = $x['name'];
		$ar['description'] = $x['description'];
		$ar['date'] = $x['date'];
		$ar['place'] = $x['place'];
		$ar['image'] = firstPhoto($x['id'],$con);
		array_push($ara,$ar);
	}



	function firstPhoto($id,$con){
	  $result= mysqli_query($con,"select * FROM eventphotos where `eventid` = '$id' order by id desc") or die(mysqli_error($con));
	  $ara=array();
	   while($x = mysqli_fetch_assoc($result)){
	    
	      break;
	   }
		 return$x;
	}
	echo json_encode($ara);



?>
