// script.js
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculateResult() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value); // Be cautious with eval()
    } catch (error) {
      display.value = 'Error';
    }  
  }
  
  