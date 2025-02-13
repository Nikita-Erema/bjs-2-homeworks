function getArrayParams(...number) {
  let min = Math.min(...number);
  let max = Math.max(...number);
  let sum = number.reduce((accumulator, currentValue) => accumulator + currentValue,0,);     
  avg = sum / number.length;
  return { min: min, max: max, avg: Number(avg.toFixed(2))};
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {return 0;}
  return sum = arr.reduce((a,b) => a + b, 0);
}

function differenceMaxMinWorker(...arr) {
if (arr.length === 0) {return 0;}
return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {return 0;}
  let sumEvenElemnt = 0;
  let sumOddElement = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0){
      sumEvenElemnt += arr[i];
    }
    else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElemnt - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {return 0;}
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      countEvenElement++;
      sumEvenElement += arr[i];
    }
  }
  return Number((sumEvenElement / countEvenElement).toFixed(0));
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  const arr = [];
  for (let i = 0; i < arrOfArr.length; i++) {
      arr.push(func(...arrOfArr[i]));
  }
  maxWorkerResult = Math.max(...arr);
  return maxWorkerResult;
}
