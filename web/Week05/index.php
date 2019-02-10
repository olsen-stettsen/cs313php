<!DOCTYPE html>
<html>
<head>
    <title>CS 313 - Stettsen Olsen - PHP Data Access</title>
    <link rel="stylesheet" href="./style2.css">
    <script src="js.js"></script>
</head>

<body onload="main()">
        <div id="header">
                <div id="headerfilter">
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
    <div id="textwrap">
    <div id="content">
        <h1>User Messages</h1>
        <select name="userslist" id="userselect">
            <option value="">Choose One</option>
            <option value="Steve">Steve</option>
            <option value="Jim">Jim</option>
            <option value="Sally">Sally</option>
            <option value="all">All</option>
        </select>   
        <div id="output"></div>               
    </div>
    </div>
</body>

</html>