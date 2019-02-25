<?php
require "getDB.php";
$db = get_db();
$user = $_REQUEST["user"];
$message = $_REQUEST["message"];
$newmessage = $_REQUEST["newmessage"]

$statement = $db->prepare("UPDATE post_table SET post_text='$newmessage' WHERE post_text='$message'");
$statement->execute();    
?>