<?php get_header(); ?>
<div id="pageContainer">
  <div id="blogWrap">
    <div id="blogContent">
		<?php /* Top post navigation */ ?>
		<?php global $wp_query; $total_pages = $wp_query->max_num_pages; if ( $total_pages > 1 ) { ?>

		<?php } ?>

		<?php /* The Loop — with comments! */ ?>
		<?php while ( have_posts() ) : the_post() ?>

		<?php /* Create a div with a unique ID thanks to the_ID() and semantic classes with post_class() */ ?>
		               <div class="singleArticle">
                    <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<?php /* an h2 title */ ?>
		                    <div class="entry-title"><a href="<?php the_permalink(); ?>" title="<?php printf( __('Permalink to %s', 'hbd-theme'), the_title_attribute('echo=0') ); ?>" rel="bookmark"><?php the_title(); ?></a></div>
                        <div class="arrowwrap">
                          <div class="arrow"></div>
                        </div>
                        <div class="clear"></div>

		<?php /* The entry content */ ?>
		                    <div class="entry-content">
		<?php the_content( __( 'Continue reading <span class="meta-nav">&raquo;</span>', 'hbd-theme' )  ); ?>
		<?php wp_link_pages('before=<div class="page-link">' . __( 'Pages:', 'hbd-theme' ) . '&after=</div>') ?>
		                    </div><!-- .entry-content -->

		<?php /* Microformatted category and tag links along with a comments link */ ?>
		                    <div class="entry-utility">
		                        <span class="cat-links"><span class="entry-utility-prep entry-utility-prep-cat-links"><?php _e( 'Posted in ', 'hbd-theme' ); ?></span><?php echo get_the_category_list(', '); ?></span>
		                        <span class="meta-sep"> | </span>
		                        <?php the_tags( '<span class="tag-links"><span class="entry-utility-prep entry-utility-prep-tag-links">' . __('Tagged ', 'hbd-theme' ) . '</span>', ", ", "</span>\n\t\t\t\t\t\t<span class=\"meta-sep\">|</span>\n" ) ?>
		                        <span class="postDate"><?php $my_date = the_date('', 'Posted on ', '', FALSE); echo $my_date; ?></span>
		                        <?php edit_post_link( __( 'Edit', 'hbd-theme' ), "<span class=\"meta-sep\">|</span>\n\t\t\t\t\t\t<span class=\"edit-link\">", "</span>\n\t\t\t\t\t\n" ) ?>
		                    </div><!-- #entry-utility -->
		                </div><!-- #post-<?php the_ID(); ?> -->
                  </div>
		<?php /* Close up the post div and then end the loop with endwhile */ ?>

		<?php endwhile; ?>

		<?php /* Bottom post navigation */ ?>
		<?php global $wp_query; $total_pages = $wp_query->max_num_pages; if ( $total_pages > 1 ) { ?>
		                <div id="nav-below" class="navigation">
		                    <?php next_posts_link(__( '<span class="meta-nav">&laquo;</span> Older posts', 'hbd-theme' )) ?> <span style="color: #bbb;">&#8226;</span> <?php previous_posts_link(__( 'Newer posts <span class="meta-nav">&raquo;</span>', 'hbd-theme' )) ?>
		                </div><!-- #nav-below -->
		<?php } ?>
    </div><!-- #content -->
    <div class="blogSidebar">
	    <?php get_sidebar(); ?>
    </div>
  </div>
</div><!-- #container -->

<div class="blogFootWrap">
  <div class="blogFooter">
    <?php the_block( 'Blog footer') ?>
  </div>
</div>

<?php get_footer(); ?>
