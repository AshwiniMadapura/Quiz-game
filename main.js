import {qestionArray} from "./data.js";


const optionButton=document.querySelectorAll(".options")
    optionButton.forEach(item=>{
        item.addEventListener("click",ansButton);
    })

// function ansButton(){
//     console.log(this.value);
//     if(this.value==1){
//         document.getElementById("output").innerHTML="correct"
//     }else if(this.value==0){
//         document.getElementById("output").innerHTML="incorrect"
//     }
// }

function ansButton(){
    console.log(qestionArray[0].correctAnswer)
    console.log(qestionArray[0].answerA)
    
    
    if(qestionArray[0].correctAnswer==qestionArray[0].answerA){
        console.log(qestionArray[0].correctAnswer,qestionArray[0].answerA)
        console.log("insideIf?");
        document.getElementById("output").innerHTML="correct"
    }
    else{
        console.log("insideElse?");
        document.getElementById("output").innerHTML="incorrect"
    }

    if(qestionArray[0].correctAnswer==qestionArray[0].answerB){
        console.log("inside ansB")
        document.getElementById("output").innerHTML="correct"
    }else{
        console.log("insideBElse?");
         document.getElementById("output").innerHTML="incorrect"
    }

    


    
}
let count=0;
document.getElementById("nextQuestion").addEventListener("click",nextButton);
function nextButton(){
    // console.log(count);
    count++;
    console.log(count);
    console.log(qestionArray[count].question)
    document.getElementById("input").value=qestionArray[count].question;
    document.getElementById("1").innerHTML=qestionArray[count].answerA;
    document.getElementById("2").innerHTML=qestionArray[count].answerB;
    document.getElementById("3").innerHTML=qestionArray[count].answerC;
    document.getElementById("4").innerHTML=qestionArray[count].answerD;
}

    console.log(qestionArray[count].question)
    document.getElementById("input").value=qestionArray[count].question;
    document.getElementById("1").innerHTML=qestionArray[count].answerA;
    document.getElementById("2").innerHTML=qestionArray[count].answerB;
    document.getElementById("3").innerHTML=qestionArray[count].answerC;
    document.getElementById("4").innerHTML=qestionArray[count].answerD;
