<?php
include("config.php");
//header('Content-Type: application/json');

$data = file_get_contents("php://input");
$data = json_decode($data,true);

$name = $data['name'];
$description = $data['description'];
$date = $data['date'];
$place = $data['place'];

if(isset($name)&&isset($place)&&isset($date)&&isset($description)){
	mysqli_query($con,"INSERT INTO events(
		`name`,
		`description`,
		`date`,
		`place`) VALUES 
		('".$name."',
		'".$description."',
		'".$date."',
		'".$place."')")
	or die(mysql_error($con));
	$last_id = mysqli_insert_id($con);
	$ara = array();
	$ara['name'] = $name;
	$ara['description'] = $description;
	$ara['date'] = $date;
	$ara['place'] = $place;
	$ara['id']=$last_id;
	$a=array();
	echo json_encode($ara);
}
else{
	echo "some error.try again";
}
	
