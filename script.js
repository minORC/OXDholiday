$(document).ready(function($) {

  /* Day/Night Toggle */

  $("#daynightToggleSwitch").on("click", function () {
    $("body").toggleClass("night");
  });

  /* Waypoints */
  // new Waypoint({
  //   element: document.getElementById("house1"),
  //   handler: function(direction) {
  //     alert('reached house1');
  //   }
  // });

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
