<div class="entry-content" itemprop="mainEntityOfPage">


<style>

    p {
        opacity:0.8;
        margin-bottom:10px;
    }

</style>


<div class="container">
    <div class="singles">


    <div style="padding:20px;width:100%;">
    

    <?php if ( is_singular() ) { echo '<h1 class="entry-title" itemprop="headline">'; } else { echo '<h2 class="entry-title">'; } ?>
<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" rel="bookmark"><?php the_title(); ?></a>
<?php if ( is_singular() ) { echo '</h1>'; } else { echo '</h2>'; } ?>
<?php edit_post_link(); ?>
<br>
<br>
    <center>
    <?php if ( has_post_thumbnail() ) : ?>
<a href="<?php $src = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full', false ); echo esc_url( $src[0] ); ?>" title="<?php the_title_attribute(); ?>"><?php the_post_thumbnail( 'full', array( 'itemprop' => 'image' ) ); ?></a>
<?php endif; ?>
    </center>

    <br>
    <br>
    <br>

<meta itemprop="description" content="<?php echo esc_html( wp_strip_all_tags( get_the_excerpt(), true ) ); ?>" />
<?php the_content(); ?>
<span class="cat-links"><?php esc_html_e( 'Categories: ', 'blankslate' ); ?><?php the_category( ', ' ); ?></span>
<span class="tag-links"><?php the_tags(); ?></span>

<?php if ( comments_open() ) { echo '<span class="meta-sep">|</span> <span class="comments-link"><a href="' . esc_url( get_comments_link() ) . '">' . sprintf( esc_html__( 'Comments', 'blankslate' ) ) . '</a></span>'; } ?>
    </div>

<div>

<?php if ( comments_open() && !post_password_required() ) { comments_template( '', true ); } ?>
</div>

    </div>

</div>



<div class="entry-links"><?php wp_link_pages(); ?></div>
</div>