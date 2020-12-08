$(document).ready(function($) {
  /* Day/Night toggle */
  $("#daynightToggleSwitch").on("click", function() {

    if ( $("body").hasClass("night") ) {
      $("body").toggleClass("night day");
      $(".window img").removeClass("animated flash");
      $(".light").removeClass("animated flash");
      $(".window").removeClass("flashed");
      setWindowDayBG();
    } else {
      $("body").toggleClass("night day");
      $(".window").css("background-image","none");
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
    var waypoint1 = new Waypoint({
      element: document.getElementById("house1"),
      handler: function(direction) {
        if ( $("body").hasClass("night") && direction === "down") {
          $(".window1 img").addClass("animated flash");
          $(".level1 .light").addClass("animated flash");
          setTimeout(function(){
            $(".window1").addClass("flashed");
            $(".window1").css("background-image", "url('images/night1.jpg')");
          }, 1000);
        }
      },
      offset: "10%"
    })

    var waypoint2 = new Waypoint({
      element: document.getElementById("house2"),
      handler: function(direction) {
        if ( $("body").hasClass("night") && direction === "down") {
          $(".window2 img").addClass("animated flash");
          $(".level2 .light").addClass("animated flash");
          setTimeout(function(){
            $(".window2").addClass("flashed");
            $(".window2").css("background-image", "url('images/night2.jpg')");
          }, 1000);
        }
      },
      offset: "25%"
    })

    var waypoint3 = new Waypoint({
      element: document.getElementById("house3"),
      handler: function(direction) {
        if ( $("body").hasClass("night") && direction === "down") {
          $(".window3 img").addClass("animated flash");
          $(".level3 .light").addClass("animated flash");
          setTimeout(function(){
            $(".window3").addClass("flashed");
            $(".window3").css("background-image", "url('images/night3.jpg')");
          }, 1000);
        }
      },
      offset: "25%"
    })

    var waypoint4 = new Waypoint({
      element: document.getElementById("house4"),
      handler: function(direction) {
        if ( $("body").hasClass("night") && direction === "down") {
          $(".window4 img").addClass("animated flash");
          $(".level4 .light").addClass("animated flash");
          setTimeout(function(){
            $(".window4").addClass("flashed");
            $(".window4").css("background-image", "url('images/night4.jpg')");
          }, 1000);
        }
      },
      offset: "35%"
    })
  }

  /* Zoom on window scenes */

  $(".zoom").mousemove(
    function(e){
      var zoomer = e.currentTarget;
      e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
      e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
      x = offsetX/zoomer.offsetWidth*100
      y = offsetY/zoomer.offsetHeight*100
      zoomer.style.backgroundPosition = x + '% ' + y + '%';
    }
  );

  /* Destroy rellax for mobile and tablet */
  function handleResponsive() {
    if ( document.body.clientWidth < 1280 ) {
      rellax.destroy();
    }
    else {
      rellax.refresh();
    }
  }

  function handleMobile() {
    if ( document.body.clientWidth < 768 ) {
      var windowWidth = document.body.clientWidth;
      var maxWidth = document.body.clientWidth - 60;
      $(".greetings").css("width", maxWidth + "px");
      $("#building").css("width", maxWidth + "px");
      $("#building").css("height", (1760/653) * maxWidth + "px");
      $(".level").css("width", (510/653) * maxWidth + "px");
      $(".level").css("height", (1760/653) * maxWidth + "px");
      $(".window").css("width", (137/653) * maxWidth + "px");
      $(".window").css("height", (137/653) * maxWidth + "px");
      $(".window img").css("width", (197/653) * maxWidth + "px");
      $(".window img").css("height", (197/653) * maxWidth + "px");
      $(".window img").css("left", (-30/653) * maxWidth + "px");
      $(".window img").css("top", (-30/653) * maxWidth + "px");
      $(".window1").css("left", (70/653) * maxWidth + "px");
      $(".window1").css("top", (187/653) * maxWidth + "px");
      $(".window2").css("left", (447/653) * maxWidth + "px");
      $(".window2").css("top", (557/653) * maxWidth + "px");
      $(".window3").css("left", (70/653) * maxWidth + "px");
      $(".window3").css("top", (919/653) * maxWidth + "px");
      $(".window4").css("left", (447/653) * maxWidth + "px");
      $(".window4").css("top", (1283/653) * maxWidth + "px");
    }
    if ( document.body.clientWidth >= 768 ) {
      $(".greetings").css("width", "600px");
      $("#building").css("width", (1020 * 0.625) + "px");
      $("#building").css("height", (1760 * 0.625) + "px");
      $(".level").css("width", (510 * 0.625) + "px");
      $(".level").css("height", (1760 * 0.625) + "px");
      $(".window").css("width", (137 * 0.625) + "px");
      $(".window").css("height", (137 * 0.625) + "px");
      $(".window img").css("width", (137 * 0.625) + "px");
      $(".window img").css("height", (137 * 0.625) + "px");
      $(".window img").css("left", "0");
      $(".window img").css("top", "0");
      $(".window1").css("left", (293 * 0.625) + "px");
      $(".window1").css("top", (186 * 0.625) + "px");
      $(".window2").css("left", (670 * 0.625) + "px");
      $(".window2").css("top", (557 * 0.625) + "px");
      $(".window3").css("left", (70 * 0.625) + "px");
      $(".window3").css("top", (919 * 0.625) + "px");
      $(".window4").css("left", (814 * 0.625) + "px");
      $(".window4").css("top", (1283 * 0.625) + "px");
    }
    if ( document.body.clientWidth > 1279 ) {
      $(".greetings").css("width", "1020px");
      $("#building").css("width", "1020px");
      $("#building").css("height", "1760px");
      $(".level").css("width", "510px");
      $(".level").css("height", "1760px");
      $(".window").css("width", "137px");
      $(".window").css("height", "137px");
      $(".window img").css("width", "157px");
      $(".window img").css("height", "157px");
      $(".window img").css("left", "-10px");
      $(".window img").css("top", "-10px");
      $(".window1").css("left", "293px");
      $(".window1").css("top", "186px");
      $(".window2").css("left", "670px");
      $(".window2").css("top", "557px");
      $(".window3").css("left", "70px");
      $(".window3").css("top", "919px");
      $(".window4").css("left", "814px");
      $(".window4").css("top", "1283px");
    }
  }

  /* Set width and height (for IE) of snowhill svg depending on browser width */
  function setSnowhillSize(){
    var windowWidth = document.body.clientWidth;
    $(".snowhill").css("width", windowWidth);
    $(".snowhill").css("height", (150/1440) * windowWidth + "px");
  }

  $(window).on("resize", function(){
    handleMobile();
    setSnowhillSize();
  });

  initWaypoints();
  handleResponsive();
  handleMobile();
  setSnowhillSize();
  setWindowScenes();
});
