<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
  <meta name="viewport" content="width=device-width" />
  <title><?php wp_title( ' | ', true, 'right' ); ?></title>
  <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" />
  <?php wp_head(); ?>

  <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
  <meta name="description" content="Production" />
  <link rel="stylesheet" href="http://yui.yahooapis.com/3.5.0/build/cssreset/cssreset-min.css" type="text/css" media="screen" />
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script type='text/javascript' src='/wp-content/themes/pecggold/script.js'></script>
  <title>Production</title>
</head>
<body <?php body_class(); ?>>
  <div id="menu-static">
    <div id="pecglogo"><?php echo $site_title = get_bloginfo( 'name' ); ?></div>
    <div id="staticlinks">
      <?php #wp_page_menu( 'sort_column=menu_order' ); ?>
      <?php wp_nav_menu( array( 'sort_column' => 'menu_order', 'container' => false ) ); ?>
    </div>
  </div>
  <div class="clear"></div>
    <div id="header" style="background: url('<?php header_image(); ?>') no-repeat">
        <div id="headerimgwrap">
          <div id="headlogo1"></div>
          <div class="clear"></div>
          <div class="headlogo2wrap">
            <div id="headlogo2">
              <div id="menubar">
                  <div class="buttonwrapper">
                    <div class="centered">
                      <div class="lines1 lines"></div>
                      <div class="lines2 lines"></div>
                      <div class="lines3 lines"></div>
                    </div>
                  </div>
                <div id='menubut'>MENU</div>
              </div>
            </div>
          </div>
          <div id="menu">
            <?php #wp_page_menu( 'sort_column=menu_order' ); ?>
            <?php wp_nav_menu( array( 'sort_column' => 'menu_order', 'container' => false, 'menu_class' => 'menu-main', 'menu_id' => 'menu-main' ) ); ?>
          </div>
        </div>
    </div>
<div id="container">
