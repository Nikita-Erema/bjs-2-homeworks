"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c
  if (discriminant == 0) {
    arr.push(-b/(2*a));
  }
  else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant) )/(2*a));
    arr.push((-b - Math.sqrt(discriminant) )/(2*a));
  }
  return arr;
}
solveEquation(1,-3,2);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = (percent / 100) / 12;
  let loanBody = amount - contribution;
  let mountPayment = loanBody * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));
  let allPayment = countMonths * mountPayment;
  allPayment = Number(allPayment.toFixed(2));
  return allPayment;
}
calculateTotalMortgage(10,0,50000,12);