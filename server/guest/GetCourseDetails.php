<?php
include("config.php");
$course = $_GET['course'];
$ara = array();
$result = mysqli_query($con,"SELECT * FROM course where `course` = 'course' ") or die(mysqli_error($con));

?>