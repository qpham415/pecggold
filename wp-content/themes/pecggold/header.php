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
    <div id="pecglogo">PECG Golden Gate</div>
    <div id="staticlinks">
      <div class="menuitem currLink" id="home"><a class="menulinks">Home</a></div>
      <div class="menuitem" id="about"><a class="menulinks">About</a></div>
      <div class="menuitem" id="news" ><a class="menulinks">News</a></div>
      <div class="menuitem" id="officers"><a class="menulinks">Officers</a></div>
      <div class="menuitem" id="membership"><a class="menulinks">Membership</a></div>
      <div class="menuitem" id="contact"><a class="menulinks">Contact</a></div>
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
            <div class="menuitem currLink" id="home"><a class="menulinks">Home</a></div>
            <div class="menuitem" id="about"><a class="menulinks">About</a></div>
            <div class="menuitem" id="news" ><a class="menulinks">News</a></div>
            <div class="menuitem" id="officers"><a class="menulinks">Officers</a></div>
            <div class="menuitem" id="membership"><a class="menulinks">Membership</a></div>
            <div class="menuitem" id="contact"><a class="menulinks">Contact</a></div>
          </div>
        </div>
    </div>
<div id="container">
