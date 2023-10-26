const screen = document.getElementById("screen");
const clear = document.getElementById("clear");
const number = document.querySelectorAll("#nums");
const opr = document.querySelectorAll(".operator");
const equal = document.getElementById("equal");
const decimal = document.getElementById("decimal");
let result = "";
let decimalAdded = false;
let operators = ["+", "-", "÷", "x"];

clear.onclick = () => {
    result = "";
    screen.textContent = result;
    decimalAdded = false;
}

decimal.addEventListener("click", function(){
    if(!decimalAdded){
        result += decimal.textContent;
        screen.textContent = result;
        decimalAdded = true;
    }
})

for(let i = 0; i<number.length; i++){
    number[i].onclick = () => {
        result += number[i].textContent;
        screen.textContent = result;
    }
}


for(let i = 0; i<opr.length; i++){  
    opr[i].onclick = () => {
        for (const oprs of operators) {
            if (result.slice(-1) === oprs ) {
                result = result.substring(0, result.length-1) + operators[i];
                screen.textContent = result;
            }
        }
        if (result.length != 0 && result.slice(-1) != operators[i]) {
            result += operators[i];
            screen.textContent = result;
        }
        decimalAdded = false;
    }  
}


equal.onclick = () => {
    result = result.replace(/x/g, '*').replace(/÷/g, '/');
    result = eval(result).toString();
    screen.textContent = result;
    decimalAdded = false;
}
