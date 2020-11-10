// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",100,100,color(0, 255, 0),color(0, 0, 255));
}

function balloon(t,x,y,color1,color2){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 5;
  fill(color1);
  triangle(x, y + (h + p * 2) / 2,x + ( h + p * 2) / 2,y + (h + p * 2),x - ( h + p * 2), y + (h + p * 2) * 2  );
  rect(x, y, w + p * 2, h + p * 2);

  fill(color2);
  text(t, p + x, h + p + y);
}
