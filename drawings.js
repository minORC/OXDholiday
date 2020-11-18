/* Drawing building of Houses */


var house_dark_blue = "#314c7c";
var house_blue = "#528fbc";
var house_light_grey = "#d6d7d8";


//house1
var canvas1 = document.getElementById("house1");
if (canvas1.getContext) {
  var ctx1 = canvas1.getContext("2d");
}

//house2
var canvas2 = document.getElementById("house2");
if (canvas2.getContext) {
  var ctx2 = canvas2.getContext("2d");
}

//house3
var canvas3 = document.getElementById("house3");
if (canvas3.getContext) {
  var ctx3 = canvas3.getContext("2d");
}

//house4
var canvas4 = document.getElementById("house4");
if (canvas4.getContext) {
  var ctx4 = canvas4.getContext("2d");
}


function draw(a, b, c) {
//house1
  //front
  ctx1.fillStyle = a;
  ctx1.beginPath();
  ctx1.moveTo(162, 0);
  ctx1.lineTo(336, 216);
  ctx1.lineTo(336, 870);
  ctx1.lineTo(0, 870);
  ctx1.lineTo(0, 216);
  ctx1.closePath();
  ctx1.fill();

  //window
  ctx1.fillStyle = b;
  ctx1.fillRect(72, 216, 168, 168);

  //side roof
  ctx1.fillStyle = b;
  ctx1.beginPath();
  ctx1.moveTo(162, 0);
  ctx1.lineTo(432, 0);
  ctx1.lineTo(606, 216);
  ctx1.lineTo(336, 216);
  ctx1.closePath();
  ctx1.fill();

  //side
  ctx1.fillStyle = c;
  ctx1.fillRect(336, 216, 270, 654);


//house2
  //front
  ctx2.fillStyle = a;
  ctx2.beginPath();
  ctx2.moveTo(444, 0);
  ctx2.lineTo(606, 216);
  ctx2.lineTo(606, 870);
  ctx2.lineTo(270, 870);
  ctx2.lineTo(270, 216);
  ctx2.closePath();
  ctx2.fill();

  //window
  ctx2.fillStyle= b;
  ctx2.fillRect(366, 216, 168, 168);

  //side roof
  ctx2.fillStyle= b;
  ctx2.beginPath();
  ctx2.moveTo(174, 0);
  ctx2.lineTo(444, 0);
  ctx2.lineTo(270, 216);
  ctx2.lineTo(0, 216);
  ctx2.closePath();
  ctx2.fill();

  //side
  ctx2.fillStyle = c;
  ctx2.fillRect(0, 216, 270, 654);


//house3
  //front
  ctx3.fillStyle = c;
  ctx3.beginPath();
  ctx3.moveTo(162, 0);
  ctx3.lineTo(336, 216);
  ctx3.lineTo(336, 750);
  ctx3.lineTo(0, 750);
  ctx3.lineTo(0, 216);
  ctx3.closePath();
  ctx3.fill();

  //window
  ctx3.fillStyle = b;
  ctx3.fillRect(72, 216, 168, 168);

  //side roof
  ctx3.fillStyle = b;
  ctx3.beginPath();
  ctx3.moveTo(162, 0);
  ctx3.lineTo(432, 0);
  ctx3.lineTo(606, 216);
  ctx3.lineTo(336, 216);
  ctx3.closePath();
  ctx3.fill();

  //side
  ctx3.fillStyle = a;
  ctx3.fillRect(336, 216, 270, 534);


//house4
  //front
  ctx4.fillStyle = a;
  ctx4.beginPath();
  ctx4.moveTo(433, 0);
  ctx4.lineTo(606, 216);
  ctx4.lineTo(606, 540);
  ctx4.lineTo(260, 540);
  ctx4.lineTo(260, 216);
  ctx4.closePath();
  ctx4.fill();

  //window
  ctx4.fillStyle = b;
  ctx4.fillRect(366, 216, 168, 168);

  //side roof
  ctx4.fillStyle = b;
  ctx4.beginPath();
  ctx4.moveTo(173, 0);
  ctx4.lineTo(433, 0);
  ctx4.lineTo(260, 216);
  ctx4.lineTo(0, 216);
  ctx4.closePath();
  ctx4.fill();

  //side
  ctx4.fillStyle = c;
  ctx4.fillRect(0, 216, 260, 324);
}

function clearDrawing() {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
  ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
}

draw(house_blue, house_dark_blue, house_light_grey);
