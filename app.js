const screen = document.querySelector('.screen')
const value = document.querySelector("#add").innerHTML;
const container = document.querySelector('.container');
let firstNum = 0;
let secondNum = 0;
let operator = 0;
function sum(firstOperand, secondOperand){
    return firstOperand + secondOperand;
}
function sub(firstOperand, secondOperand){
    return firstOperand - secondOperand;
}
function mult(firstOperand, secondOperand){
    return firstOperand * secondOperand;
}
function div(firstOperand, secondOperand){
    return firstOperand / secondOperand;
}
function operate(operator,firstOperand, secondOperand){
    switch (operator){
        case '+':
            return sum(firstOperand, secondOperand);
        case '-':
            return sub(firstOperand, secondOperand);
        case '*':
            return mult(firstOperand, secondOperand);
        case '/':
            return div(firstOperand, secondOperand);            
    }
}
let lis = document.querySelectorAll('.num');
lis.forEach((li) => {
    li.addEventListener('click', () => {
        screen.innerHTML += li.innerHTML;
    })
})