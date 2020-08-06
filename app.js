// Variables
const sex = document.querySelector('#sex');
const name = document.querySelector('#name');
const activityLevel = document.querySelector('#activity-level');
const age = document.querySelector('#age');
const dailyAllowance = document.querySelector('#daily-allowance');
const breakfastCal = document.querySelector('#breakfast-cal');
const lunchCal = document.querySelector('#breakfast-cal');
const dinnerCal = document.querySelector('#breakfast-cal');

// Event Listeners
document.querySelector('.button').addEventListener('click', function (e) {
  console.log(
    `<ul>
    <li>${sex.value}</<li>
    <li>${name.value}</<li>
    <li>${activityLevel.value}</<li>
    <li>${age}</<li>
    <li>${dailyAllowance.value}</<li>
    <li>${breakfastCal.value}</<li>
    <li>${lunchCal.value}</<li>
    <li>${dinnerCal.value}</<li>
    </ul>`
  )
  e.preventDefault();
})