<?php
require "getDB.php";
$db = get_db();
$user = $_REQUEST["user"];

$statement = $db->prepare("INSERT INTO account_table (account_table) VALUES ('$user')");
$statement->execute();    
?>