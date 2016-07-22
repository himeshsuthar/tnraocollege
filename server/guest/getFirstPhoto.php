<?php
include("config.php");

firstPhoto($_GET['id'],$con);

function firstPhoto($id,$con){
  $result= mysqli_query($con,"select * FROM eventphotos where `eventid` = '$id' order by id desc") or die(mysqli_error($con));
  $ara=array();
   while($x = mysqli_fetch_assoc($result)){
      echo $x;
      break;
   }
}


 ?>
