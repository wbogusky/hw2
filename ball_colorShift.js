function setup() {
  createCanvas(400, 400);
  fill(230, 190, 10);
  ballColor = (30);
  colorShift = (3);
}


var diameter = 50;

var ball = 0;
var ballDirection = 10

var ball2 = 0;
var ballDirection2 = 2;

function draw() {
  background(220);
  noStroke();
  fill(ballColor);
  ballColor = ballColor+colorShift;
  
  ellipse(height / 3, ball, diameter);
  ball = ball + ballDirection;
  
  ellipse(height * 2/3, ball2, diameter);
  ball2 = ball2+ballDirection2;
  
  if (ball >= width){
  	ballDirection = -ballDirection;
  }
  if (ball <= 0){
  	ballDirection = -ballDirection;
  }
  
  if (ball2 >= width){
  	ballDirection2 = -ballDirection2;
    colorShift = -colorShift;
  }
  if (ball2 <= 0){
  	ballDirection2 = -ballDirection2;
    colorShift = -colorShift;
  }
}
