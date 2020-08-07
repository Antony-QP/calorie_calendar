const form = document.querySelector("#form-info");
const tableData = document.querySelector('#table-data')

// Post constructor
function Post(sex, name, activity, age, allowance, breakfast, lunch, dinner) {
  this.sex = sex;
  this.name = name;
  this.activity = activity;
  this.age = age;
  this.allowance = allowance;
  this.breakfast = breakfast;
  this.lunch = lunch;
  this.dinner = dinner;
}

// UI CONSTRUCTOR
function UI() {}

// UI PROTOTYPES 
UI.prototype.addPostToList = function (post) {
  console.log(post);
  // Create table row
  const tableRow = document.createElement('tr');
  // Log Date
  let today = new Date();
  today = today.toDateString()
  // Calculate total calorie consumption
  let totalCal = parseFloat(breakfast) + parseFloat(lunch) + parseFloat(dinner);
  // Use API to check calorie intake (next step)

  // Append table row to table
  tableRow.innerHTML =
    `
    <td>${today}</td>
    <td>${totalCal}</<td>
    <td><a href="#" class="delete">X</a></td>
    `
  tableData.appendChild(tableRow)
}

// Delete Row Function
UI.prototype.deleteRow = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

// Show alert function
UI.prototype.showAlert = function (message, className) {
  // Create a div
  const div = document.createElement('div');
  // Add a class name
  div.className = `alert ${className}`;
  // Add text to alert
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  const formContainer = document.querySelector('.form-container');
  // Insert before form 
  container.insertBefore(div, formContainer);
}

form.addEventListener('submit', function (e) {
  const sex = document.querySelector('#sex').value;
  const name = document.querySelector('#name').value;
  const activity = document.querySelector('#activity').value;
  const age = document.querySelector('#age').value;
  const allowance = document.querySelector('#allowance').value;
  const breakfast = document.querySelector('#breakfast').value;
  const lunch = document.querySelector('#lunch').value;
  const dinner = document.querySelector('#dinner').value;


  const post = new Post(sex, name, activity, age, allowance, breakfast, lunch, dinner);

  const ui = new UI();

  if (sex === '' || name === '' || activity === '' || age === '' || allowance === '' || breakfast === '' || lunch === '' || dinner === '') {
    ui.showAlert("Please fill in all fields", "error")
  } else {
    ui.addPostToList(post);
  }
})

// Event Listener for deleteRow
document.getElementById('table-data').addEventListener('click', function (e) {
  // Instatiate new UI so that you can access the prototypes
  const ui = new UI;
  // Delete book
  ui.deleteRow(e.target);
  console.log("Row deleted");
  e.preventDefault();
})