function getRemainder(divisor, dividend) {
  if (dividend < divisor) {
    return dividend;
  }

  return getRemainder(divisor, dividend - divisor);
}

function isDivisibleBy(dividend, divisor) {

  const remainder = getRemainder(divisor, dividend);
  return remainder === 0;
}

function __isPrime(primeCandidate, divisor) {
  if (divisor === primeCandidate) {
    return true;
  }

  if (isDivisibleBy(primeCandidate, divisor)) {
    return false;
  }

  return __isPrime(primeCandidate, divisor + 1);
}

function isPrime(primeCandidate) {
  if (primeCandidate < 2) {
    return false;
  }

  return __isPrime(primeCandidate, 2);
}

function sumOfPrimes(start, end) {
  if (start > end) {
    return 0;
  }

  if(!isPrime(start)) {
    return sumOfPrimes(start + 1, end);
  }

  return start + sumOfPrimes(start + 1, end);
}

// console.log(sumOfPrimes(2,3));
console.log(sumOfPrimes(18, 20));
// console.log(sumOfPrimes(2, 11));
// console.log(sumOfPrimes(1, 13));
// console.log(sumOfPrimes(0, 12));
