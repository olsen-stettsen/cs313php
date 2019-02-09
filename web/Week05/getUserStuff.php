<?php
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