var display = document.getElementById('display');

function addToDisplay(num) {
    if (display.value === '0' || display.value === '00' || display.value === '+' || display.value === '-' || display.value === '*' || display.value === '/' || display.value === '%') {

        display.value = num;

    } else {
        display.value += num
    }

}



function calculate() {
    display.value = eval(display.value)
}

function clearAll() {
    display.value = '';
}

function backSpace() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1)
    }
    else { display.value = '' }
}