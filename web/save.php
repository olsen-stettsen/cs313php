<?php
$q = $_REQUEST["q"];
$visitor = json_decode($q);
$file = 'database.txt';
$data = file_get_contents($file);
$array;
if($data == ""){
    $array = array();
}
else {
    $array = json_decode($data);
}
array_push($array, $visitor);
$json = json_encode($array);
file_put_contents($file, $json);
?>