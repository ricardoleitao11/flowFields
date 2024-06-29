var scl = 10;
var cols, rows;
var inc = 0.1;

var zoff = 0;

var fr;

var particle = [];

var flowField;

function setup() {
  createCanvas(1200, 800);
  colorMode(HSB, 255);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('')

  flowField = new Array(cols * rows);

  for(var i = 0; i< 5000; i++){
    particle[i] = new Particle();
  }
  background(255);
}



function draw() {
  var yoff = 0;
  //noiseDetail(20, 0.7);
  for (var y = 0; y < rows; y++){
    var xoff = 0;
    for (var x = 0; x < cols; x++){
      var index = x + y * cols; 
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowField[index] = v;
      xoff += inc;
      stroke(0, 50);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
      
    }
    yoff += inc;

    zoff += 0.0004;
    
  }

  for(var i = 0; i < particle.length; i++){
    particle[i].follow(flowField);
    particle[i].update();
    particle[i].edges();
    particle[i].show();
  }
  fr.html(floor(frameRate()));
  //noLoop();
}