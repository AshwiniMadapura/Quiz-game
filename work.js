import {qestionArray,correctAnsArray} from "./data.js";

let score=0;
let count=0;
let answerFlag=true;

if(count==0){
    console.log(qestionArray[count].question)
    document.getElementById("input").value=qestionArray[count].question;
    document.getElementById("1").innerHTML=qestionArray[count].answerA;
    document.getElementById("2").innerHTML=qestionArray[count].answerB;
    document.getElementById("3").innerHTML=qestionArray[count].answerC;
    document.getElementById("4").innerHTML=qestionArray[count].answerD; 
    document.getElementById("questionNumber").innerHTML=count+1; 
    document.getElementById("score").innerHTML=0; 
    }

const optionButton=document.querySelectorAll(".options")
    optionButton.forEach(item=>{
        item.addEventListener("click",ansButton);
    })

function ansButton(){
    
    let chosenAns=""
    if(answerFlag==true){
    
    if (this.value == "answerA"){
        chosenAns = Object.values(qestionArray[count])[1]
        answerFlag=false;
        console.log(count)
    }
    else if (this.value == "answerB"){
        chosenAns = Object.values(qestionArray[count])[2]
        answerFlag=false;
    }
    else if (this.value == "answerC"){
        chosenAns = Object.values(qestionArray[count])[3]
        answerFlag=false;
    }
    else if (this.value == "answerD"){
        chosenAns = Object.values(qestionArray[count])[4]
        answerFlag=false;
    }

    if (chosenAns == correctAnsArray[count]){
            document.getElementById("output").innerHTML="Correct!"   
            score=score+20;
            document.getElementById("score").innerHTML=score;
        }
        else{
            document.getElementById("output").innerHTML="Incorrect" 
            score-=5;
            document.getElementById("score").innerHTML=score; 

        }
    }
    if(answerFlag==false && count==qestionArray.length-1){
        console.log("inside if")
        document.getElementById("scoreResult").innerHTML="Congratulations!! Your total score is "+score;
    
    }
}




document.getElementById("clue").addEventListener("click",clueButton);
function clueButton(){
    if(answerFlag==true){
    let x = document.createElement("IMG");
    x.setAttribute("id", "image_clue")
    x.setAttribute("src", qestionArray[count].img);
    // console.log(count+"inside image");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    
    document.querySelector("main").appendChild(x)
    // document.main.appendChild(x);
            
    score-=5;
    document.getElementById("score").innerHTML=score;
    answerFlag=false;
    }
//   }

// return `<img src="${qestionArray.img} alt="" id="imgClueDemo"/>`
}

document.getElementById("nextQuestion").addEventListener("click",nextButton);
function nextButton(){
    answerFlag=true;
    document.getElementById("output").innerHTML=" "  
    count++;

    if(count==qestionArray.length-1){
        console.log(count)
        console.log(qestionArray.length)
        document.getElementById("nextQuestion").style.display="none";
        // document.getElementById("endGame").addEventListener("click",nextButton);
        console.log(score)
        
    }
    
    console.log(count);
    console.log(qestionArray[count].question)
    document.getElementById("input").value=qestionArray[count].question;
    document.getElementById("1").innerHTML=qestionArray[count].answerA;
    document.getElementById("2").innerHTML=qestionArray[count].answerB;
    document.getElementById("3").innerHTML=qestionArray[count].answerC;
    document.getElementById("4").innerHTML=qestionArray[count].answerD;
    document.getElementById("questionNumber").innerHTML=count+1;
    const item = document.getElementById("image_clue");
    if(item){
   item.remove();
    }
    
    

}
// document.getElementById("scoreResult").innerHTML=score;
// document.getElementById("scoreResult").style.display="none";