var grantHealth = 10;
var playerHealth = 40;
var playerWin = 0;
var grantWin = 0;
var question = prompt("Would you like to play the game?")
if (question === "yes"){
  var Name = prompt("What is your name?");
}


while (playerWin < 3 && grantWin != 1) {
  var playerDamage = Math.floor(Math.random() * 2) + 1;
  var grantDamage = Math.floor(Math.random() * 2) + 1;
  if (playerHealth >= 0 && grantHealth >= 0) {
    playerHealth -= playerDamage;
    grantHealth -= grantDamage;
    console.log(Name + " has " + playerHealth + " health left.")
    console.log("Grant has " + grantHealth + " health left.")
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
} else if(grantWin===1){
  console.log("Grant has won!")
}