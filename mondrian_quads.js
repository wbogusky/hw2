function setup() {
  createCanvas(400, 400);
}


function draw() {
  var rightPoint = mouseY;
  var midH = 320;
  var leftV = 80;
  var bottomH = (height - midH) / 2 + midH;
  var topH = 0.35 * midH;
  var rightV = (width - leftV) * 0.90 + leftV;


  background(245); //white
  noStroke();

  fill(210, 20, 20); //red
  quad(width - rightPoint * 0.8, 0, 400, 0, 400, rightPoint * 0.8, leftV, midH); //red rect

  fill(10, 70, 150); //blue
  quad(0, height - rightPoint * 0.2, leftV, midH, rightPoint * 0.2, height, 0, height); // blue rect

  stroke(15); //black stroke
  strokeCap(SQUARE);

  strokeWeight(15); //long thinner lines
  line(width - rightPoint * 0.8, -10, leftV, midH); //vert long
  line(leftV, midH, rightPoint * 0.2, height + 10)

  line(-10, height - rightPoint * 0.2, leftV, midH); //horiz long 1
  line(leftV, midH, width + 10, rightPoint * 0.8)


}
