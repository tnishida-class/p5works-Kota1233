// チェッカー
function setup() {

  createCanvas(200, 200);
  background(128);
  let width = 200
  let size = width / 8;

  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){


        if(i % 2 == 0){
          if(j % 2 == 0){
            noStroke();
            rect(i * size, j * size, size, size);
          }
        }

        else if(i % 2 == 1){
          if(j % 2 == 1){
            noStroke();
            rect(i * size, j * size, size, size);
          }
        }


      }
    }




    for(let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j++){


        if(i % 2 == 0){
          if(j == 1){
            fill(255,0,0);
            ellipse(i * size + (size / 2), size * (2 * j + 1) / 2, size * 7 / 8);
          }
          else if(j == 5 || j == 7 ){
              fill(0,0,0);
              ellipse(i * size + (size / 2), size * (2 * j + 1) / 2, size * 7 / 8);
          }
        }

        else if(i % 2 == 1){
          if(j == 0 || j == 2){
            fill(255,0,0);
            ellipse(i * size + (size / 2), size * (2 * j + 1) / 2, size * 7 / 8);
          }
          else if(j == 6){
            fill(0,0,0);
            ellipse(i * size + (size / 2), size * (2 * j + 1) / 2, size * 7 / 8);
          }
        }


      }
    }




}
