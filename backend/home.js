const pasName = document.getElementById("name");
const numTicket = document.getElementById("numberTicket");
const chooseCity = document.getElementById("choosecity");
const busDetails = document.getElementById("busdetails");
const seatNumber = document.getElementById("seatnumber");
const fareAmount = document.getElementById("fare");
const blinkText = document.getElementById("blink");

// number of ticket small condition
numTicket.addEventListener("change", (e) => {
  e.preventDefault();
  if (numTicket.value < 0) {
    numTicket.value = 0;
  }

  busFare =
    busDetails.value === "Shyamoli Bus Parivahan"
      ? 400
      : busDetails.value === "Raj Bus Service"
      ? 200
      : busDetails.value === "Raushan Travels"
      ? 300
      : busDetails.value === "Sharma Travels"
      ? 500
      : busDetails.value === "Kota Tour's Travel"
      ? 700
      : busDetails.value === "Ahmedabad Fast Service"
      ? 1300
      : busDetails.value === "Lucknow Travel"
      ? 1000
      : busDetails.value === "Punjab Bus Service"
      ? 1800
      : busDetails.value === "Bangalore Bus Tour Travel"
      ? 2200
      : busDetails.value === "Hyderabad Bus Service"
      ? 2600
      : busDetails.value === "Chennai Express"
      ? 3000
      : busDetails.value === "Mumbai Bus Travel"
      ? 2700
      : busDetails.value === "Fetching Bus Choose destination....."
      ? 0
      : 0;

  let f = numTicket.value * busFare;
  fareAmount.value = f;
});
//
//clear all
const clearAll = document.getElementById("clear_all");
clearAll.addEventListener("click", (e) => {
  e.preventDefault();
  pasName.value = "";
  numTicket.value = "";
  chooseCity.value = "Choose City";
  busDetails.value = "";
  seatNumber.value = "Choose Seat";
  fareAmount.value = "";
});

//refund money
const refundMoney = document.getElementById("refund_amount");
refundMoney.addEventListener("click", (e) => {
  e.preventDefault();
  alert(`Sorry! we don't have any money to refund you 😅`);
});

//Check fares for each bus
const fares = document.getElementById("check_fares");
fares.addEventListener("click", (e) => {
  e.preventDefault();
  let string = `
Total Fares:
-----------------------------------------------------------
New Delhi → Per Persion ₹400: Shyamoli Bus Parivahan      
Siliguri  → Per Persion ₹200: Raj Bus Service             
Kolkata   → Per Persion ₹300: Raushan Travels             
Bihar     → Per Persion ₹500: Sharma Travels              
Rajasthan → Per Persion ₹700: Kota Tour's Travel          
Ahmedabad → Per Persion ₹1300: Ahmedabad Fast Service     
Lucknow   → Per Persion ₹1000: Lucknow Travel             
Punjab    → Per Persion ₹1800: Punjab Bus Service         
Bangalore → Per Persion ₹2200: Bangalore Bus Tour Travel  
Hyderabad → Per Persion ₹2600: Hyderabad Bus Service      
Chennai   → Per Persion ₹3000: Chennai Express            
Mumbai    → Per Persion ₹2700: Mumbai Bus Travel          
-----------------------------------------------------------
  `;
  alert(string);
});

//
chooseCity.addEventListener("change", (e) => {
  e.preventDefault();
  const getBus =
    chooseCity.value === "New Delhi"
      ? "Shyamoli Bus Parivahan"
      : chooseCity.value === "Siliguri"
      ? "Raj Bus Service"
      : chooseCity.value === "Kolkata"
      ? "Raushan Travels"
      : chooseCity.value === "Bihar"
      ? "Sharma Travels"
      : chooseCity.value === "Rajasthan"
      ? "Kota Tour's Travel"
      : chooseCity.value === "Ahmedabad"
      ? "Ahmedabad Fast Service"
      : chooseCity.value === "Lucknow"
      ? "Lucknow Travel"
      : chooseCity.value === "Punjab"
      ? "Punjab Bus Service"
      : chooseCity.value === "Bangalore"
      ? "Bangalore Bus Tour Travel"
      : chooseCity.value === "Hyderabad"
      ? "Hyderabad Bus Service"
      : chooseCity.value === "Chennai"
      ? "Chennai Express"
      : chooseCity.value === "Mumbai"
      ? "Mumbai Bus Travel"
      : "Fetching Bus Choose destination.....";
  //
  busFare =
    getBus === "Shyamoli Bus Parivahan"
      ? 400
      : getBus === "Raj Bus Service"
      ? 200
      : getBus === "Raushan Travels"
      ? 300
      : getBus === "Sharma Travels"
      ? 500
      : getBus === "Kota Tour's Travel"
      ? 700
      : getBus === "Ahmedabad Fast Service"
      ? 1300
      : getBus === "Lucknow Travel"
      ? 1000
      : getBus === "Punjab Bus Service"
      ? 1800
      : getBus === "Bangalore Bus Tour Travel"
      ? 2200
      : getBus === "Hyderabad Bus Service"
      ? 2600
      : getBus === "Chennai Express"
      ? 3000
      : getBus === "Mumbai Bus Travel"
      ? 2700
      : getBus === "Fetching Bus Choose destination....."
      ? 0
      : 0;

  // console.log(getBus);
  busDetails.value = getBus;

  // Total Fare Calculation
  let f = numTicket.value * busFare;
  fareAmount.value = f;
});
//
/**
 *
 */
//book ticket
const bookTicket = document.getElementById("book_ticket");
bookTicket.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    pasName.value !== "" &&
    numTicket.value >= 1 &&
    chooseCity.value !== "Choose City" &&
    seatNumber.value !== "Choose Seat"
  ) {
    let bDetails = `
    Ticket Booked:  -  Departure Time: 4.00 PM    
    Passenger Name: ${pasName.value}
    Number of Ticket: ${numTicket.value}
    Destination: ${chooseCity.value}
    Bus Details: ${busDetails.value}
    Seat Number: ${seatNumber.value}
    Total Amount: ${fareAmount.value}
    Note : Please Take care of your Luggage 😀
    `;
    alert(bDetails);
    pasName.value = "";
    numTicket.value = "";
    chooseCity.value = "Choose City";
    busDetails.value = "";
    seatNumber.value = "Choose Seat";
    fareAmount.value = "";
  } else {
    alert("Please fill the Ticket Form carefully!");
  }
});

/**
 * Blink Text
 */
const color = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "dodgerblue",
  "aqua",
];
let n = 0;
setInterval(() => {
  blinkText.style.color = color[n];
  n = n + 1;
  n = n > color.length - 1 ? 0 : n;
}, 200);
