<?php
require "getDB.php";
$db = get_db();
$q = $_REQUEST["q"];
if ($q != "all"){
$statement = $db->prepare("SELECT book, chapter, verse, content FROM scriptures WHERE topic='$q'");
$statement->execute();
}
else{
    $statement = $db->prepare("SELECT book, chapter, verse, content FROM scriptures");
    $statement->execute();    
}
while ($row = $statement->fetch(PDO::FETCH_ASSOC))
{
    $book = $row['book'];
    $chapter = $row['chapter'];
    $verse = $row['verse'];
    $content = $row['content'];
    echo "<div class='postbox'><div class='postboxhead'><span class='usertext'>$book $chapter:$verse</span></div><span class='posttext'>$content</span></div>";
}
?>