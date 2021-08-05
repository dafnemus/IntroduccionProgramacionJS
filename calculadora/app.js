const NUMBERS_BUTTON = document.getElementsByName('data-number');
const NUMERIC_OPERANDS_BUTTONS = document.getElementsByName('data-operand');
const EQUAL_BUTTON = document.getElementsByName('data-equal')[0];
const CLEAR_BUTTON = document.getElementsByName('data-clear')[0];
let result = document.getElementById('result');

NUMBERS_BUTTON.forEach((button) => {
  button.addEventListener('click', () => {
    agregarNumero(button.innerText);
  });
});

NUMERIC_OPERANDS_BUTTONS.forEach((button) => {
  button.addEventListener('click', () => {
    selectOperand(button.innerText);
  });
});

EQUAL_BUTTON.addEventListener('click', () => {
    calculate()
    update()
})

CLEAR_BUTTON.addEventListener('click', () => {
    clear()
})
