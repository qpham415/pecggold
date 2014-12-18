<?php
/*
Template Name: Standard Template
*/
get_header();
?>
<div id="pageContainer">
  <?php the_post(); ?>

  <div class="pageWrapper" id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

    <div class="pageContent">
      <?php the_content(); ?>
    </div>

  </div><!-- #post-<?php the_ID(); ?> -->

  <?php if ( get_post_custom_values('comments') ) comments_template() // Add a custom field with Name and Value of "comments" to enable comments on this page ?>

</div><!-- wrapper -->

<?php get_footer(); ?>
