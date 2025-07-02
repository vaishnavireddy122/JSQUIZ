// const quiz1 = [
//   {
//     question: "Define JS?",
//     options: ["JavaSeed", "JavaSets", "JavaScript", "JavaSide"],
//     coorect:"JavaScript",
 
//   }
// ];
// const quiz2 = [
//   {
//     question: "JavaScript was invented by?",
//     options: ["James Gosling", "Brendan Eich","Tim-Berners-Lee", "Hakon Wium"],
//     correct:"Brendan Eich",
    
//   }
// ];
// const quiz3 = [
//   {
//     question: "Inside which HTML element do we put the JavaScript?",
//     options: ["js", "scripting", "javascript", "script"],
//     correct:"script",
    
//   }
// ];



// const container1 = document.getElementById('quecontainer1');
// container1.innerHTML=quiz1
//   .map((que, indx) =>`<div class="bg-gray-200 ml-50 mr-50">
//   ${indx + 1}.${que.question} 
//    <br>
//  <input type="radio"id="javascript" name="singleoption"  >
//  <label >${que.options[0]}</label><br>
//  <input type="radio" id="javascript" name="singleoption" >
//  <label >${que.options[1]}</label><br>
//  <input type="radio" id="javascript" name="singleoption" >
//  <label>${que.options[2]}</label><br>
//  <input type="radio" id="javascript" name="singleoption" >
// <label >${que.options[3]}</label><br>
//  </div>`)
//   .join('');

// const container2 = document.getElementById('quecontainer2');
//   container2.innerHTML=quiz2
//   .map((que, indx) =>`<div class="bg-gray-200 mt-2  ml-50 mr-50">
//   ${indx + 2}.${que.question} 
//    <br>
//  <input type="radio"id="javascript" name="singleoption"  >
//  <label >${que.options[0]}</label><br>
//  <input type="radio" id="javascript" name="singleoption" >
//  <label >${que.options[1]}</label><br>
//  <input type="radio" id="javascript" name="singleoption" >
//  <label>${que.options[2]}</label><br>
//  <input type="radio" id="javascript" name="singleoption" >
// <label >${que.options[3]}</label><br>

//  </div>`)
//   .join('');
  






  // submitbtn.addEventListener("click",()=>{
  // result.innerHTML=`Thanks for attempting the quiz !!`;
  // score.innerHTML= `HII${count}`;
  // })


 //let count=0;
//   const isCheckedA = document.getElementById("optionA").checked;
//   const isCheckedB = document.getElementById("optionB").checked;
//   const isCheckedC = document.getElementById("optionC").checked;
//   const isCheckedD = document.getElementById("optionD").checked;
//   if( indx==1 && isCheckedC)
//   {
//     count++
//   }
//   if( indx==2 && isCheckedB)
//   {
//     count++
//   }
//   if( indx==3 && isCheckedD)
//   {
//     count++
//   }

// submitbtn.addEventListener("click",()=>{
//     result.innerHTML=`Thanks for attempting the quiz !!`;
//     score.innerHTML= `HII${count}`;
//   })

const sentence=document.getElementById("changesentence")


let counter=0;
function oneonefun()
{
   document.querySelector("#red1").style.border="8px solid red";  
}
function onetwofun(){
   document.querySelector("#red2").style.border="8px solid red";
}
function onethreefun()
{
   counter=counter+33;
   document.querySelector("#green1").style.border="8px solid green";
}
function onefourfun()
{
document.querySelector("#red3").style.border="8px solid red";
}

function twoonefun()
{
document.querySelector("#red4").style.border="8px solid red";
}

function twotwofun()
{
   counter=counter+33;
   document.querySelector("#green2").style.border="8px solid green";
}
function twothreefun()
{document.querySelector("#red5").style.border="8px solid red";

}
function twofourfun()
{
document.querySelector("#red6").style.border="8px solid red";
}


function  threeonefun()
{
document.querySelector("#red7").style.border="8px solid red";
}
function  threetwofun()
{
document.querySelector("#red8").style.border="8px solid red";
}
function  threethreefun()
{
document.querySelector("#red9").style.border="8px solid red";
}
function threefourfun()
{
   counter=counter+33;
   document.querySelector("#green3").style.border="8px solid green";
}

function submit()
{
  sentence.innerHTML=`your score is ${counter}%`;
  document.querySelector("#submithead").innerHTML=`Thanks for attempting the quiz!!`;
}

   userList.innerHTML = userHTML;