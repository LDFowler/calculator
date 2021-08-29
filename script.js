const userInput = document.getElementById("userInput");
var expression ='';

function press(num){
    expression += num;
    userInput.value = expression;
}//what happens when the user inputs a number

function equal(){
    userInput.value = eval(expression);
    expression = '';
}//What happens when the user hits the equal button

function erase(){
    expression = '';
    userInput.value = expression;
}//What happens when the user erases