<?php
/*
Template Name: Officers Template
*/
get_header();
?>
<div id="pageContainer" style="background: url('<?php get_site_url(); ?>/wp-content/themes/pecggold/images/electricpole.jpg') no-repeat; background-size:cover;">
  <?php the_post(); ?>

    <div class="pageWrapper" id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
      <div class="officersContent">
        <div class="officerWrap">
          <?php the_content(); ?>
        </div>
        <div class="officerWrap">
          <?php the_block('director'); ?>
        </div>
        <div class="clear"></div>
        <div class="officerWrap">
          <?php the_block('vp rankandfile'); ?>
        </div>
        <div class="officerWrap">
          <?php the_block('vp supervisory'); ?>
        </div>
        <div class="clear"></div>
        <div class="officerWrap">
          <?php the_block('secretary'); ?>
        </div>
        <div class="officerWrap">
          <?php the_block('treasurer'); ?>
        </div>
        <div class="clear"></div>
      </div>
    </div><!-- #post-<?php the_ID(); ?> -->

  <?php if ( get_post_custom_values('comments') ) comments_template() // Add a custom field with Name and Value of "comments" to enable comments on this page ?>
</div><!-- wrapper -->

<?php get_footer(); ?>
