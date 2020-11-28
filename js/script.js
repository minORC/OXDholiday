$(document).ready(function($) {

  /* Day/Night toggle */
  $("#daynightToggleSwitch").on("click", function() {

    if ( $("body").hasClass("night") ) {
      $("body").toggleClass("night day");
      $(".window img").removeClass("animated flash");
      $(".light").removeClass("animated flash");
      setWindowDayBG();
    } else {
      $("body").toggleClass("night day");
      $('.window').css("background-image","none");
    }

    setWindowScenes();
    $("#celestial").addClass("slideOutAndIn");
  });

  /* Day/Night window scenes */
  function setWindowScenes() {
    if ( $("body").hasClass("night") ) {
      $(".window1 img").attr("src","images/night1.jpg");
      $(".window2 img").attr("src","images/night2.jpg");
      $(".window3 img").attr("src","images/night3.jpg");
      $(".window4 img").attr("src","images/night4.jpg");
    } else {
      $(".window1 img").attr("src","images/day1.jpg");
      $(".window2 img").attr("src","images/day2.jpg");
      $(".window3 img").attr("src","images/day3.jpg");
      $(".window4 img").attr("src","images/day4.jpg");
    }
  }

  /* Day window bg for zoom */
  function setWindowDayBG() {
    $(".window1").css("background-image", "url('images/day1.jpg')");
    $(".window2").css("background-image", "url('images/day2.jpg')");
    $(".window3").css("background-image", "url('images/day3.jpg')");
    $(".window4").css("background-image", "url('images/day4.jpg')");
  }

  /* Parallax */
  var rellax;
  rellax = new Rellax('.rellax', {
  });

  /* Animation triggers */
  function initWaypoints() {
    $(".level1 .house").waypoint(function(direction) {
      if ( $("body").hasClass("night") && direction === "down") {
        $(".window1 img").addClass("animated flash");
        $(".level1 .light").addClass("animated flash");
        setTimeout(function(){
          $(".window1").addClass("zoom");
          $(".window1").css("background-image", "url('images/night1.jpg')");
        }, 1000);
      }
    }, {
  		offset: '10%'
    });

    $(".level2 .house").waypoint(function(direction) {
      if ( $("body").hasClass("night") && direction === "down") {
        $(".window2 img").addClass("animated flash");
        $(".level2 .light").addClass("animated flash");
        setTimeout(function(){
          $(".window2").css("background-image", "url('images/night2.jpg')");
        }, 1000);
      }
    }, {
  		offset: '25%'
    });

    $(".level3 .house").waypoint(function(direction) {
      if ( $("body").hasClass("night") && direction === "down") {
        $(".window3 img").addClass("animated flash");
        $(".level3 .light").addClass("animated flash");
        setTimeout(function(){
          $(".window3").css("background-image", "url('images/night3.jpg')");
        }, 1000);
      }
    }, {
  		offset: '50%'
    });

    $(".level4 .house").waypoint(function(direction) {
      if ( $("body").hasClass("night") && direction === "down") {
        $(".window4 img").addClass("animated flash");
        $(".level4 .light").addClass("animated flash");
        setTimeout(function(){
          $(".window4").css("background-image", "url('images/night4.jpg')");
        }, 1000);
      }
    }, {
  		offset: '35%'
    });
  }

  /* Zoom on window scenes */

  $(".zoom").mousemove(
    function(e){
      console.log("mouse over");
      var zoomer = e.currentTarget;
      e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
      e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
      x = offsetX/zoomer.offsetWidth*100
      y = offsetY/zoomer.offsetHeight*100
      zoomer.style.backgroundPosition = x + '% ' + y + '%';
        console.log("mouse over");
    }
  );

  /* Destroy rellax for mobile and tablet */
  var mediaQuery = window.matchMedia("(max-width: 1279px)");

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

  function setSnowhillSize(){
    var windowWidth = window.innerWidth;
    $(".snowhill").css("width", windowWidth);
    $(".snowhill").css("height", (150/1440) * windowWidth + "px");
  }

  mediaQuery.addEventListener("change", handleResponsive);
  $(window).on("resize", setSnowhillSize);

  handleResponsive(mediaQuery);
  setSnowhillSize();
  setWindowScenes();
});
