<?php get_header(); ?>
<?php if ( have_posts() ) : ?>

    <div class="container">

    <header class="header">
<h1 class="entry-title" itemprop="name"><?php printf( esc_html__( 'Search Results for: %s', 'blankslate' ), get_search_query() ); ?></h1>
</header>
<br>
<br>
<br>
    </div>


<?php while ( have_posts() ) : the_post(); ?>
<?php get_template_part( 'entry' ); ?>
<?php endwhile; ?>
<?php get_template_part( 'nav', 'below' ); ?>
<?php else : ?>
<article id="post-0" class="post no-results not-found">
<header class="header">


    <style>
        #block-9 {
            display:none;
        }

        .container h1 {
            display:none;
        }
    </style>

</header>
<div class="entry-content" itemprop="mainContentOfPage">


<img style="width:100%;height:500px;" src="https://colorlib.com/cdn-cgi/image/width=1920,height=933,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/sites/2/404-error-template-3.png" alt="">

</div>
</article>
<?php endif; ?>
<?php get_footer(); ?>