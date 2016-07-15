<?php
header("Access-Control-Allow-Origin: *");

header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header("Cache-Control: *"); //HTTP 1.1
header("Content-Type : text/plain");

ini_set('display_errors', 'On');
error_reporting(-1);
// ini_set('display_startup_errors', 1);

$host = "localhost";
$username = "root";
$password = "";

$con = mysqli_connect($host,$username,$password,"tnrao") or die ("<br/>Could not connect to MySQL server");

