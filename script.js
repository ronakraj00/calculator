let exp;
//function for button control
const buttons=document.querySelectorAll(".button");
const display=document.querySelector("#numbers")
buttons.forEach(button=>{
    button.addEventListener("click",(evt)=>{
        if(evt.target.id==''){
            display.innerText="";
        }
        else if(evt.target.id=='='){
            console.log(exp);
            display.innerText=eval(exp);
        }
        else{
            display.innerText+=evt.target.id;
            exp=display.innerHTML;   
        }
        
    })
});



