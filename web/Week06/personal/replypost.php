<?php
require "getDB.php";
$db = get_db();
$user = $_REQUEST["user"];
$message = $_REQUEST["message"];
$reply = $_REQUEST["reply"];

$statement = $db->prepare("INSERT INTO reply_table (user_id, post_id, reply_text)
                           VALUES ((SELECT user_id FROM account_table WHERE username='$user'), (SELECT user_id FROM post_table WHERE post_text='$message'), '$reply')");
$statement->execute();    
?>