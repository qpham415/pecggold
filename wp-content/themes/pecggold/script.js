$(document).ready(function(){

  //Adjust height and width of head logo wrapper
  function headLogoDims() {
    var headerHeight = $('#header').height();
    var logo1Height = $('#headlogo1').height();
    var logo2Height = headerHeight - logo1Height;
    $('.headlogo2wrap').css('height', logo2Height+'px');
    var logo2Width = $('#headlogo2').width();
    $('.headlogo2wrap').css('width', logo2Width+'px');
  }
  headLogoDims();

  // Menu design
  $('#menu').hide();
  var menuWidth = -44;
  var logoSlide = 44;

  $(".lines2").css('top','7px');
  $('.lines3').css('top', '14px');
  var mbheight = $('#menubut').height();
  $('.lines-button').css('height',mbheight);
  $('.buttonwrapper').css('height',mbheight);

  // Toggle menu when button is clicked
  $('#headlogo2').click(function(){

    //Show the menu and menu slider
    setTimeout(function(){
      $('#menu').toggle();
      $('.menuSlider').css('width',$('.currLink').width()+'px');
      var iPos = $('.currLink').position();
      $('.menuSlider').css('left',iPos.left+'px');
    }, 250);

    //The menu and head logo back and forth
    $('#menu').animate({
      bottom: "+=" + menuWidth + "px"
    }, 500);
    menuWidth = -menuWidth;
    $('#headlogo2').animate({
      bottom:"+=" + logoSlide + "px"
     }, 500);
    logoSlide = -logoSlide;

    // Three line navigation logo animation
    var turnDeg = 45;
    var retDeg = 0;
    var iteration=$(this).data('iteration')||1
    switch ( iteration) {
      case 1:
    	$(".lines1").animate({
      	  top: "7px"
    	}, 300);
    	$(".lines3").animate({
      	  top: "7px"
    	}, 300);
        setTimeout(function(){
          $(".lines2").toggle();
          $(".lines1").css({
            '-ms-transform' : 'rotate(' + turnDeg + 'deg)',
            '-webkit-transform' : 'rotate(' + turnDeg + 'deg)',
  	        'transform' : 'rotate(' + turnDeg + 'deg)',
  	        '-moz-transform' : 'rotate(' + turnDeg + 'deg)',
  	        '-o-transform' : 'rotate(' + turnDeg + 'deg)'
  	      });
  	      $(".lines3").css({
            '-ms-transform' : 'rotate(' + -turnDeg + 'deg)',
            '-webkit-transform' : 'rotate(' + -turnDeg + 'deg)',
  	        'transform' : 'rotate(' + -turnDeg + 'deg)',
  	        '-moz-transform' : 'rotate(' + -turnDeg + 'deg)',
  	        '-o-transform' : 'rotate(' + -turnDeg + 'deg)'
  	      });
  	    }, 800);
	      break;

	      case 2:
          $(".lines1").css({
            '-ms-transform' : 'rotate(' + retDeg + 'deg)',
            '-webkit-transform' : 'rotate(' + retDeg + 'deg)',
  	        'transform' : 'rotate(' + retDeg + 'deg)',
  	        '-moz-transform' : 'rotate(' + retDeg + 'deg)',
  	        '-o-transform' : 'rotate(' + retDeg + 'deg)'
  	      });
  	      $(".lines3").css({
            '-ms-transform' : 'rotate(' + retDeg + 'deg)',
            '-webkit-transform' : 'rotate(' + retDeg + 'deg)',
  	        'transform' : 'rotate(' + retDeg + 'deg)',
  	        '-moz-transform' : 'rotate(' + retDeg + 'deg)',
  	        '-o-transform' : 'rotate(' + retDeg + 'deg)'
  	      });
          setTimeout(function(){
            $(".lines2").toggle();
    	      $(".lines1").animate({
        	    top: ""
      	    }, 500);
      	    $(".lines3").animate({
        	    top: "14px"
      	    }, 500);
  	      }, 200);
	      break;
	    }
	   iteration++;
	   if (iteration>2) iteration=1
	   $(this).data('iteration',iteration)
  });

  //Update disclaimer with date
  function printDisclaimer(){
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("disclaimer").innerHTML = "Professional Engineers in California Government " + year + " - All Rights Reserved.";
  }
  printDisclaimer();

  //Navigation bar animation
  function addSlider() {
    $('.menu-main').prepend('<div class="menuSlider"></div>');

    var mainMenu = document.getElementById('menu-main');

    var menuItem = mainMenu.getElementsByClassName('current-menu-item');
    var firstItem = mainMenu.getElementsByClassName('menu-item');

    var currentItem = menuItem[0];
    var defaultItem = firstItem[0];

    if (currentItem == null) {
      $(defaultItem).addClass('currLink');
    } else {
      $(currentItem).addClass('currLink');
    }

    var initialPos = $('.currLink').position();
    var initialWidth = $('.currLink').width();

    $('.menuSlider').css('width', initialWidth);
    $('.menuSlider').css('left', initialPos.left);
  }
  addSlider();

  $('.menu-item').hover(
  function(){
    $(this).addClass('activeLink');
    var mWidth = $('.activeLink').width();
    var mPos = $('.activeLink').position();
    $('.menuSlider').stop().animate({
      width: mWidth,
      left: mPos.left
    },600);
  },
  function(){
    $(this).removeClass('activeLink');
    var currentWidth = $('.currLink').width();
    var currentPos = $('.currLink').position();
    $('.menuSlider').stop().animate({
      width: currentWidth,
      left: currentPos.left
    },800);
  })

	  // Hide all the articles except for the first one
	  function hideArticles(){
      $('.entry-content').hide();
	    $('.arrowwrap').hide();
    }
    hideArticles();

    // Active articles and rotate arrows upon click
	  function activeArticle(cArticle){
	    $(cArticle).find('.entry-content').toggle(500);
	    var iteration=$(cArticle).data('iteration')||1
	    switch ( iteration) {
	      case 1:
	      $(cArticle).find('.arrow').css({
	        '-ms-transform' : 'rotate(180deg)',
	        '-webkit-transform' : 'rotate(180deg)',
	        'transform' : 'rotate(180deg)',
	        '-moz-transform' : 'rotate(180deg)',
	        '-o-transform' : 'rotate(180deg)'
	      });
		    break;

	      case 2:
	      $(cArticle).find('.arrow').css({
	        '-ms-transform' : 'rotate(0deg)',
	        '-webkit-transform' : 'rotate(0deg)',
	        'transform' : 'rotate(0deg)',
	        '-moz-transform' : 'rotate(0deg)',
	        '-o-transform' : 'rotate(0deg)'
	      });
		    break;
		  }
		  iteration++;
		  if (iteration>2) iteration=1
		  $(cArticle).data('iteration',iteration)
	  }

	  //Arrow animation and borders on hover
	  $('.singleArticle').hover(function(){
	    $(this).addClass('articleborders');
	    $(this).find('.arrowwrap').show();
	  },
	  function(){
	    $(this).removeClass('articleborders');
	    $(this).find('.arrowwrap').hide();
	  })

    //Active the first article
    var blog = document.getElementById('blogContent');
    var blogItem = blog.getElementsByClassName('post');
    var topItem = blogItem[0];
    var secondItem = blogItem[1];
    $(topItem).addClass('fArticle');
	  activeArticle('.fArticle');
    $(secondItem).addClass('secondArticle');
    activeArticle('.secondArticle');

    //Activate article upon click
	  $('.post').click(function(){
	  activeArticle(this);
	  });

});

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll > 362) {
    $('#menu-static').css('top','0px');
  } else {
    $('#menu-static').css('top','-45px')
  }
});
