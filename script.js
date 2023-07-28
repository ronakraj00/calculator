let exp;
let buttonClick=new Audio("sound/bubble-click.wav");
let equalClick=new Audio("sound/processing.mp3");
let clearClick=new Audio("sound/cork.mp3");
//function for button control
const buttons=document.querySelectorAll(".button");
const display=document.querySelector("#numbers")
buttons.forEach(button=>{
    button.addEventListener("click",(evt)=>{
        
        if(evt.target.id==''){
            clearClick.play();
            display.innerText="";
        }
        else if(evt.target.id=='='){
            equalClick.play();
            console.log(exp);
            display.innerText=eval(exp).toFixed(2);
        }
        else{
            buttonClick.play();
            display.innerText+=evt.target.id;
            exp=display.innerHTML;   
        }
        
        evt.stopPropagation();
    })
});



