<div class="entry-summary">


    <div class="container">
       
        <div class="content">
    <div class="induk">

    <?php if ((has_post_thumbnail())) : ?>
<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_post_thumbnail(); ?></a>
<?php endif; ?>

<br>
<br>
<br>
    </div>

        <div style="padding:0 20px 20px 20px;">

        <?php if (is_singular()) {
            echo '<h1 class="entry-title" itemprop="headline">';
        } else {
            echo '<h2 class="entry-title">';
        } ?>
<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" rel="bookmark"><?php the_title(); ?></a>
<?php if (is_singular()) {
    echo '</h1>';
} else {
    echo '</h2>';
} ?>

<?php edit_post_link(); ?>
<br>
<br>
<?php if (!is_search()) {
    get_template_part('entry', 'meta');
} ?>
<br>
<div style="opacity:0.6"  itemprop="description"><?php the_excerpt(); ?></div>
      

    </div>


    

<?php if (is_search()) { ?>
<div class="entry-links"><?php wp_link_pages(); ?></div>
<?php } ?>
</div>