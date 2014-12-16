<?php get_header(); ?>
<div id="pageContainer" role="main">
  <div id="blogWrap">
    <div id="blogContent" class="searchContent">
      <?php if ( have_posts() ) : ?>
      <div class="sortedTitle entry-title"><?php printf( __( 'Search Results For: %s', 'blankslate' ), get_search_query() ); ?></div>
      <div class="clear"></div>
      <?php while ( have_posts() ) : the_post(); ?>
      <?php get_template_part( 'entry' ); ?>
      <?php endwhile; ?>
      <?php get_template_part( 'nav', 'below' ); ?>
    </div>
    <div class="blogSidebar">
      <?php get_sidebar(); ?>
    </div>
    <?php else : ?>
      <div class="sortedTitle entry-title"><?php printf( __( 'Search Results For: %s', 'blankslate' ), get_search_query() ); ?></div>
      <div class="clear"></div>
      <div class="centerTitle entry-title"><?php _e( 'Sorry, nothing matched your search. Please try again.', 'blankslate' ); ?></div>
    </div>
    <div class="blogSidebar">
      <?php get_sidebar(); ?>
    </div>
    <?php endif; ?>
  </div>
</div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
