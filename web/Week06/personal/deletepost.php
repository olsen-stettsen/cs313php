<?php
require "getDB.php";
$db = get_db();
$user = $_REQUEST["user"];
$message = $_REQUEST["message"];

$statement = $db->prepare("DELETE FROM post_table WHERE post_text='$message' AND user_id=(SELECT user_id FROM account_table WHERE username='$user')");
$statement->execute();    
?>