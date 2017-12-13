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

//determine the longest diagonal from target to furthest corner of screen
var getMax = function() {
  var q1 = Math.sqrt(((boxWidth - targetX) ** 2) + ((boxHeight - targetY) ** 2));
  var q2 = Math.sqrt(((targetX) ** 2) + ((targetY) ** 2));
  var q3 = Math.sqrt(((targetX) ** 2) + ((boxHeight - targetY) ** 2));
  var q4 = Math.sqrt(((boxWidth - targetX) ** 2) + ((targetY) ** 2));
  return Math.max(q1,q2,q3,q4);
};

//longest possible distance from target
var maxLength = getMax();

//find location of mouse and change color
var findIt = function(e) {
  console.log("e.X " + e.x + "e.Y " + e.y);

  //distance of mouse from target
  var mouseDistance = distance(e.x, e.y, targetX, targetY);
  console.log("mousedist " + mouseDistance);

  //100 - ratio of mouseDistance to maxLength for hsl colors
  var shade = 100 - Math.floor(100 * (mouseDistance / maxLength));
  console.log("shade " + shade);

  //favorite color
  var color = 200;

  //change background color using hsl
  box.setAttribute("style", "background-color: hsl(" + color + ",100%," + shade + "%)");
  console.log(box.getAttribute("style", "background-color"));
};

//score counter to be shown with correct clicks
var score = 0;

//see if click was close enough to target and display alert accordingly
var click = function(e) {
  if (distance(e.x, e.y, targetX, targetY) < 50) {
    //increment score, display alert, and change target location for next round
    score ++;
    alert("Congrats you got it!!!!\nScore: " + score);
    targetX = Math.floor(Math.random() * boxWidth);
    targetY = Math.floor(Math.random() * boxWidth);
    maxLength = getMax();
  }
  else {
    alert("You missed! Try again");
  }
};

box.addEventListener("mousemove", findIt);
box.addEventListener("click", click);
