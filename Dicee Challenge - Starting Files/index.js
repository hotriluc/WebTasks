var randomNumberPlayer1 = Math.floor(Math.random()*6)+1;
var randomNumberPlayer2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumberPlayer1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumberPlayer2+".png");

if (randomNumberPlayer1===randomNumberPlayer2){
  document.querySelector("h1").innerHTML = "DRAW"
}
else if(randomNumberPlayer1>randomNumberPlayer2){
  document.querySelector("h1").innerHTML = "🚩PLAYER 1 WINS!";
}else{
  document.querySelector("h1").innerHTML = "PLAYER 2 WINS!🚩";
}
