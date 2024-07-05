//Variables
let userName = "sherlock";
let userQuestion = "who are you?";
let randomNumber = Math.floor(Math.random() * 8);
let eightball = "";

userName === "" ? console.log(` Hello ${userName}!`) : console.log("Hello!");
console.log(`${userName} is asking ${userQuestion}`);
/*
if (randomNumber == 1) {
  eightball = "It is certain";
} else if (randomNumber == 2) {
  eightball = "It is decidedly so";
} else if (randomNumber == 3) {
  eightball = "Reply hazy try again";
} else if (randomNumber == 4) {
  eightball = "Cannot predict now";
} else if (randomNumber == 5) {
  eightball = "Do not count on it";
} else if (randomNumber == 6) {
  eightball = "My sources say no";
} else if (randomNumber == 7) {
  eightball = "Outlook not so good";
} else {
  eightball = "Signs point to yes";
}

console.log(eightball);*/
console.log(randomNumber)

switch (randomNumber ) {
  case 1:
    console.log("It is certain");
    break;
  case 2:
    console.log("It is decidedly so");
    break;
  case 3:
    console.log("Reply hazy try again");
    break;
  case 4:
    console.log("Cannot predict now");
    break;
  case 5:
    console.log("Do not count on it");
    break;
  case 6:
    console.log("My sources say no");
    break;
  case 7:
    console.log("Outlook not so good");
    break;
    default:
    console.log("Signs point to yes");
}
