const calculate = () => {
  // calculation for tip
  let tipPer = tipPer1 / 100;
  let billBeforeTip = bill / peopleAmt;
  let tipAmt = bill * tipPer;
  let totalBill = bill + tipAmt;
  let billPPAmt = bill / peopleAmt;
  let tipAmtPPerson = tipAmt / peopleAmt;
  let totalbbTip = (drinkCost * drinkRd) / 2;
  let splitBuyBack = totalbbTip / peopleAmt;
  let totalBillAmt = billPPAmt + tipAmtPPerson + totalbbTip;
  let totalbillTP = (totalBill + totalbbTip) / peopleAmt;
};

const processCalculateRequest = () => {

  const bill = Number(document.getElementById("billAmt").value);
  const tipPer1 = Number(document.getElementById("tipPer").value);
  const peopleAmt = Number(document.getElementById("peopleAmt").value);
  const drinkCost = Number(document.getElementById("drinkCost").value);
  const drinkRd = Number(document.getElementById("drinkRd").value);

  const {
    totalBill,
    tipAmt,
    billPPAmt,
    totalbillTP,
    tipAmtPPerson,
    totalbbTip,
    splitBuyBack
  } = calculate(bill, tipPer1, peopleAmt, drinkCost, drinkRd);

  // display tip inform to the screen
  document.getElementById("tBill").innerHTML= "$" + Number(totalBill).toFixed(2);
  document.getElementById("tAmt").innerHTML= "$" + Number(tipAmt).toFixed(2);
  document.getElementById("bPP").innerHTML= "$" + Number(billPPAmt).toFixed(2);
  document.getElementById("bbPP").innerHTML= "$" + Number(totalbillTP).toFixed(2); 
  document.getElementById("tPP").innerHTML= "$" + Number(tipAmtPPerson).toFixed(2);
  document.getElementById("bbC").innerHTML= "$" + Number(totalbbTip).toFixed(2);
  document.getElementById("splitBBack").innerHTML= "$" + Number(splitBuyBack).toFixed(2);
};

const clearValues = () => {
  var elementsToClear = document.getElementsByClassName("clear-me");
  var inputsToClear  = document.getElementsByClassName("clear-value");

  for (var i = 0; i < elementsToClear.length; i++){
    elementsToClear[i].innerHTML = '';  
  }
  for (var k = 0; k < inputsToClear.length; k++){
    inputsToClear[k].value = '';
  }
}

const buildApp = () => {
  const calculateElement = document.getElementById('calculate');
  const clearElement = document.getElementById('clear');
  calculateElement.addEventListener('click', processCalculateRequest);
  clearElement.addEventListener('click', clearValues);
}; 

window.onload = buildApp; 



