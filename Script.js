var grantHealth = 10;
var playerHealth = 40;
var playerWin = 0;
var grantWin = 0;
var Name = prompt("What is your name?");


while (playerWin < 3 && grantWin != 1) {
  var damage = Math.floor(Math.random() * 2) + 1;
  if (playerHealth >= 0 && grantHealth >= 0) {
    playerHealth -= damage;
    grantHealth -= damage;
    console.log(Name + " has " + playerHealth + " left")
    console.log("Grant has " + grantHealth + " left")
  } else if (playerHealth <= 0) {
    grantWin++;
    console.log("Grant has won!");
  } else if (grantHealth <= 0) {
    playerWin++;
    grantHealth = 10;
  }
  
}
if (playerWin === 3) {
  console.log(Name + " has won!");
}