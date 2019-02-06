<!DOCTYPE html>
<html>

<head>
    <title>CS 313 - Stettsen Olsen - Shopping Cart</title>
    <link rel="stylesheet" href="style.css">
    <script src="js.js"></script>
    <?php
        $q = $_REQUEST["q"];
        $s = $_REQUEST["s"];
        echo $s;
        echo $q;
        if($s == 'true'){
            session_start();
            echo "started";
        }
        $_SESSION["cart"] = $q;
        echo $_SESSION["cart"];
    ?>
</head>

<body onload="main('main')">
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
    <div id="cartbar">
        <form action="review.php" onsubmit="onSubmit()" method="post">
            <!--<button id="mycartbtn" name="mycartbtn">
                <h5 id="mycarttxt">My Cart</h5><img class="addtocartimg" src="cart.png" alt="">
            </button>--><!--
                <input type="hidden" name="itemsJSON" id="JSON" value="<?php echo $_SESSION['cart'] ?>">-->
            <input type="image" id="mycartbtn" src="mycart.png"/>
        </form>
    </div>
    <div id="breadCrumbs">
        <a class="breadcrumb" href="./index.html">About Me</a>
    </div>
    <div id="content">
        <div id="textwrap">
            <table id="storeitems"></table>
        </div>
</body>

</html>