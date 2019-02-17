<?php
require "getDB.php";
$db = get_db();
$book = $_REQUEST["book"];
$chapter = $_REQUEST["chapter"];
$verse = $_REQUEST["verse"];
$content = $_REQUEST["content"];
$topic = $_REQUEST["topic"];

$statement = $db->prepare("INSERT INTO scriptures (book, chapter, verse, content)
                           VALUES ('$book', $chapter, $verse, '$content')");
$statement->execute();    
?>