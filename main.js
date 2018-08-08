const handleCalculate = () => {
  const billAmt = document.getElementById("billAmt");
  const tipPer1 = document.getElementById("tipPer");
  const peopleAmt = document.getElementById("peopleAmt");
  const drinkCost = document.getElementById("drinkCost");
  const drinkRd = document.getElementById("drinkRd");
// calculation for tip
    tipPer = tipPer1/100;
    billBeforeTip = billAmt/peopleAmt;
    tipAmt = bill * tipPer;
    totalBill = bill + tipAmt;
    billPPAmt = bill/peopleAmt;
    tipAmtPPerson = tipAmt/peopleAmt;
    totalbbTip = (drinkCost * drinkRd)/2
    splitBuyBack = totalbbTip/peopleAmt;
    totalBillAmt = billPPAmt + tipAmtPPerson + totalbbTip;
    totalbillTP = (totalBill + totalbbTip)/peopleAmt;

// display tip inform to the screen
  document.getElementById("tBill").innerHTML= "$"+Number(totalBill).toFixed(2);
      console.log(Number(totalBill).toFixed(2));
   document.getElementById("tAmt").innerHTML= "$"+Number(tipAmt).toFixed(2);
      console.log(Number(tipAmt).toFixed(2));
  document.getElementById("bPP").innerHTML= "$"+Number(billPPAmt).toFixed(2);
      console.log(Number(billPPAmt).toFixed(2));
    document.getElementById("bbPP").innerHTML= "$"+Number(totalbillTP).toFixed(2);
      console.log(Number(totalbillTP).toFixed(2));   
  document.getElementById("tPP").innerHTML= "$"+Number(tipAmtPPerson).toFixed(2);
      console.log(Number(tipAmtPPerson).toFixed(2));  
  document.getElementById("bbC").innerHTML= "$"+Number(totalbbTip).toFixed(2);
      console.log(Number(totalbbTip).toFixed(2));  
  document.getElementById("splitBBack").innerHTML= "$"+Number(splitBuyBack).toFixed(2);
      console.log(Number(splitBuyBack).toFixed(2));
};

const clear = () => {
  var elementsToClear = document.getElementsByClassName("clear-me");
  var inputsToClear  = document.getElementsByClassName("clear-value");

  // console.log(elementsToClear);
  // console.log(inputsToClear);

  for (var i = 0; i < elementsToClear.length; i++){
    elementsToClear[i].innerHTML = '';  
  }
  for (var k = 0; k < inputsToClear.length; k++){
    inputsToClear[k].value = '';
  }
}

const buildApp = () => {
  const calculate = document.getElementById('calculate');
  const clear = document.getElementById('clear');
  calculate.addEventListener('click', handleCalculate);
  clear.addEventListener('click', clear);
}; 

window.onload = buildApp; 



