let x, y, z, r ,vx, vy, a, x1, y1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = random(0,width);
  y = random(0,height);
  x1 = width / 2;
  y1 = height * 4 /5;
  vx = 10;
  vy = 10;
  z = 0;
  a = 0;
  r = 40;
}

function draw(){
  background(0, 0, 80);
  fill(220,220,0);
  textSize(width/20);
  text('星に当たるな！',width/4,height/2);
  fill(0,100,100);
  rect(0,0,width,height/10);
  fill(240,240,0);
  textSize(height/10)
  text('GOAL!!',width * 2 /5,-10 + height/10)
  fill(240,240,0);
  star(x,y,r,z);
  x += vx;
  y += vy;
  z += 0.1 + a;

  if(y > height){
  y = 0;
  }

  if(x < 0 || x > width){
    vx = -1.5 * vx;
    vy = 1.5 * vy;
    a += PI;
    r = random(60,100);
  }
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  fill(0);
  ellipse(x1, y1, 50);
  // キーの処理（else ifにすると同時押しできなくなってしまうので要注意）
  if(keyIsDown(LEFT_ARROW)){ x1 -= 10; }
  if(keyIsDown(RIGHT_ARROW)){ x1 += 10; }
  if(keyIsDown(UP_ARROW)){ y1 -= 3; }
  if(keyIsDown(DOWN_ARROW)){ y1 += 3; }

  x1 = constrain(x1, 0, width);
  y1 = constrain(y1, 0, height);

  if(dist(x,y,x1,y1) < r){
    textSize(width/10);
    fill(240,0,0);
    text('GAMEOVER',width/3,height/3);
    noLoop()
  }

  if(y1 < -30 + height/10){
    textSize(width/10);
    fill(240,240,0);
    text('GOAL!!!!!!!!!!!!',width/3,height/3);
    noLoop()
  }
}

function star(cx, cy, r,angle){
  beginShape();
  for(var i = 0; i < 5; i++){
  var theta = TWO_PI * i * 2 / 5 - (HALF_PI + angle);
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
