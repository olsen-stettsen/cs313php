<?php
require "getDB.php";
$db = get_db();
$user = $_REQUEST["user"];
$message = $_REQUEST["message"];

$statement = $db->prepare("DELETE FROM temp_table WHERE post_text='$message' AND user_name='$user'");
$statement->execute();    
?>