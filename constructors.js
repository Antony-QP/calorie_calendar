const form = document.querySelector("#form-info");
const tableData = document.querySelector("#table-data");
let idCounter = 0;

function calculateCalories(age) {
  let allowance = ''
  if (age => 18) {
    allowance = 2400;
    console.log(allowance);
    return allowance
  }
}


// Post constructor
function Post(
  sex,
  name,
  activity,
  age,
  breakfast,
  lunch,
  dinner,
  allowance,
  id
) {
  this.sex = sex;
  this.name = name;
  this.activity = activity;
  this.age = age;
  this.breakfast = breakfast;
  this.lunch = lunch;
  this.dinner = dinner;
  this.allowance = allowance;
  this.id = idCounter++;
}

// UI CONSTRUCTOR
function UI() {}


// UI PROTOTYPES
UI.prototype.addPostToList = function (post) {
  let allowance = '';
  // Create table row
  const tableRow = document.createElement("tr");
  // Log Date
  let today = new Date();
  today = today.toDateString();
  // Calculate total calorie consumption
  let totalCal =
    parseFloat(post.breakfast) +
    parseFloat(post.lunch) +
    parseFloat(post.dinner);
  // Use API to check calorie intake (next step)
  ;

  let advisedCal = calculateCalories(post.age)
  let difference = advisedCal - totalCal;
  let color = ''

  if (difference > 0) {
    color = 'positive'
  } else {
    color = 'negative'
  }


  // Append table row to table
  tableRow.innerHTML = `
    <td>${today}</td>
    <td>${totalCal}</<td>
    <td>${advisedCal}</td>
    <td class="${color}">${difference}</td>
    `;

  // if (difference > 0) {
  //   document.querySelector('#table-difference').classList.add('positive');
  // } else {
  //   document.querySelector('#table-difference').classList.add('negative');
  // }
  tableData.appendChild(tableRow);
};

// Delete Row Function
UI.prototype.deleteRow = function (target) {
  if (target.className === "button-primary 12 columns") {
    tableData.innerHTML = '';
  }
  // console.log(target.parentElement.parentElement.childNodes[4])
};

// Show alert function
UI.prototype.showAlert = function (message, className) {
  // Create a div
  const div = document.createElement("div");
  // Add a class name
  div.className = `alert ${className}`;
  // Add text to alert
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector(".container");
  const formContainer = document.querySelector(".form-container");
  // Insert before form
  container.insertBefore(div, formContainer);
  // Set timeout so message dissapears
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

// Event listener for form submission
form.addEventListener("submit", function (e) {
  const sex = document.querySelector("#sex").value;
  const name = document.querySelector("#name").value;
  const activity = document.querySelector("#activity").value;
  const age = document.querySelector("#age").value;
  const breakfast = document.querySelector("#breakfast").value;
  const lunch = document.querySelector("#lunch").value;
  const dinner = document.querySelector("#dinner").value;



  const post = new Post(
    sex,
    name,
    activity,
    age,
    breakfast,
    lunch,
    dinner
  );

  const ui = new UI();

  if (
    sex === "" ||
    name === "" ||
    activity === "" ||
    age === "" ||
    breakfast === "" ||
    lunch === "" ||
    dinner === ""
  ) {
    ui.showAlert("Please fill in all fields", "error");
  } else {
    ui.addPostToList(post);
    Store.addPost(post);
    ui.showAlert("Calorie intake successfully added to counter", "success");
  }
  e.preventDefault();
});

// Storing to local storage

class Store {
  // Get Posts
  static getPosts() {
    let posts;
    if (localStorage.getItem("posts") === null) {
      posts = [];
    } else {
      posts = JSON.parse(localStorage.getItem("posts"));
    }
    return posts;
  }

  // Add Post
  static addPost(post) {
    const posts = Store.getPosts();

    posts.push(post);

    localStorage.setItem("posts", JSON.stringify(posts));
  }

  // Display posts
  static displayPosts() {
    const posts = Store.getPosts();
    posts.forEach(function (post) {
      const ui = new UI();
      ui.addPostToList(post);
    });
  }

  // Remove posts
  static removePost() {
    localStorage.removeItem('posts');
  }
}

// Event listener to display posts
document.addEventListener("DOMcontentLoaded", Store.displayPosts());

// Event Listener for deleteRow
document.querySelector('.button-primary').addEventListener("click", function (e) {
  // Instatiate new UI so that you can access the prototypes
  const ui = new UI();
  // Delete book
  ui.deleteRow(e.target);
  ui.showAlert("Day has been deleted", "success");
  Store.removePost();
  // Remove from local storage
  e.preventDefault();
});