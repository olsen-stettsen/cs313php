<?php
require "getDB.php";
$db = get_db();
$user = $_REQUEST["user"];
$message = $_REQUEST["message"];
$newmessage = $_REQUEST["newmessage"]

$statement = $db->prepare("UPDATE temp_table SET user_name='stevebob' WHERE post_text='$message' AND user_name='$user'");
$statement->execute();    
?>