<?php get_header(); ?>
<div id="pageContainer" role="main">
  <div id="blogWrap">
    <div id="blogContent">
      <div class="sortedTitle entry-title"><?php
      if ( is_day() ) { printf( __( 'Daily Archives: %s', 'blankslate' ), get_the_time( get_option( 'date_format' ) ) ); }
      elseif ( is_month() ) { printf( __( 'Monthly Archives: %s', 'blankslate' ), get_the_time( 'F Y' ) ); }
      elseif ( is_year() ) { printf( __( 'Yearly Archives: %s', 'blankslate' ), get_the_time( 'Y' ) ); }
      else { _e( 'Archives', 'blankslate' ); }
      ?></div>
      <div class="clear"></div>
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
<?php get_sidebar(); ?>
<?php get_footer(); ?>
