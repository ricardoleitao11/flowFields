//var xoff1 = 0;
//var xoff2 = 10000;

var inc = 0.01;
var start = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();
  var xoff = start;
  
  for (var x = 0; x < width; x++){
    stroke(255);
    
    
    // SINE WAVE MIXED WITH PERLIN NOISE 
    // var n = map(noise(xoff), 0, 1, -50, 50);
    // var s = map(sin(xoff), -1, 1, -0, height);
    // var y = n + s;
    
    
    
    var y = noise(xoff) * height;
    vertex(x, y);
    
    xoff += inc;
  }
  endShape();
  
  start += inc;
  
  //noLoop();
  
  
  
  // GENERIC RANDOMIZED BALL POSITION
  //var x = map(noise(xoff1), 0, 1, 0, width);
  //var y = map(noise(xoff2), 0, 1, 0, height);
  //var t = map(noise(100), 0, 1, 20, 50)
  //xoff1 += 0.005;
  //xoff2 += 0.008;
  
  //ellipse(x, y, 24, 24);
  //ellipse(x, y, t);
}