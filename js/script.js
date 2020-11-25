$(document).ready(function($) {

  /* Day/Night Toggle */
  $("#daynightToggleSwitch").on("click", function () {

    if ( $("body").hasClass("night") ) {
      $("body").removeClass("night");
      $(".night-scene").removeClass("animated flash");
      $(".light").removeClass("animated flash");
    } else {
      $("body").addClass("night");
    }

    $("#celestial").addClass("slideOutAndIn");
  });

  /* Parallax */
  var rellax;
  rellax = new Rellax('.rellax', {
  });

  /* Animation triggers */
  function initWaypoints() {
    $(".level1 .house").waypoint(function(direction) {
      if ( $("body").hasClass("night") && direction === "down") {
        $(".level1 .night-scene").addClass("animated flash");
        $(".level1 .light").addClass("animated flash");
      }
    }, {
  		offset: '10%'
    });

    $(".level2 .house").waypoint(function(direction) {
      if ( $("body").hasClass("night") && direction === "down") {
        $(".level2 .night-scene").addClass("animated flash");
        $(".level2 .light").addClass("animated flash");
      }
    }, {
  		offset: '25%'
    });

    $(".level3 .house").waypoint(function(direction) {
      if ( $("body").hasClass("night") && direction === "down") {
        $(".level3 .night-scene").addClass("animated flash");
        $(".level3 .light").addClass("animated flash");
      }
    }, {
  		offset: '50%'
    });

    $(".level4 .house").waypoint(function(direction) {
      if ( $("body").hasClass("night") && direction === "down") {
        $(".level4 .night-scene").addClass("animated flash");
        $(".level4 .light").addClass("animated flash");
      }
    }, {
  		offset: '35%'
    });
  }

  /* Destroy rellax for mobile and tablet */
  var mediaQuery = window.matchMedia('(max-width: 1279px)')

  function handleResponsive(e) {
    if (e.matches) {
      rellax.destroy();
      Waypoint.destroyAll();
    }
    else {
      initWaypoints();
      rellax.refresh();
    }
  }


  mediaQuery.addEventListener('change', handleResponsive);
  handleResponsive(mediaQuery);
});
