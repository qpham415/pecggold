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

  // Toggle menu when button is clicked
  $('#menu').hide();
  var menuWidth = -44;
  var logoSlide = 44;

  $(".lines2").css('top','7px');
  $('.lines3').css('top', '14px');
  var mbheight = $('#menubut').height();
  $('.lines-button').css('height',mbheight);
  $('.buttonwrapper').css('height',mbheight);

  $('#headlogo2').click(function(){

    setTimeout(function(){
      $('#menu').toggle();
      $('.menuSlider').css('height',$('.currLink').height()+'px');
      $('.menuSlider').css('width',$('.currLink').width()+'px');
      var iPos = $('.currLink').position();
      $('.menuSlider').css('left',iPos.left+'px');
    }, 250);
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
  var date = new Date();
  var year = date.getFullYear();
  function printDisclaimer(){
    document.getElementById("disclaimer").innerHTML = "Professional Engineers in California Government " + year + " - All Rights Reserved.";
  }
  printDisclaimer();

  //Navigation bar animation
  function addSlider() {
    $('#menu').prepend('<div class="menuSlider"></div>');
  }
  addSlider();


  $('.menuitem').hover(
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

  $('.btmlink').hover(
    function(){
      $('.actLink').removeClass('actLink');
      $(this).addClass('actLink');
    },
    function(){
      $('.actLink').removeClass('actLink');
      $('.currentLink').addClass('actLink');
    }
  );

  //Load News Page
/*  $('#news').click(function(){
  $.get('newsload.php', function(result){
    $result = $(result);
    $('.pagecontent').load('newsload.php');
    $result.find('script').appendTo('.pagecontent');
  }, 'html');
  $('.currLink').removeClass('currLink');
  $(this).addClass('currLink');
  })
  function loadArticles(str) {
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("pContent").innerHTML=xmlhttp.responseText;

	  // Hide all the articles except for the first one, activate/deactivate upon click
	  $('.artcontent').hide();
	  $('.arrowwrap').hide();
	  function activeArticle(cArticle){
	    $(cArticle).find('.artcontent').toggle(500);
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
	  $('.article').hover(function(){
	    $(this).addClass('articleborders');
	    $(this).find('.arrowwrap').show();
	  },
	  function(){
	    $(this).removeClass('articleborders');
	    $(this).find('.arrowwrap').hide();
	  })
	  activeArticle('.fArticle');
	  $('.article').click(function(){
	  activeArticle(this);
	  });

  	$('.categoryitems').click(function(){
  	  var categoryValue = $(this).text();
  	  loadArticles(categoryValue);
  	})



    }
  }

  xmlhttp.open("GET","newsload.php?cat=" +str,true);
  xmlhttp.send();
  }
  $('#news').click(function(){
    loadArticles("ALL");
  }) */

});

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll > 362) {
    alert('Test');
  }
});
