<?php
$q = $_REQUEST["q"];
$s = $_REQUEST["s"];
echo $s;
echo $q;
if($s == 'true'){
    session_start();
    echo "started";
}
$_SESSION["cart"] = $q;
echo "added";
?>