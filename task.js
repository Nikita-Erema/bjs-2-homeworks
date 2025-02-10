"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let dis = Math.pow(b, 2) - 4 * a * c
  let x;
  console.log(dis);
  if (dis == 0) {
    x = -b/(2*a);
    arr.push(x);
    return arr;
  }
  else if (dis > 0) {
    arr.push((-b + Math.sqrt(dis) )/(2*a));
    arr.push((-b - Math.sqrt(dis) )/(2*a));
    return arr;
  }
  else if (dis < 0){
    return arr;
  }
}
solveEquation(1,-3,2);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let payment = S * (P + (P / ((Math.pow(1 + P, countMonths)) - 1)));
  payment *= countMonths
  payment = Number(payment.toFixed(2));
  return payment;
}
calculateTotalMortgage(10,0,50000,12);