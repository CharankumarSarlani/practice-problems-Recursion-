function isEven(n) {
  return n % 2 === 0;
}

function closestEven (start) {
  if(isEven(start)) {
    return start;
  }
  
  return start + 1;
}

function printEvensInRange(start, end) {
  if (start > end) {
    return '';
  }

  return '' + start + " " + printEvensInRange(start + 2, end);
}

function printEvens(start,end) {
  return printEvensInRange(closestEven(start), end);
}

console.log(printEvens(4, 4));
console.log(printEvens(2, 9));
console.log(printEvens(2, 8));
console.log(printEvens(3, 7));
console.log(printEvens(3, 3));
console.log(printEvens(3, 4));

