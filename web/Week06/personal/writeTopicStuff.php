<?php
require "getDB.php";
$db = get_db();
$user = $_REQUEST["user"];
$message = $_REQUEST["message"];

$statement = $db->prepare("INSERT INTO temp_table (user_name, post_text)
                           VALUES ('$user', '$message')");
$statement->execute();    
?>