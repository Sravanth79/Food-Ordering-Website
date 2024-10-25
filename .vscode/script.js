let modebtn= document.querySelector("#modebtn");
let mode="light";
modebtn.addEventListener("click",()=>{
   if (mode==="light"){
    mode="dark";
    document.querySelector("body").style.backgroundColor="white";
    }
    else{
        mode="light";
    document.querySelector("body").style.backgroundColor="black";

    }
   console.log(mode);
})
let div= document.querySelector("div");
div.mouseover= ()=>{
     console.log("yiur are inside the div")
}
//this is copiolot code
document.getElementById('btn1').addEventListener('mouseover', function() {
    document.getElementById('btn1').style.backgroundColor = 'red'; // Change 'red' to any color you want
});

document.getElementById('btn1').addEventListener('mouseout', function() {
    document.getElementById('btn1').style.backgroundColor = 'blue'; // Change 'initial' to the original color of the div
});
let btn2=document.QuerySelector("btn2");
btn2.addEventListener("mouseover",function(){
     
})
