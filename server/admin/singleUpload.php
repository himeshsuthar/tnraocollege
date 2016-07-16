<?php
include 'config.php';
echo $_GET['id'];
  if(!file_exists('../events/'.$_GET['id'])){
    echo "CREATING FOLDER<br>";
    mkdir('../events/'.$_GET['id'],0777);
    echo "FOLDER CREATED<br>";
  }
  $upath="../events/".$_GET['id']."/";
  print_r($_FILES['file']['name']);
  $target = $upath.$_FILES['file']['name'];
  $path=substr($target,3);
  echo "<br>".$target;
  error_reporting(1);
  if(move_uploaded_file($_FILES['file']['tmp_name'],$target)){
   echo $_FILES['file']['name']." Uploaded.<br>";
  mysqli_query($con,"INSERT INTO `eventphotos`(eventid,path) VALUES('".$_GET['id']."','".$path."')")or die(mysqli_error($con));
  }
  else{
   echo "Failed to upload.";
  }

?>
