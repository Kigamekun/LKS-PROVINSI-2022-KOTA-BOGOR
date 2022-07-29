<!DOCTYPE html>
<html <?php language_attributes(); ?> <?php blankslate_schema_type(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<?php wp_head(); ?>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
<style>


@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
body {
    font-family: 'Poppins', sans-serif;
}

    .navbars {
        padding:20px;
        background:#1E1F29;
        display:flex;
        justify-content:space-around;
    }

    .navbars a {
        color:white;
        text-decoration:none;
    }

    .singles {
        display:flex;
    }

   #block-10 div div ul {
    text-align:center;
   }
    #block-10 {
      margin-top :10px;
    }


    #footer {
        background:#1E1F29;
        padding:20px;
        height:350px;
        list-style:none;
        color:white;
    }

    .cat-item {
        margin-top:20px;
    }

    .wp-block-latest-posts__list , .wp-block-latest-posts li{
        margin-bottom:20px;
    }


    #block-8 {
        margin-top:20px;
    }

    .entry-title {
        font-weight:bold;
        font-size:25px;
        margin-top:0px;
        color:black;
    }

    .wrapper-summary {
        display:flex;
    }

    .entry-title a {
        color:black;
    }

    .singles img {
        border-radius:5px;
    }

    #menu-menu-1 li {
        display:inline-block;
        margin-right:10px;
    }
    a{
        text-decoration:none;
    }

    .navbars div {
        display:flex;
        align-items:center;
    }

    .search-form {
        display:flex;
        align-items:center;
    }

    .container {
        width:90%;
        margin:auto;
    }



    #header {
        transition:.7s;
        margin-bottom :50px;
    }

    .singles img {
        width:500px;
        height:400px;
        border-radius:5px;
    }
    

    .content {
        display:flex; 
    }
    .content img {
        width:300px;
        height:200px;
        border-radius:5px;
    }

    input[type=text],input[type=search], select, textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        resize: vertical;
    }

    label {
        padding: 12px 12px 12px 0;
        display: inline-block;
    }

    input[type=submit] {
        background-color: #04AA6D;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float: right;
    }
    
    
    .amazingslider-img-box-1 {
        border-radius:5px;
    }

    input[type=submit]:hover {
        background-color: #45a049;
    }


    .logged-out{
       
        background-color: #04AA6D;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float: right;
    }

    .wp-block-loginout
    {
        background-color: #dc3545;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float: right;
    }




    #block-13 {
        display:flex;
        margin-left:20px;
        list-style:none;
        
    }


    #block-13 div {
        align-items:center !important;
        margin-bottom:0  !important;
    }


    .sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99999;
}

@media screen and (max-width: 991px){
    .singles {
        flex-wrap:wrap;
    }

    .menu-menu-1-container {
        display:none !important;

    }



    #header {
        margin-bottom :0px;
    }


    .content {
        flex-wrap:wrap;
    }

    .singles img {
        width:100%;
        height:200px;
        border-radius:5px;
    }

    #side-summary {
        display:none !important;
    }

    #content-summary {
        display:flex;   
        justify-content: center;
    }

    .content div a img {
        width:100%;
    }

    #footer {
        height:500px;
    }

    .induk {
        margin:auto;
    }
}
</style>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="wrapper" class="hfeed">
<header id="header" role="banner">

    <div class="navbars">
 
    <div>

        <div style="display:flex;">
        <h3 style="   color:white;
        font-weight:bold;margin-right:50px;font-size:30px;"> Kiga News</h3>
    <nav id="menu" role="navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
<?php wp_nav_menu( array( 'theme_location' => 'main-menu', 'link_before' => '<span itemprop="name">', 'link_after' => '</span>' ) ); ?>

</nav>
        </div>

    </div>


    <div>
    <div id="search"><?php get_search_form(); ?></div>
    <?php dynamic_sidebar( 'login-widget-area' ) ?>
    </div>

    </div>

</header>


<script>


// window.onscroll = function() {myFunction()};

// var header = document.getElementById("header");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
   
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }Wp-block-loginout



var awal = document.querySelector('.wp-block-loginout');
var akhir = awal.querySelector('a');

akhir.innerHTML = '<ion-icon name="log-out"></ion-icon>';



var awal = document.querySelector('.logged-out');
var akhir = awal.querySelector('a');

akhir.innerHTML = '<ion-icon name="log-in"></ion-icon>';


</script>


<?php if(!is_singular()){ dynamic_sidebar( 'slider-widget-area' );} ?>





<div class="container"> 

<?php if(!is_singular()){ ?>


    <h1 style="font-size:35px;"><b>News List</b></h1>

<?php }?>
<br>
<br>
</div>
<div id="container">
<main id="content" role="main">