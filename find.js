/*
Team NaoShaka
Naotaka Kinoshita and Shakil Rafi
SoftDev1 pd7
K17 -- Moo?
2017-12-12
*/

var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
//var targetX = boxWidth / 2;
//var targetY = boxHeight / 2;

var targetX = Math.floor(Math.random() * boxWidth);
var targetY = Math.floor(Math.random() * boxHeight);
console.log("targetX: " + targetX + " targetY: " + targetY);
console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  var deltaX = x0 - x1;
  var deltaY = y0 - y1;
  return Math.sqrt(deltaX*deltaX + deltaY*deltaY);
};

//length from target to farthest corner of the screen
var maxLength = Math.sqrt(targetX ** 2 + targetY ** 2);

//find location of mouse and change color
var findIt = function(e) {
  console.log("e.X " + e.x + "e.Y " + e.y);

  //distance of mouse from target
  var mouseDistance = distance(e.x, e.y, targetX, targetY);
  console.log("mousedist " + mouseDistance);

  //255 - ratio of mouseDistance to maxLength for rgb colors
  var color = 255 - Math.floor(255 * (mouseDistance / maxLength));
  console.log("color " + color);

  //change background color using rgb
  box.setAttribute("style", "background-color: rgb(250" + "," + color + "," + color + ")");
  console.log(box.getAttribute("style", "background-color"));
};

//score counter to be shown with correct clicks
var score = 0;

//see if click was close enough to target and display alert accordingly
var click = function(e) {
  if (distance(e.x, e.y, targetX, targetY) < 30) {
    //increment score, display alert, and change target location for next round
    score ++;
    alert("Congrats you got it!!!!\nScore: " + score);
    targetX = Math.floor(Math.random() * boxWidth);
    targetY = Math.floor(Math.random() * boxWidth);
  }
  else {
    alert("You missed! Try again");
  }
};

box.addEventListener("mousemove", findIt);
box.addEventListener("click", click);
