<?php
include("config.php");
$course = $_GET['course'];
$ara = array();
$result = mysqli_query($con,"SELECT * FROM teachers where `course` = '$course' AND `post` != 'H.O.D.'  ") or die(mysqli_error($con));
while($x = mysqli_fetch_assoc($result)){
array_push($ara,$x);
}
echo json_encode($ara);
?>