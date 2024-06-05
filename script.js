


const calorieCounter = document.getElementById('calorie-counter')
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown')
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

let isError = false;

function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}    

function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}
console.log(isInvalidInput("1e3"))

function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name">
    `;
  
    // Append the new elements to the container
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
  }
  