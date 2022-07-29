<?php get_header(); ?>


<div class="container"> 
<header class="header">
 <h1 class="entry-title" itemprop="name">Tagged : <?php single_term_title(); ?></h1>
<div class="archive-meta" itemprop="description"><?php if ( '' != get_the_archive_description() ) { echo esc_html( get_the_archive_description() ); } ?></div>
</header>
<br>
<br>
<br>
</div>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<?php get_template_part( 'entry' ); ?>
<?php endwhile; endif; ?>
<?php get_template_part( 'nav', 'below' ); ?>
<?php get_footer(); ?>