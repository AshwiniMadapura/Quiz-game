import { qestionArray, correctAnsArray } from "./data.js";

let score = 0;
let count = 0;
let isAnswer = true;

if (count == 0) {
  console.log(qestionArray[count].question);
  document.getElementById("input").value = qestionArray[count].question;
  document.getElementById("1").innerHTML = qestionArray[count].answerA;
  document.getElementById("2").innerHTML = qestionArray[count].answerB;
  document.getElementById("3").innerHTML = qestionArray[count].answerC;
  document.getElementById("4").innerHTML = qestionArray[count].answerD;
  document.getElementById("questionNumber").innerHTML = count + 1;
  document.getElementById("score").innerHTML = 0;
}

function ansButton() {
  // const ansButton = () => {

  let chosenAns = "";
  if (isAnswer == true || clueflag == true) {
    if (this.value == "answerA") {
      chosenAns = Object.values(qestionArray[count])[1];
      isAnswer = false;
      console.log(count);
    } else if (this.value == "answerB") {
      chosenAns = Object.values(qestionArray[count])[2];
      isAnswer = false;
    } else if (this.value == "answerC") {
      chosenAns = Object.values(qestionArray[count])[3];
      isAnswer = false;
    } else if (this.value == "answerD") {
      chosenAns = Object.values(qestionArray[count])[4];
      isAnswer = false;
    }

    if (chosenAns == correctAnsArray[count]) {
      document.getElementById("output").innerHTML = "Correct!";
      score = score + 20;
      document.getElementById("score").innerHTML = score;
    } else {
      document.getElementById("output").innerHTML = "Incorrect";
      score -= 5;
      document.getElementById("score").innerHTML = score;
    }
  }
  if (isAnswer == false && count == qestionArray.length - 1) {
    console.log("inside if");
    document.getElementById("scoreResult").innerHTML =
      "Congratulations!! Your total score is " + score;
  }
}

const optionButton = document.querySelectorAll(".options");
optionButton.forEach((item) => {
  item.addEventListener("click", ansButton);
});

let clueflag = false;

// function clueButton(){
const clueButton = () => {
  if (isAnswer == true) {
    clueflag = true;
    let x = document.createElement("IMG");
    x.setAttribute("id", "image_clue");
    x.setAttribute("src", qestionArray[count].img);
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.querySelector("main").appendChild(x);
    score -= 5;
    document.getElementById("score").innerHTML = score;
    isAnswer = false;
  }
};
document.getElementById("clue").addEventListener("click", clueButton);

const nextButton = () => {
  // function nextButton(){
  isAnswer = true;
  document.getElementById("output").innerHTML = " ";
  count++;

  if (count == qestionArray.length - 1) {
    console.log(count);
    console.log(qestionArray.length);
    document.getElementById("nextQuestion").style.display = "none";
    console.log(score);
  }

  console.log(count);
  console.log(qestionArray[count].question);
  document.getElementById("input").value = qestionArray[count].question;
  document.getElementById("1").innerHTML = qestionArray[count].answerA;
  document.getElementById("2").innerHTML = qestionArray[count].answerB;
  document.getElementById("3").innerHTML = qestionArray[count].answerC;
  document.getElementById("4").innerHTML = qestionArray[count].answerD;
  document.getElementById("questionNumber").innerHTML = count + 1;
  const item = document.getElementById("image_clue");
  if (item) {
    item.remove();
  }
};
document.getElementById("nextQuestion").addEventListener("click", nextButton);
