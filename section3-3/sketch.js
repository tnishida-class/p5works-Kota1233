// テキスト「関数を作る(2) 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(250, 250);
  calendar(2017, 12);

  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  let p = 20;
  let t = 0;
  let count = 0;
  textSize(15);
  text(y + "年" + m + "月", 68, 20 );
  textSize(10);
  for(i=0; i<7; i++){
    let a;
    a = dayOfWeekAsString(i);
    text(a, 25 * (i + 1), 40 );
  }
  for(let d = 1; d <= daysInMonth(y, m); d++){
    dow = dayOfWeek(y, m, d);
    if(dow == 6){
      fill(0,0,255);
    }
    else if(dow == 0){
      fill(255,0,0);
    }
    textSize(15);
    if(d < 10){
    text(d, (dow * 25 + p + 5), (t + 70) );
    }
    else text(d, (dow * 25 + p), (t + 70) );
    fill(0);
    if(dow == 6){
      t += 25;
    }// BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  return isLeapYear(y) ? 366 : 365;
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let t = 1900; t < y; t++ ){
    count += daysInYear(t);
  }
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d - 1;
}

function dayOfWeek(y, m, d){
  let a = dayOfYear(y, m, d) % 7;
  console.log(a);
  if(a==6) return 0;
  else return a+1;

   }

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
