function changeColor() {
  const myBody = document.getElementsByTagName('body');
  let hexColor = '#';
  let newDigit;
  let hexNum;
  for(let i = 0; i < 6; i++ ) {
     newDigit = Math.floor(Math.random() * 16);
     if(newDigit <= 9) {
      hexNum = newDigit;
     } else {
      switch(newDigit) {
        case 10:
          hexNum = 'a';
          break;
        case 11:
          hexNum = 'b';
          break;
        case 12:
          hexNum = 'c';
          break;
        case 13:
          hexNum = 'd';
          break;
        case 14:
          hexNum = 'e';
          break;
        case 15:
          hexNum = 'f';
          break;
        
        }
     } hexColor += hexNum;

  }

  console.log(hexColor);

  myBody[0].style.background = hexColor;

document.getElementById("color").innerHTML = hexColor;

}

const myMusic= document.getElementById("music");

function play() {

  myMusic.play();
  myMusic.volume = 0.3;

}