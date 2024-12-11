
var toDegrees = function(radians) {
  return radians * (180 / Math.PI);
};

var toRadians = function(degrees) {
  return degrees * (Math.PI / 180);
};

document.addEventListener('DOMContentLoaded', function() {
  // References
  var sun = document.querySelector('#sun');
  var earth = document.querySelector('#earth');

  // Dimensions
  var sunDimen = sun.getBoundingClientRect();
  var earthDimen = earth.getBoundingClientRect();

  // Controls
  var angle = 0; // Starting Angle
  var dx = 200; // Horizontal Distance
  var times = 10; // Spins
  var speed = 5.5; // Incrementor
  
  (function draw() {
    // Recursion (full circle) 
    if (angle < times * 360) requestAnimationFrame(draw);

    // Trigonometry fn
    var sin = Math.sin(toRadians(angle));
    var cos = Math.cos(toRadians(angle));
    
    // Upscale
    var x = (cos * dx).toFixed(3);
    var y = (sin * dx).toFixed(3);
    
    // Find coordinates
    var translateX = sunDimen.left + Number(x);
    var translateY = sunDimen.top - Number(y);
    
    // Animate
    earth.style.transform = 'translate(' + translateX + 'px,' + translateY + 'px)';    
    angle += speed;
  }());

}); // DOM ready

