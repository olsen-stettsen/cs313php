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
            <h1>Your Order Has Been Placed</h1>
            <?php
                $ITEMS = json_decode($_POST['itemsJSON']);
                foreach($ITEMS as $item) {
                    echo "<h4>$item->name: $$item->price</h4>";
                  }
            ?>
            <h2>Address</h2>
            <h4><?php echo $_POST['street'] ?></h4>
            <p><?php echo $_POST['city'] ?>, <?php echo $_POST['state'] ?> <?php echo $_POST['zipcode'] ?></p>
            
        </div>
        </form>
    </div>
</body>

</html>