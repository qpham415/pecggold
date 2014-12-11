<?php get_header(); ?>
<section id="postWrapper" role="main">
  <div class="singlePost">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <?php get_template_part( 'entry' ); ?>
    <?php endwhile; endif; ?>
  </div>
</section>
<?php get_footer(); ?>
