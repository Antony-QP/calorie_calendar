// Variables
const sex = document.querySelector('#sex');
const name = document.querySelector('#name');
const activityLevel = document.querySelector('#activity-level');
const age = document.querySelector('#age');
const dailyAllowance = document.querySelector('#daily-allowance');
const breakfastCal = document.querySelector('#breakfast-cal');
const lunchCal = document.querySelector('#breakfast-cal');
const dinnerCal = document.querySelector('#breakfast-cal');
const form = document.querySelector("#form-info");
const tableData = document.querySelector('#table-data')

// Event Listeners
form.addEventListener('submit', addCalories)
// Event Listener for delete




// Add calorie data
function addCalories(e) {
  if (sex.value === '' || name.value === '' || activityLevel.value === '' || age === '' || dailyAllowance.value === '' || breakfastCal.value === '' || lunchCal.value === '' || dinnerCal.value === '') {
    console.log("Please fill all necessary fields")
  } else {
    // Create table row
    const tableRow = document.createElement('tr');
    // Log Date
    let today = new Date();
    today = today.toDateString()
    // Calculate total calorie consumption
    let totalCal = parseFloat(breakfastCal.value) + parseFloat(lunchCal.value) + parseFloat(dinnerCal.value);
    // Use API to check calorie intake (next step)

    // Append table row to table
    tableRow.innerHTML =
      `
    <td>${today}</td>
    <td>${totalCal}</<td>
    <td><a href="#" class="delete">X</a></td>
    `
    tableData.appendChild(tableRow)
    e.preventDefault();
  }
}

// Delete row 
deleteRow = function (e) {
  if (e.target.className === 'delete') {
    e.target.parentElement.parentElement.remove();
  }
}

document.getElementById('table-data').addEventListener('click', deleteRow)