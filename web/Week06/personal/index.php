<!DOCTYPE html>
<html>
<head>
    <title>CS 313 - Stettsen Olsen - PHP Data Modification </title>
    <link rel="stylesheet" href="./style.css">
    <script src="js.js"></script>
</head>

<body onload="main()">
        <div id="header">
                <div id="headerfilter">
                    <img id="logo" src="../logoWhite.png" alt="CS 313 - Stettsen Olsen">
                </div>
            </div>
    <div id="navBar">
        <a class="navI"href="../../index.html">About Me</a>
        <a class="navI" href="../../assignments.html">Assignments</a>
    </div>
    <div id="breadCrumbs">
        <a class="breadcrumb" href="../index.html">About Me</a>
        <a class="breadcrumb" href="../../assignments.html">>Assignments</a>
        <a class="breadcrumb" href="./team06.php">>PHP Data Access</a>
    </div>
    <div id="textwrap">
    <div id="content">
        <h1>Team06 Scripture Insert</h1>
        <h4>Insert a Scripture</h4>
        <input type="text" id="book_i" placeholder="Book">
        <input type="number" id="chapter_i" placeholder="Chapter">
        <input type="number" id="verse_i" placeholder="Verse">
        <input type="text" id="content_i" placeholder="Content">
        <input type="text" id="topic_i" placeholder="Topic">
        <button id="btn_i">Go</button>
        <!--
        <select name="topiclist" id="topicselect">
            <option value="">Choose One</option>
            <option value="Steve">Steve</option>
            <option value="Jim">Jim</option>
            <option value="Sally">Sally</option>
            <option value="all">All</option>
        </select>   -->
        <div id="output"></div>               
    </div>
    </div>
</body>
</html>