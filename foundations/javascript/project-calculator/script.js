
// add
// subtract
// multiply 
// divide

let numpad = Array.from(document.querySelectorAll('.btn-numpad'));
let operatorBtns = Array.from(document.querySelectorAll(".btn-operator"));
let display = document.querySelector('.calc-display');

let prevNumberString = ''
let currentNumberString = ''
let currentOperation = ''
let displayText = ''
let finalResult = null;


numpad.forEach(function(btn) {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    let num = e.target.dataset.num;
    if (finalResult != null) {
      finalResult = null;
      prevNumberString = ''
      currentNumberString = ''
    }
    currentNumberString += num;

    updateDisplay();
  })
})


document.querySelector('.operator-btns').addEventListener('click', function(e) {
  let operation = e.target.dataset.operation;

  switch (operation) {
    case 'clear':
      clearData();
      break;
    case 'equals':
      if (!!prevNumberString && !!currentNumberString && currentOperation) {
        calculateData();
      }
      break;
    default:
      if (currentNumberString == '' && prevNumberString == '' && currentOperation == ''){ 
      
      } else if (currentOperation == '') {
        prevNumberString = currentNumberString;
        currentNumberString = '';
        currentOperation = operation;
      } else if (prevNumberString == '' && currentNumberString != '') {
        prevNumberString = currentNumberString;
        currentNumberString = ''
        updateDisplay();
      } else if (currentNumberString == '') {
        currentOperation = operation;
        updateDisplay();
      } else if (prevNumberString && currentNumberString && currentOperation) {
        calculateData();
        currentOperation = operation;
        prevNumberString = currentNumberString;
        currentNumberString = "";
        updateDisplay();
      }
      if (finalResult !== null) {
        finalResult = null;
      }
      updateDisplay();
  }
})

function updateDisplay(message=null) {
  if (message){
    display.textContent = message
  } else {
    if (finalResult == null) {
      if (prevNumberString){
        display.textContent = `${prevNumberString} ${convertOperation(currentOperation)} ${currentNumberString}`;
      } else {
        display.textContent = `${currentNumberString}`;
      }
    } else {
      display.textContent = finalResult
    }
  }

  console.table({
    prevNumberString,
    currentNumberString,
    currentOperation,
    displayText,
    finalResult,
  });
}

function convertOperation(operation) {
  let result;
  switch (operation) {
    case "plus":
      result = '+';
      break;
    case "minus":
      result = '-';
      break;
    case "multiply":
      result = 'x';
      break;
    case "divide":
      result = "÷";
      break;
    case "exp":
      result = '^';
      break;
  }
  return result;
}

function clearData() {
  prevNumberString = '';
  currentNumberString = '';
  currentOperation = '';
  displayText = '';
  finalResult = null;
  updateDisplay();
}

function calculateData(){
  let operation = currentOperation
  let prev = parseFloat(prevNumberString);
  let curr = parseFloat(currentNumberString);
  let result;
  let message=null;

  switch(operation){
    case 'plus':
      result = prev + curr;
      break;
    case 'minus':
      result = prev - curr;
      break;
    case 'multiply':
      result = prev * curr;
      break;
    case 'divide':
      if (curr == 0) {
        message = 'Cannot divide by zero'
        result = '';
        prevNumberString = '';
        currentOperation = ''
      } else {
        result = prev / curr;
      }
      break;
    case 'exp':
      result = prev ** curr;
      break;
  }

  currentNumberString = result;
  // currentNumberString = '';
  finalResult = result;
  currentOperation = '';
  updateDisplay(message);
  
}


// TODO:
// - Wrap state in object
// - Refactor out helpers from switch
