const display=document.getElementById('display');

//clear  the display fn
function clearDisplay(){
    display.value='';
}

//delete elemts fn
function deleteLast(){
    display.value = display.value.slice(0,-1);
}
//calculate results fn
function calculateResult(){
    display.value=eval(display.value);
}
// show entered data fn
function appendToDisplay (input){
    display.value+=input;
}













