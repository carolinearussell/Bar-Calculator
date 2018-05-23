//Calculate Tip
function calculateTip() {
  let billAmt = document.getElementById("billAmt").value;
  let tipAmt= document.getElementById("tipAmt").value;
  let peopleAmt = document.getElementById("peopleAmt").value;

  //validate input
  if (billAmt === "" || tipAmt == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  let total = (billAmt * [tipAmt/100]) / peopleAmt;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;



//click to call function
document.getElementById("clear").onclick = function() {
  calculateTip();

};

// calculate buyback
let buyback = (drinkCost * drinkRd)* 0.50
// round to decimal places
total = Math.round(buyback * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
// //Display the tip
  document.getElementById("tt.ppp").style.display = "block";
  document.getElementById("tip").innerHTML = total;


//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


