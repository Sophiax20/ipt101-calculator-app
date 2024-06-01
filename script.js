const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button-grid button');

let isOperatorClicked = false;


function appendNumber(number) {
  
  if (isOperatorClicked) {
    display.value = '';
    isOperatorClicked = false;
  }
  display.value += number;
}


function handleOperator(operator) {
  display.value += operator;
  isOperatorClicked = true;
}


function clearDisplay() {
  display.value = '';
  isOperatorClicked = false;
}


function deleteLastNumber() {
  const currentDisplayValue = display.value;
  if (currentDisplayValue.length > 0) {
    display.value = currentDisplayValue.slice(0, -1);
  }
  isOperatorClicked = false;
}


function calculate() {
  // Replace this with your actual calculation logic (refer to explanation above)
  const expression = display.value;
  const result = eval(expression); // **WARNING: eval is not secure, use a math library for better safety**
  display.value = result;
  isOperatorClicked = false;
}


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonClass = button.classList[1]; 
    switch (buttonClass) {
      case 'number':
        appendNumber(button.textContent);
        break;
      case 'operator':
        handleOperator(button.textContent);
        break;
      case 'clear':
        clearDisplay();
        break;
      case 'delete':
        deleteLastNumber();
        break;
      case 'equal':
        calculate();
        break;
    }
  });
});
