alert("Salve utente! Sei pronto a sfidare il programma a dadi?")
//Deciding the machine roll!
var machineDice = Math.round(Math.random()*5)+1;
//Asking the user for an input! Rounding down the number for jerks using floats...
userDice = Math.floor(prompt("Credi di battermi? Inserisci un numero intero da 1 a 6!"));
//Checking the user's input, via a for loop.
for (; ((userDice < 1 || userDice > 6) || isNaN(userDice));) {
    userDice = parseInt(prompt("Credi di battermi? Inserisci un numero intero da 1 a 6!"));
}
//Evaluation of result:
if (machineDice > userDice) {
    document.getElementById("outcome").innerHTML = "Hai perso!";
}
else if (machineDice < userDice) {
    document.getElementById("outcome").innerHTML = "Hai vinto!";
}
else {
    document.getElementById("outcome").innerHTML = "Parità!";
}
//Printing the numbers! :D
document.getElementById("machineDice").innerHTML = machineDice;
document.getElementById("userDice").innerHTML = userDice;
