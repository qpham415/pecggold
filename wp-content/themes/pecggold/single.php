<?php get_header(); ?>
<div id="pageContainer" role="main">
  <div class="singlePost">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <?php get_template_part( 'entry' ); ?>
    <?php endwhile; endif; ?>
  </div>
</div>
<?php get_footer(); ?>
