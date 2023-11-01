const screen = document.querySelector('.screen')
const container = document.querySelector('.container');
const buttonC = document.querySelector('.buttons');
let firstNum;
let secondNum;
let operator;
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
function operate(operatordingle,firstOperand, secondOperand){
    parseInt(firstOperand);
    parseInt(secondOperand);
    switch (operatordingle){
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



const clear = document.querySelector('#clear');
clear.addEventListener('click',()=>{
    screen.innerHTML = '';
});
let trigger = false;
buttonC.addEventListener('click',function(e){
    const target = e.target;
    if(trigger == true && target.className == 'num'){
        screen.innerHTML += target.innerHTML;
        secondNum = screen.innerHTML;
    }else if(trigger == false && target.className == 'num'){
        screen.innerHTML += target.innerHTML;
        firstNum = screen.innerHTML;
        trigger = false;
    }else if(target.className == 'op'){
        operator = target.textContent;
        screen.innerHTML = '';
        trigger = true;
    }else if(target.className == 'result'){
        console.log(operator)
        console.log(firstNum)
        console.log(secondNum)
        const res = operate(operator,parseInt(firstNum),parseInt(secondNum));
        screen.innerHTML = '';
        screen.innerHTML = res;
    }
})

