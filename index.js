var r1=Math.floor(Math.random()*6)+1;

var rimage1source="images/dice"+r1+".png";

var image1 =document.querySelectorAll("img")[0];

image1.setAttribute("src", rimage1source);

var r2 = Math.floor(Math.random() * 6) + 1;

var rimage2source= "images/dice" + r2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", rimage2source);


//If player 1 wins
if (r1 > r2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (r2 > r1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}

