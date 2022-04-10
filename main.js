import {qestionArray,correctAnsArray} from "./data.js";

const optionButton=document.querySelectorAll(".options")
    optionButton.forEach(item=>{
        item.addEventListener("click",ansButton);
    })

function ansButton(){
    
    let chosenAns=""
    if (this.value == "answerA"){
        chosenAns = Object.values(qestionArray[count])[1]
        console.log(count)
    }
    else if (this.value == "answerB"){
        chosenAns = Object.values(qestionArray[count])[2]
    }
    else if (this.value == "answerC"){
        chosenAns = Object.values(qestionArray[count])[3]
    }
    else if (this.value == "answerD"){
        chosenAns = Object.values(qestionArray[count])[4]
    }

    if (chosenAns == correctAnsArray[count]){
            document.getElementById("output").innerHTML="Correct!"    
        }
        else{
            document.getElementById("output").innerHTML="Incorrect"    
        }
    
}
let count=0;
if(count==0){
    console.log(qestionArray[count].question)
    document.getElementById("input").value=qestionArray[count].question;
    document.getElementById("1").innerHTML=qestionArray[count].answerA;
    document.getElementById("2").innerHTML=qestionArray[count].answerB;
    document.getElementById("3").innerHTML=qestionArray[count].answerC;
    document.getElementById("4").innerHTML=qestionArray[count].answerD;   
    }

document.getElementById("clue").addEventListener("click",clueButton);
function clueButton(){
    let x = document.createElement("IMG");
    // let x=document.getElementById("imgClue")
    // x.setAttribute("src", "./images/denmark.jpg");
    x.setAttribute("src", qestionArray[count].img);
    // console.log(count+"inside image");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    
    // x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
    
//   }

// return `<img src="${qestionArray.img} alt="" id="imgClueDemo"/>`
}

document.getElementById("nextQuestion").addEventListener("click",nextButton);
function nextButton(){
    document.getElementById("output").innerHTML=" "  
    count++;
    console.log(count);
    console.log(qestionArray[count].question)
    document.getElementById("input").value=qestionArray[count].question;
    document.getElementById("1").innerHTML=qestionArray[count].answerA;
    document.getElementById("2").innerHTML=qestionArray[count].answerB;
    document.getElementById("3").innerHTML=qestionArray[count].answerC;
    document.getElementById("4").innerHTML=qestionArray[count].answerD;
    const item = document.getElementsByName("IMG");
    // x.setAttribute("src", "");
//    x.removeChild(x);
    item.r

}
    