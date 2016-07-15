<div class="col-md-12 col-xs-12">
<div class="row">
<?php
error_reporting(E_ALL);
$dir="../../assets/images/infrastructure/library/";
$a= scandir($dir);
$b="tnraocollege/client/";

foreach ($a as $key => $value) {
if($value=="."){
	continue;
}	
elseif($value==".."){
	continue;
}
else {

	echo
	" <img src= '".$b."".$dir."".$value."' img-responsive>
   ";
}
}
?>
</div>
</div>