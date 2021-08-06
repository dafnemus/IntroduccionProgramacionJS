const NUMBERS_BUTTON = document.getElementsByName('data-number');
const NUMERIC_OPERANDS_BUTTONS = document.getElementsByName('data-operand');
const EQUAL_BUTTON = document.getElementsByName('data-equal')[0];
const CLEAR_BUTTON = document.getElementsByName('data-clear')[0];
let result = document.getElementById('result');
let stateNow = '';
let oldState = '';
let operand;

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
  calculate();
  update();
});

CLEAR_BUTTON.addEventListener('click', () => {
  clear();
  update()
});

const selectOperand = (sign) => {
  if (stateNow !== '') {
    calculate();
  }
  operand = sign.toString();
  oldState = stateNow;
};

const calculate = () => {
  let calc;
  let value_1 = parseFloat(oldState);
  let value_2 = parseFloat(stateNow);
  switch (operand) {
    case '+':
      calc = value_1 + value_2;
      break;
    case '-':
      calc = value_1 - value_2;
      break;
    case 'x':
      calc = value_1 * value_2;
      break;
    case '/':
      calc = value_1 / value_2;
    default:
      return;
  }
  stateNow = calc;
  operand = undefined;
  oldState = '';
};

const agregarNumero = (number) => {
  stateNow = number.toString();
  update();
};

const update = () => {
  result.value = stateNow;
};

const clear = () => {
  stateNow = '';
  oldState = '';
  calcule = undefined;
};

clear()
