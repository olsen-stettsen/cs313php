<?php
require "getDB.php";
$db = get_db();
$user = $_REQUEST["user"];
$message = $_REQUEST["message"];
$newmessage = $_REQUEST["newmessage"];
echo $newmessage;

$statement = $db->prepare("UPDATE post_table SET post_text='$newmessage' WHERE post_text='$message' AND user_id=(SELECT user_id FROM account_table WHERE username='$user')");
$statement->execute();    
?>