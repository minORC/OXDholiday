$(document).ready(function($) {

  /* Day/Night Toggle */
  $("#daynightToggleSwitch").on("click", function () {
    if ( $("body").hasClass("night") ) {
      $("body").removeClass("night");
    } else {
      $("body").addClass("night");
    }
    //TODO: Reset night animations on toggle to day and back to night
  });

  /* Parallax */
  var rellax = new Rellax('.rellax', {
    center:true
  });


  /* Animation triggers */
  //house1
  $('.level1').waypoint(function(direction) {
    if ( $("body").hasClass("night") && direction === 'down') {
      $('.level1 .window img', ).addClass('animated flash');
      $('.level1 .light').addClass('animated flash');
    }
  }, {
		offset: '10%'
	});

  //house2
  $('.night .level2').waypoint(function(direction) {
    if ( $("body").hasClass("night") && direction === 'down') {
      $('.level2 .window img').addClass('animated flash');
      $('.level2 .light').addClass('animated flash');
    }
  }, {
		offset: '20%'
	});

  //house3
  $('.night .level3').waypoint(function(direction) {
    if ( $("body").hasClass("night") && direction === 'down') {
      $('.level3 .window img').addClass('animated flash');
      $('.level3 .light').addClass('animated flash');
    }
  }, {
		offset: '20%'
	});

});
