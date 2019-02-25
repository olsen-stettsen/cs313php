<?php
require "getDB.php";
$db = get_db();
$q = $_REQUEST["q"];
$statement = $db->prepare("SELECT username FROM account_table");
$statement->execute();
$ex = false;
while ($row = $statement->fetch(PDO::FETCH_ASSOC))
{
    $user = $row['username'];
    if ($user == $q){
        $ex = true;
    }
}
echo $ex;
?>