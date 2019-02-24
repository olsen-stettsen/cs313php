<?php
require "getDB.php";
$db = get_db();
$user = $_REQUEST["user"];
$message = $_REQUEST["message"];

$statement = $db->prepare("INSERT INTO post_table (user_id, post_text)
                           VALUES (SELECT user_id FROM account_table WHERE username='$user', '$message')");
$statement->execute();    
?>