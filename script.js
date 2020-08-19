var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

var operand1= 0; 
var operand2= null; 
var operator= null; 

function isOperator(value){
    if(value=="+"|| value=="-"|| value=="*"|| value =="/"){
        return true ; 
    }else {
        return false ; 
    }
}

for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(){
    var value = this.getAttribute('data-value');

    if(isOperator(value)){
        
        operator= value; 
        operand1= parseFloat(display.innerText); // as this is a string
        display.innerText="";  

    }else if (value == "ac") {
        display.innerText = "";
    }else if(value == "="){
        
        operand2= parseFloat(display.innerText);
        
        var result = eval(operand1 + ' ' + operator + ' ' + operand2);
        if (result) {
            display.textContent = result;
            operand1 = result;
            operand2 = null;
            operator = null;
            }

    }else if(value=="sign"){
        operand1= parseFloat(display.innerText);
        display.innerText= (-operand1); 
    }else if(value=="."){
        if(display.innerText.length!=0 && !display.innerText.includes('.')){
            display.innerText+= ".";         }
    }else if(value=="%"){

        operand1= parseFloat(display.innerText);
        display.innerText= operand1/100; 
    }
    else {
        display.innerText += value ; 
    }


    }); 
}