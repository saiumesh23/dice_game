var random_number1=Math.floor((Math.random()*6)+1);
var dice_image="./images/dice"+random_number1+".png";
document.querySelectorAll("img")[0].setAttribute("src",dice_image);

var random_number2=Math.floor((Math.random()*6)+1);
var dice_image2="./images/dice"+random_number2+".png";
document.querySelectorAll("img")[1].setAttribute("src",dice_image2);

if(random_number1>random_number2){
  document.querySelector("h1").innerHTML="player1 wins"
}

 else  if(random_number1<random_number2){
    document.querySelector("h1").innerHTML="player2 wins"
  }
else{
  document.querySelector("h1").innerHTML="draw"
}

