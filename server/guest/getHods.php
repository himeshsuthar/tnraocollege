<?php
include("config.php");

$ara = array();
$result = mysqli_query($con,"SELECT * FROM teachers where `post` = 'H.O.D.' ") or die(mysqli_error($con));
while($x = mysqli_fetch_assoc($result)){
array_push($ara,$x);
}
echo json_encode($ara);
?>