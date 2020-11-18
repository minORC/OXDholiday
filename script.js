$(document).ready(function($) {

  /* Day/Night Toggle */

  $("#daynightToggleSwitch").on("click", function () {
    if ( $("body").hasClass("night") ) {
      $("body").removeClass("night");
      clearDrawing();
      draw("red", "green", "yellow");
    } else {
      $("body").addClass("night");
      clearDrawing();
      draw(house_blue, house_dark_blue, house_light_grey);
    }
  });

  //house1
  $('#house1').waypoint(function(direction) {
    if (direction === 'down') {
      $('.level1 .window').addClass('animated flash');
    }
  }, {
		offset: '20%'
	});

  //house2
  $('#house2').waypoint(function(direction) {
    if (direction === 'down') {
      $('.level2 .window').addClass('animated flash');
    }
  }, {
		offset: '20%'
	});

  //house2
  $('#house3').waypoint(function(direction) {
    if (direction === 'down') {
      $('.level3 .window').addClass('animated flash');
    }
  }, {
		offset: '40%'
	});

  //house2
  $('#house4').waypoint(function(direction) {
    if (direction === 'down') {
      $('.level4 .window').addClass('animated flash');
    }
  }, {
		offset: '45%'
	});

});
