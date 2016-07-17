<?php
include("config.php");
mysqli_set_charset($con,"utf8");

error_reporting(1);

$course = $_GET['course'];

$result = mysqli_query($con,"SELECT * FROM course where `id` like '$course' ") or die(mysqli_error($con));

while($x = mysqli_fetch_assoc($result))
	echo json_encode($x,true);

// echo "<pre>";
// echo mysqli_real_escape_string ($con,"<b>“We’re changing the world with technology”  - Bill Gates</b><br /><b>“Once a new technology rolls over you, if you’re not part of the steamroller, you’re part of the world”  - Stewart Brand</b><br />The Bachelor of Computer Applications or BCA is a three year undergraduate program. <br />BCA is designed to produce graduates who have the necessary skills & knowledge not only in computer and information technology, but also in communication, organization and management .<br />BCA course will develop the scope for all streams student to get job in IT industry since they will be able to develop software programming skills.<br />They can also do MCA / M.Sc.(IT & CA) / MBA course after completion of the BCA course, which will enable them to get job in top-rated IT companies like Infosys, TCS, Wipro, Reliance etc.");
// echo "</pre>";


?>
