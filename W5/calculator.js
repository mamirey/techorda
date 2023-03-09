let firstN = '';
let secondN = '';
let operand = '';
let finish = false;


const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const sign = ['+', '-', '*', '/'];
const display = document.querySelector('.display');

function clearAll() {
    firstN = '';
    secondN = '';
    operand = '';
    finish = false;
    display.textContent = 0;
}
function plusminus() {
    let d = display.textContent;
    if (d == 0) return display.textContent;

    if (secondN === '' && operand === '') {
        if (d > 0) {
            firstN = -d;
        }
        else if (d < 0) {
            d = d * (-1);
            firstN = d;
        }
        display.textContent = firstN;
    }
    // else if(firstN!=='' && secondN!==''){}

    else {
        if (d > 0) {
            secondN = -d;
        }
        else if (d < 0) {
            d = d * (-1);
            secondN = d;
        }
        display.textContent = secondN;

    }


}
function percent() {
    let d = display.textContent;
    if (d == 0) return display.textContent;

    else if (secondN === '' && operand === '') {
        firstN = d / 100;
        d = firstN;
    }
    else {//works with bugs firstN=secondN
        secondN = d / 100;
        d = secondN;
    }
    display.textContent = d;

}


document.querySelector('.main').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) clearAll();

    if (event.target.classList.contains('plus-minus')) plusminus();
    if (event.target.classList.contains('percent')) percent();


    const pressedKey = event.target.textContent;

    if (digit.includes(pressedKey)) {
        if (secondN === '' && operand === '') {

            if (pressedKey === '.' && firstN.includes('.')) {
                firstN += '';
                //console.log(a, b, sign);

            }

            else {
                /*if(pressedKey===0 && display.textContent===0){
                    firstN += '';
                    display.textContent = firstN;
                }
                else {*/
                firstN += pressedKey;
                //console.log(a, b, sign);

            } display.textContent = firstN;


        }
        /*else if(firstN!=='' && secondN!=='' && operand!==''){
            //code when more than 2 numbers entered
        }*/
        else if (firstN !== '' && secondN !== '' && finish) {
            secondN = pressedKey;
            finish = false;
            display.textContent = secondN;

        }
        else {

            if (pressedKey === '.' && secondN.includes('.')) {
                secondN += '';
                //console.log(a, b, sign);

            } else {
                secondN += pressedKey;
                //console.log(a, b, sign);

            } display.textContent = secondN;

        }
        console.log(firstN, secondN, operand);
        return;
    }



    if (sign.includes(pressedKey)) {
        operand = pressedKey;
        display.textContent = operand;
        console.log(firstN, secondN, operand);
    }
    if (pressedKey === '=') {
        if (secondN === '') secondN = firstN;
        switch (operand) {
            case "+":
                firstN = (+firstN) + (+secondN);
                break;
            case "-":
                firstN = (+firstN) - (+secondN);
                break;
            case "/":
                if (secondN === '0') {
                    display.textContent = "Error";
                    firstN = '';
                    secondN = '';
                    operand = '';
                    return;
                }
                firstN = firstN / secondN;
                break;
            case "*":
                firstN = firstN * secondN;
                break;

        }
        finish = true;
        display.textContent = firstN;
        console.table(firstN, secondN, operand);
    }


};