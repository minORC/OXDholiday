$(document).ready(function($) {

  /* Day/Night Toggle */
  $("#daynightToggleSwitch").on("click", function () {
    if ( $("body").hasClass("night") ) {
      $("body").removeClass("night");
      //clearDrawing();
      //draw("pink", "salmon", "beige");
    } else {
      $("body").addClass("night");
      //clearDrawing();
      //draw(house_blue, house_dark_blue, house_light_grey);
    }
  });

  /* Parallax */
  var rellax = new Rellax('.rellax', {
    center:true
  });


  /* Animation triggers */
  //house1
  $('.level1').waypoint(function(direction) {
    if ( $("body").hasClass("night") && direction === 'down') {
      $('.level1 .window img').addClass('animated flash');
    }
  }, {
		offset: '20%'
	});

  //house2
  $('.night .level2').waypoint(function(direction) {
    if ( $("body").hasClass("night") && direction === 'down') {
      $('.level2 .window img').addClass('animated flash');
    }
  }, {
		offset: '20%'
	});

  //house3
  $('.night .level3').waypoint(function(direction) {
    if ( $("body").hasClass("night") && direction === 'down') {
      $('.level3 .window img').addClass('animated flash');
    }
  }, {
		offset: '40%'
	});

});
