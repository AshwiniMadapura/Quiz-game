import {qestionArray,correctAnsArray} from "./data.js";



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
    // console.log(qestionArray[0].correctAnswer)
    
    // console.log(typeof(this.value))
    // console.log(Object.keys(qestionArray[0])[3])

    // let chosenAns=this.value;
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
    
    
    // if(qestionArray[0].correctAnswer==qestionArray[0].this.value){
    //     console.log(qestionArray[0].correctAnswer,qestionArray[0].answerA)
    //     console.log("insideIf?");
    //     document.getElementById("output").innerHTML="correct"
    // }
    // // else if(qestionArray[0].correctAnswer==qestionArray[0].answerB){
    // //         console.log("inside ansB")
    // //         document.getElementById("output").innerHTML="correct"
    // //     }
    // else{
    //     console.log("insideElse?");
    //     document.getElementById("output").innerHTML="incorrect"
    // }

    // if(qestionArray[0].correctAnswer==qestionArray[0].answerB){
    //     console.log("inside ansB")
    //     document.getElementById("output").innerHTML="correct"
    // }else{
    //     console.log("insideBElse?");
    //      document.getElementById("output").innerHTML="incorrect"
    // }   
}
let count=0;
if(count==0){
    console.log(qestionArray[count].question)
    document.getElementById("input").value=qestionArray[count].question;
    document.getElementById("1").innerHTML=qestionArray[count].answerA;
    document.getElementById("2").innerHTML=qestionArray[count].answerB;
    document.getElementById("3").innerHTML=qestionArray[count].answerC;
    document.getElementById("4").innerHTML=qestionArray[count].answerD;
    // document.getElementById("imgsec").value=qestionArray[count].img;

    // function myFunction() {
        var x = document.createElement("IMG");
        // x.setAttribute("src", "./images/denmark.jpg");
        x.setAttribute("src", qestionArray[count].img);
        console.log(count+"inside image");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        
        // x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
    //   }
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

    var x = document.createElement("IMG");
        // x.setAttribute("src", "./images/denmark.jpg");
        x.setAttribute("src", qestionArray[count].img);
        console.log(count+"inside image");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        
        // x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
}
    