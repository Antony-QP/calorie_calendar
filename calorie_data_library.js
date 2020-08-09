function calculateCalories(age) {
  let allowance = ''
  const activitySelection = document.querySelector('#activity')
  const dailyActivity = activitySelection.options[activitySelection.selectedIndex].text;

  // 18
  if (age == 18 && dailyActivity === "Sedentary") {
    allowance = 2400;
  } else if (age == 18 && dailyActivity === "Active") {
    allowance = 2800
  } else if (age == 18 && dailyActivity === "Very Active") {
    allowance = 3200
    // 19
  } else if (age == 19 && dailyActivity === "Sedentary") {
    allowance = 2600;
  } else if (age == 19 && dailyActivity === "Active") {
    allowance = 2800
  } else if (age == 19 && dailyActivity === "Very Active") {
    allowance = 3000
    // 20
  } else if (age == 20 && dailyActivity === "Sedentary") {
    allowance = 2600;
  } else if (age == 20 && dailyActivity === "Active") {
    allowance = 2800
  } else if (age == 20 && dailyActivity === "Very Active") {
    allowance = 3000
    // 21-25
  } else if (age >= 21 && age <= 25 && dailyActivity === "Sedentary") {
    allowance = 2400;
  } else if (age >= 21 && age <= 25 && dailyActivity === "Active") {
    allowance = 2800
  } else if (age >= 21 && age <= 25 && dailyActivity === "Very Active") {
    allowance = 3000
  }
  // 26-30
  else if (age >= 26 && age <= 30 && dailyActivity === "Sedentary") {
    allowance = 2400;
  } else if (age >= 26 && age <= 30 && dailyActivity === "Active") {
    allowance = 2600
  } else if (age >= 26 && age <= 30 && dailyActivity === "Very Active") {
    allowance = 3000
  }
  // 31-35
  else if (age >= 31 && age <= 35 && dailyActivity === "Sedentary") {
    allowance = 2400;
  } else if (age >= 31 && age <= 35 && dailyActivity === "Active") {
    allowance = 2600
  } else if (age >= 31 && age <= 35 && dailyActivity === "Very Active") {
    allowance = 3000
  }
  // 36-40
  else if (age >= 36 && age <= 40 && dailyActivity === "Sedentary") {
    allowance = 2400;
  } else if (age >= 36 && age <= 40 && dailyActivity === "Active") {
    allowance = 2600
  } else if (age >= 36 && age <= 40 && dailyActivity === "Very Active") {
    allowance = 2800
  }
  // 41-45
  else if (age >= 41 && age <= 45 && dailyActivity === "Sedentary") {
    allowance = 2200;
  } else if (age >= 41 && age <= 45 && dailyActivity === "Active") {
    allowance = 2600
  } else if (age >= 41 && age <= 45 && dailyActivity === "Very Active") {
    allowance = 2800
  }
  // 46-50
  else if (age >= 46 && age <= 50 && dailyActivity === "Sedentary") {
    allowance = 2200;
  } else if (age >= 46 && age <= 50 && dailyActivity === "Active") {
    allowance = 2600
  } else if (age >= 46 && age <= 50 && dailyActivity === "Very Active") {
    allowance = 2800
  }
  // 51-55
  else if (age >= 51 && age <= 55 && dailyActivity === "Sedentary") {
    allowance = 2200;
  } else if (age >= 51 && age <= 55 && dailyActivity === "Active") {
    allowance = 2400
  } else if (age >= 51 && age <= 55 && dailyActivity === "Very Active") {
    allowance = 2800
  }
  // 56-60
  else if (age >= 56 && age <= 60 && dailyActivity === "Sedentary") {
    allowance = 2200;
  } else if (age >= 56 && age <= 60 && dailyActivity === "Active") {
    allowance = 2400
  } else if (age >= 56 && age <= 60 && dailyActivity === "Very Active") {
    allowance = 2600
  }
  // 61-65
  else if (age >= 61 && age <= 65 && dailyActivity === "Sedentary") {
    allowance = 2000;
  } else if (age >= 61 && age <= 65 && dailyActivity === "Active") {
    allowance = 2400
  } else if (age >= 61 && age <= 65 && dailyActivity === "Very Active") {
    allowance = 2600
  }
  // 66-70
  else if (age >= 66 && age <= 70 && dailyActivity === "Sedentary") {
    allowance = 2000;
  } else if (age >= 66 && age <= 70 && dailyActivity === "Active") {
    allowance = 2400
  } else if (age >= 66 && age <= 70 && dailyActivity === "Very Active") {
    allowance = 2600
  }
  // 71-75
  else if (age >= 71 && age <= 75 && dailyActivity === "Sedentary") {
    allowance = 2000;
  } else if (age >= 71 && age <= 75 && dailyActivity === "Active") {
    allowance = 2200
  } else if (age >= 71 && age <= 75 && dailyActivity === "Very Active") {
    allowance = 2600
  }
  // 76 and over
  else if (age > 75 && age && dailyActivity === "Sedentary") {
    allowance = 2000;
  } else if (age > 75 && age && dailyActivity === "Active") {
    allowance = 2200
  } else if (age > 75 && age && dailyActivity === "Very Active") {
    allowance = 2400
  } else {
    showAlert("there was an issue", "error");
  }
  console.log(allowance)
  console.log(dailyActivity);
  return allowance;
}