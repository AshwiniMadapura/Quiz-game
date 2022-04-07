import {qestionArray} from "./data.js";


const optionButton=document.querySelectorAll(".options")
    optionButton.forEach(item=>{
        item.addEventListener("click",ansButton);
    })

function ansButton(){
    console.log(this.value);
    if(this.value==1){
        document.getElementById("output").innerHTML="correct"
    }else if(this.value==0){
        document.getElementById("output").innerHTML="incorrect"
    }
}
let count=0;
// let i=count;
document.getElementById("nextQuestion").addEventListener("click",nextButton);
function nextButton(){
    // console.log(count);
    count++;
    // i++;

    console.log(count);
    // console.log(i);
    console.log(qestionArray[count].question)
    document.getElementById("input").value=qestionArray[count].question;
    document.getElementById("1").innerHTML=qestionArray[count].answerA;
    document.getElementById("2").innerHTML=qestionArray[count].answerB;
    document.getElementById("3").innerHTML=qestionArray[count].answerC;
    document.getElementById("4").innerHTML=qestionArray[count].answerD;
}

// if(count==i){
    // console.log(count);
    // console.log(i);
    console.log(qestionArray[count].question)
    document.getElementById("input").value=qestionArray[count].question;
    document.getElementById("1").innerHTML=qestionArray[count].answerA;
    document.getElementById("2").innerHTML=qestionArray[count].answerB;
    document.getElementById("3").innerHTML=qestionArray[count].answerC;
    document.getElementById("4").innerHTML=qestionArray[count].answerD;
// }




// document.getElementById("1").addEventListener("click",ansButton);

// function ansButton(){
// document.getElementById("output").innerHTML="incorrect"
// }

// document.getElementById("2").addEventListener("click",ansButton2);

// function ansButton2(){
// document.getElementById("output").innerHTML="correct"
// }

// document.getElementById("3").addEventListener("click",ansButton3);

// function ansButton3(){
// document.getElementById("output").innerHTML="incorrect"
// }
// document.getElementById("4").addEventListener("click",ansButton4);

// function ansButton4(){
// document.getElementById("output").innerHTML="incorrect"
// }

// function ansButton(){
//     console.log(document.getElementsByClassName("options").value);
//     if(document.getElementsByClassName("options").value==1){
//         document.getElementById("output").innerHTML="correct"
//     }else
//         document.getElementById("output").innerHTML="incorrect"
// }