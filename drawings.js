/* Drawing building of Houses */

//house1
var canvas1 = document.getElementById("house1");
if (house1.getContext) {
  var ctx = canvas1.getContext("2d");

  // //front
  // ctx.fillStyle="#528fbc";
  // ctx.beginPath();
  // ctx.moveTo(145, 0);
  // ctx.lineTo(305, 190);
  // ctx.lineTo(305, 790);
  // ctx.lineTo(0, 790);
  // ctx.lineTo(0, 190);
  // ctx.closePath();
  // ctx.fill();
  //
  // //window
  // ctx.fillStyle="#314c7c";
  // ctx.fillRect(75, 190, 140, 140);
  //
  // //side roof
  // ctx.fillStyle="#314c7c";
  // ctx.beginPath();
  // ctx.moveTo(145, 0);
  // ctx.lineTo(390, 0);
  // ctx.lineTo(550, 190);
  // ctx.lineTo(305, 190);
  // ctx.closePath();
  // ctx.fill();
  //
  // //side
  // ctx.fillStyle = "#d6d7d8";
  // ctx.fillRect(305, 190, 245, 600);

  //front
  ctx.fillStyle="#528fbc";
  ctx.beginPath();
  ctx.moveTo(162, 0);
  ctx.lineTo(336, 216);
  ctx.lineTo(336, 870);
  ctx.lineTo(0, 870);
  ctx.lineTo(0, 216);
  ctx.closePath();
  ctx.fill();

  //window
  ctx.fillStyle="#314c7c";
  ctx.fillRect(72, 216, 168, 168);

  //side roof
  ctx.fillStyle="#314c7c";
  ctx.beginPath();
  ctx.moveTo(162, 0);
  ctx.lineTo(432, 0);
  ctx.lineTo(606, 216);
  ctx.lineTo(336, 216);
  ctx.closePath();
  ctx.fill();

  //side
  ctx.fillStyle = "#d6d7d8";
  ctx.fillRect(336, 216, 270, 654);

}

//house2
var canvas2 = document.getElementById("house2");
if (house2.getContext) {
  var ctx = canvas2.getContext("2d");

  // //front
  // ctx.fillStyle="#528fbc";
  // ctx.beginPath();
  // ctx.moveTo(405, 0);
  // ctx.lineTo(550, 190);
  // ctx.lineTo(550, 790);
  // ctx.lineTo(245, 790);
  // ctx.lineTo(245, 190);
  // ctx.closePath();
  // ctx.fill();
  //
  // //window
  // ctx.fillStyle="#314c7c";
  // ctx.fillRect(330, 190, 140, 140);
  //
  // //side roof
  // ctx.fillStyle="#314c7c";
  // ctx.beginPath();
  // ctx.moveTo(160, 0);
  // ctx.lineTo(405, 0);
  // ctx.lineTo(245, 190);
  // ctx.lineTo(0, 190);
  // ctx.closePath();
  // ctx.fill();
  //
  // //side
  // ctx.fillStyle = "#d6d7d8";
  // ctx.fillRect(0, 190, 245, 600);

  //front
  ctx.fillStyle="#528fbc";
  ctx.beginPath();
  ctx.moveTo(444, 0);
  ctx.lineTo(606, 216);
  ctx.lineTo(606, 870);
  ctx.lineTo(270, 870);
  ctx.lineTo(270, 216);
  ctx.closePath();
  ctx.fill();

  //window
  ctx.fillStyle="#314c7c";
  ctx.fillRect(366, 216, 168, 168);

  //side roof
  ctx.fillStyle="#314c7c";
  ctx.beginPath();
  ctx.moveTo(174, 0);
  ctx.lineTo(444, 0);
  ctx.lineTo(270, 216);
  ctx.lineTo(0, 216);
  ctx.closePath();
  ctx.fill();

  //side
  ctx.fillStyle = "#d6d7d8";
  ctx.fillRect(0, 216, 270, 654);
}

//house3
var canvas3 = document.getElementById("house3");
if (house3.getContext) {
  var ctx = canvas3.getContext("2d");

  //front
  ctx.fillStyle = "#d6d7d8";
  ctx.beginPath();
  ctx.moveTo(162, 0);
  ctx.lineTo(336, 216);
  ctx.lineTo(336, 750);
  ctx.lineTo(0, 750);
  ctx.lineTo(0, 216);
  ctx.closePath();
  ctx.fill();

  //window
  ctx.fillStyle="#314c7c";
  ctx.fillRect(72, 216, 168, 168);

  //side roof
  ctx.fillStyle="#314c7c";
  ctx.beginPath();
  ctx.moveTo(162, 0);
  ctx.lineTo(432, 0);
  ctx.lineTo(606, 216);
  ctx.lineTo(336, 216);
  ctx.closePath();
  ctx.fill();

  //side
  ctx.fillStyle="#528fbc";
  ctx.fillRect(336, 216, 270, 534);
}

//house4
var canvas4 = document.getElementById("house4");
if (house4.getContext) {
  var ctx = canvas4.getContext("2d");

  //front
  ctx.fillStyle="#528fbc";
  ctx.beginPath();
  ctx.moveTo(434, 0);
  ctx.lineTo(606, 216);
  ctx.lineTo(606, 540);
  ctx.lineTo(260, 540);
  ctx.lineTo(260, 216);
  ctx.closePath();
  ctx.fill();

  //window
  ctx.fillStyle="#314c7c";
  ctx.fillRect(366, 216, 168, 168);

  //side roof
  ctx.fillStyle="#314c7c";
  ctx.beginPath();
  ctx.moveTo(174, 0);
  ctx.lineTo(434, 0);
  ctx.lineTo(260, 216);
  ctx.lineTo(0, 216);
  ctx.closePath();
  ctx.fill();

  //side
  ctx.fillStyle = "#d6d7d8";
  ctx.fillRect(0, 216, 260, 324);
}
