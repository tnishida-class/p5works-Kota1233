// テキスト「アニメーション」
let x, y, z, vx, vy, a;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 7;
  vy = 7;
  z = 0;
  a = 0;
}

function draw(){
  background(160, 192, 255);
  star(x,y,20,z);
  x += vx;
  y += vy;
  z += 0.1 + a;
  // BLANK[2] (hint: 作った star 関数を使います)

  // 端の処理パターン (1) 反対側から出てくる
  //if(x > width){ x = 0; }
  //else if(x < 0){ x = width; }
  //if(y > height){ y = 0; }
  //if(y < 0){ y = height; }

  if(x < 0 || x > width){
    vx = -5.0 * vx;
    vy = 5.0 * vy;
    a += PI;
    fill(240,240,0);
  }
  if(y < 0 || y > height){
    vx = 0.5 * vx;
    vy = -0.5 * vy;
    a = 0;
    fill(240);
  } // 縦
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}

function star(cx, cy, r,angle){
  beginShape();
  for(var i = 0; i < 5; i++){
  theta = TWO_PI * i * 2 / 5 - (HALF_PI + angle);
  console.log(theta);
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(){
  x = mouseX;
  y = mouseY;
}
