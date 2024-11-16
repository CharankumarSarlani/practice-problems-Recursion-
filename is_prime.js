function isDivisibleBy(dividend ,divisor) {
  return dividend % divisor === 0;
}

function _isPrime(primeCandidate, divisor) {
  if(divisor === primeCandidate) {
    return true;
  }

  if (isDivisibleBy(primeCandidate, divisor)) {
    return false;
  }

  return _isPrime(primeCandidate, divisor + 1);
}

function isPrime(primeCandidate) {
  if (primeCandidate < 2) {
    return false;
  }

  return _isPrime(primeCandidate, 2);
}

// console.log(isPrime(2),2);
// console.log(isPrime(4),4);
// console.log(isPrime(5),5);
// console.log(isPrime(7),7);
// console.log(isPrime(4),4);
// console.log(isPrime(6),6);
// console.log(isPrime(11),11);
// console.log(isPrime(10));
console.log(isPrime(1221));

// if divided by 2 or 3 => not a prime
// 6k + 1 or 6k - 1 =>not a prime
// if crosses ! 6k - 1 ** 2 < number => where, k = 1 =>  




