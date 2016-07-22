<?php
  include("config.php");
  $course = $_GET['course'];

  $ara = array();
  $result = mysqli_query($con,"SELECT * FROM teachers where `courseid` = '$course' order by post asc") or die(mysqli_error($con));

  while($x = mysqli_fetch_assoc($result)){
    array_push($ara,$x);
  }

  echo json_encode($ara,true);
?>
