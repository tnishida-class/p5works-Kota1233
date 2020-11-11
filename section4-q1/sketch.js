// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 120;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  if(keyIsDown(SHIFT)){
    if (count < 20 || count > 40 && count < 60 || count > 80 && count < 100) size = 40;
    else size = 60;
  }
  else{
    if (count > 60) size = 40;
    else size = 60;
  }
  ellipse(width / 2, height / 2, size);
}
