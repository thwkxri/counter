let counterValue = 0;
let nameValue = 'Счётчик';

let counterNumber = document.getElementById('counter-number');
let counterName = document.getElementById('counter-text');

const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');
const userNum = document.getElementById('user-start');
const changeName = document.getElementById('counter-name');

plusButton.addEventListener('click', function plusOne() {
  counterValue++;
  counterNumber.innerText = counterValue;
});

minusButton.addEventListener('click', function minusOne() {
    counterValue--;
    counterNumber.innerText = counterValue;
});

resetButton.addEventListener('click', function resetCount() {
  counterValue = 0;
  counterNumber.innerText = counterValue;
});

userNum.addEventListener('click', function createUserNum(){
  counterValue = parseInt(prompt('Введите стартовое значение счётчика: '));
 
  if (!isNaN(counterValue)) {
        counterNumber.innerText = counterValue;
    } 
    
  else {
        counterValue = parseInt(counterNumber.innerText);
  }
});

changeName.addEventListener('click', function changeName(){
  nameValue = prompt('Введите название счётчика: ');
  counterName.innerText = nameValue;
});