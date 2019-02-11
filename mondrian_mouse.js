function setup() {
  createCanvas(400, 400);
}


function draw() {
  var midH = mouseY;
  var leftV = mouseX;
  var bottomH = (height-midH)/2+midH;
  var topH = 0.35*midH;
  var rightV = (width-leftV)*0.90+leftV;
  
  
  background(245); //white
  noStroke();

  fill(210, 20, 20); //red
  rect(leftV, 0, height-leftV, midH); //red rect

  fill(10, 70, 150); //blue
  rect(0, midH, leftV, height-midH); // blue rect

  fill(255, 225, 0); // yellow
  rect(rightV, bottomH, height-rightV, height-bottomH); //yellow rect

  stroke(15); //black stroke
  strokeCap(SQUARE);

  strokeWeight(25); // short fat lines
  line(0, topH, leftV, topH); //upper left short

  strokeWeight(15); //long thinner lines
  line(leftV, 0, leftV, 400); //vert long
  line(0, midH, width, midH); //horiz long
  line(rightV, bottomH, width, bottomH); //lower right short

  strokeWeight(10); //thin lines
  line(rightV, midH, rightV, 400); //vert bottom right short
}
