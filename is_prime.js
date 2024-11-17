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

function exponent(base, power) {
  if (power === 0) {
    return 1;
  }

  return base * exponent(base, power - 1);
}

function _isPrime(primeCandidate, divisor) {
  if(!(exponent((6 * divisor - 1),2) < primeCandidate)) {
    return true;
  }

  if (isDivisibleBy(primeCandidate, 6 * divisor - 1) || isDivisibleBy
  (primeCandidate, 6 * divisor + 1)) {
    return false;
  }

  return _isPrime(primeCandidate, divisor + 1);
}

function isPrime(primeCandidate) {
  if (primeCandidate < 2) {
    return false;
  }

  if(primeCandidate === 2) {
    return true;
  }

  if(isDivisibleBy(primeCandidate,2) || isDivisibleBy(primeCandidate,3)) {
    return false;
  }

  return _isPrime(primeCandidate, 1);
}

console.log(isPrime(1),1);
console.log(isPrime(2),2);
console.log(isPrime(4),4);
console.log(isPrime(5),5);
console.log(isPrime(7),7);
console.log(isPrime(4),4);
console.log(isPrime(6),6);
console.log(isPrime(9),9);
console.log(isPrime(11),11);
console.log(isPrime(10),10);
console.log(isPrime(26),26);
console.log(isPrime(1221),1221);
