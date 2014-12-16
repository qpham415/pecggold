<?php get_header(); ?>
<div id="pageContainer" role="main">
  <div id="blogWrap">
    <div id="blogContent">
      <div class="sortedTitle entry-title"><?php _e( 'Category Archives: ', 'blankslate' ); ?><?php single_cat_title(); ?></div>
      <div class="clear"></div>
      <?php if ( '' != category_description() ) echo apply_filters( 'archive_meta', '<div class="archive-meta">' . category_description() . '</div>' ); ?>
      <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <?php get_template_part( 'entry' ); ?>
      <?php endwhile; endif; ?>
      <?php get_template_part( 'nav', 'below' ); ?>
    </div>
    <div class="blogSidebar">
      <?php get_sidebar(); ?>
    </div>
  </div>
</div>

<?php get_footer(); ?>
