function setup(){
  createCanvas(400, 400);
}

function draw(){
  background(0);
  
  translate(200, 200);
  rotate(-90);

  var hr = hour();
  var mn = minute()
  var sc = second();
  
  noFill();
  //seconds
  
  stroke(255, 0, 0);
  strokeWeight(5);
  var sAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, sAngle);

  push();
  rotate(sAngle);
  stroke(255, 0, 0);
  strokeWeight(5);
  line(0, 0, 100, 0);
  pop();

  //minutes
  stroke(0, 255, 0);
  strokeWeight(7);
  var mAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, mAngle);

  push();
  rotate(mAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();

  //hours
  stroke(0, 0, 255);
  strokeWeight(10);
  var hAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hAngle);

  push();
  rotate(hAngle);
  stroke(0, 0, 255);
  strokeWeight(10);
  line(0, 0, 50, 0);
  pop();

  rotate(90);
  fill("white");
  textSize(15);
  strokeWeight(2);
  
  noStroke();
  text("Digital Time:", -75, 175);
  
  stroke(0, 0, 255);
  text(hr + ":", 10, 175);
  
  stroke(0, 255, 0);
  text(mn + ":", 35, 175);
  
  stroke(255, 0, 0);
  text(sc, 60, 175);
  
  stroke("white");
  strokeWeight(10);
  point(0, 0);
}