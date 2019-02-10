<?php
require "getDB.php";
$db = get_db();
$q = $_REQUEST["q"];
echo "$q";
$statement = $db->prepare("SELECT user_name, post_text FROM temp_table");
$statement->execute();
while ($row = $statement->fetch(PDO::FETCH_ASSOC))
{
    $user = $row['user_name'];
    $post = $row['post_text'];
    echo "<p><i>$post</i> -$user";
}
?>
<!DOCTYPE html>
<html>

<head>
    <title>CS 313 - Stettsen Olsen - PHP Data Access</title>
    <link rel="stylesheet" href="style.css">
    <script src="js.js"></script>
</head>

<body onload="main()">
        <div id="header">
                <div id="headerfilter">
                    <!--<h1>CS 313 - Stettsen Olsen</h1>-->
                    <img id="logo" src="../logoWhite.png" alt="CS 313 - Stettsen Olsen">
                </div>
            </div>
    <div id="navBar">
        <a class="navI"href="../index.html">About Me</a>
        <a class="navI" href="../assignments.html">Assignments</a>
    </div>
    <div id="breadCrumbs">
        <a class="breadcrumb" href="../index.html">About Me</a>
        <a class="breadcrumb" href="../assignments.html">>Assignments</a>
        <a class="breadcrumb" href="./index.php">>PHP Data Access</a>
    </div>
    <div id="content">
        <h1>User Messages</h1>
        <select name="userslist" id="userselect">
            <option value="Steve">Steve</option>
            <option value="Jim">Jim</option>
            <option value="Sally">Sally</option>
            <option value="all">All</option>
        </select>                  
    </div>
</body>

</html>