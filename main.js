/*const mybody=document.getElementsByTagName('body'); 
const mybutton=document.getElementById('mybutton');



mybutton.addEventListener('click', () => { 
  var rannumber1=Math.floor(Math.random() * 256 ); 
  var rannumber2=Math.floor(Math.random() * 256 ); 
  var rannumber3=Math.floor(Math.random() * 256 ); 
  var ranrgb="rgb("+rannumber1+","+rannumber2+","+rannumber3+")";
  mybody[0].style.backgroundColor=ranrgb; }); */



function changeColor() {
  const myBody = document.getElementsByTagName('body');
  let x = Math.floor(Math.random()*256);

  let y = Math.floor(Math.random()*256);

  let z = Math.floor(Math.random()*256);

  newColor = "rgb(" + x + ", " + y + ", " + z + ")"

  myBody[0].style.background = newColor;

document.getElementById("color").innerHTML = newColor;

}

const myMusic= document.getElementById("music");

function play() {

myMusic.play();
myMusic.volume = 0.3;

}