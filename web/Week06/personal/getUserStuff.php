<?php
require "getDB.php";
$db = get_db();
$statement = $db->prepare("SELECT account_table.username, post_table.post_text FROM account_table INNER JOIN post_table ON account_table.user_id=post_table.user_id");
$statement->execute();
/*
if ($q != "all"){
$statement = $db->prepare("SELECT user_name, post_text FROM temp_table WHERE user_name='$q'");
$statement->execute();
}
else{
    $statement = $db->prepare("SELECT user_name, post_text FROM temp_table");
    $statement->execute();    
}*/
while ($row = $statement->fetch(PDO::FETCH_ASSOC))
{
    $user = $row['username'];
    $post = $row['post_text'];
    echo "<div class='postbox'><div class='postboxhead'><span class='usertext'>$user</span><span class='messageoptions'><a href='javascript:void(0);' onclick='updatemessage(this)''>edit</a> <a href='javascript:void(0);' onclick='deletemessage(this)''>delete</a></span></div><span class='posttext'>$post</span><a class='messageoptions2' href='javascript:void(0);' onclick='replymessage(this)''>reply</a></div>";
}
?>