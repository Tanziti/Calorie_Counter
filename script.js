


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
    const entryCount = targetInputContainer.querySelectorAll('input[type="text"]').length;
    
    console.log(entryCount); // This will log the number of text input elements within the specified container
  
    // Declare a new HTMLString variable and assign it an empty template literal string
    let HTMLString = ``;
  
    // Here, you can build your dynamic HTML string based on the entry count or other logic
    HTMLString += `
      <div class="entry">
        <input type="text" name="entryName${entryCount + 1}" placeholder="Entry Name">
        <input type="number" name="entryCalories${entryCount + 1}" placeholder="Calories">
      </div>
    `;
  
    // Append the new HTML string to the target input container
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
  }
  