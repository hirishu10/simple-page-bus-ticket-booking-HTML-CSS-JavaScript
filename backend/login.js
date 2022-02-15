var username = "";
const qouteEveryday = document.getElementById("qoute-everyday");
const quotes = "“There is no Ctrl-Z in life.”";
// create logic for getting current day
const date = new Date();
const getDay =
  date.getDay() === 0
    ? "Sunday"
    : date.getDay() === 1
    ? "Monday"
    : date.getDay() === 2
    ? "Tuesday"
    : date.getDay() === 3
    ? "Wednesday"
    : date.getDay() === 4
    ? "Thursday"
    : date.getDay() === 5
    ? "Friday"
    : date.getDay() === 6
    ? "Saturday"
    : null;
try {
  qouteEveryday.innerHTML = `#${getDay} : ${quotes}`;
} catch (error) {}
