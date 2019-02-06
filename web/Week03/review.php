<!DOCTYPE html>
<html>

<head>
    <title>CS 313 - Stettsen Olsen - Shopping Cart - Review</title>
    <link rel="stylesheet" href="style.css">
    <script src="js.js"></script>
</head>

<body onload="main('review')">
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
    <div id="backtoshopping"><a href="./index.php">Continue Shopping</a></div>
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
            <h1>Cart</h1>
            <table id="storeitems"></table>
            <div id="orderwrap">
            <?php
                $ITEMS = json_decode($_SESSION['cart']);
                $total = 0.0;
                foreach($ITEMS as $item) {
                    $total = $item->price;
                  }
            ?>
            <button id="plcobtn">Place Order</button>
            </div>
        </div>
        <div id="login">
        <form action="thankyou.php" onsubmit="onSubmit()" method="post">
        <h4>Almost there! Tell us where to ship it!</h4>
        <div id="loginsub">
        <input type="hidden" name="itemsJSON" id="JSON">
        <input id="street" name="street" type="text" placeholder="Street"><br>
        <input class="smallfield" id="city" name="city" type="text" placeholder="City">
        <input class="smallfield" id="zipcode" name="zipcode" type="text" placeholder="Zip Code">
        <input class="smallfield" id="state" name="state" type="text" placeholder="UT"><br>
        <button id="subbtn">Submit</button>
        </div>
        </form>
    </div>
</body>

</html>