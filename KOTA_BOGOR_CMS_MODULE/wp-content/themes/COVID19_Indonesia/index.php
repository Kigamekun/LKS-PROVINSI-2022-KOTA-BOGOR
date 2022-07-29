<?php
get_header();
?>


<div class="wrapper-summary">

<div>
<?php 
if ( have_posts() ) : while ( have_posts() ) : the_post();
get_template_part( 'entry' );
comments_template();
endwhile; endif;
?>
</div>

<div id="side-summary" style="margin-right:50px; 
        list-style:none;">
<?php dynamic_sidebar( 'primary-widget-area' );  ?>
</div>
</div>

<?php 
get_template_part( 'nav', 'below' );
get_footer();