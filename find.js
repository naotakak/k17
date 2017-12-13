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
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  var deltaX = x0 - x1;
  var deltaY = y0 - y1;
  return Math.sqrt(deltaX*deltaX + deltaY*deltaY);
};


var findIt = function(e) {

};

/*
your OTHER FXNS

*/

box.addEventListener("mousemove", findIt);

