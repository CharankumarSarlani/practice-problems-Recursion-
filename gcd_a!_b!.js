function factorial(n) {
  if(n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

function getRemainder(divisor, dividend) {
  if (dividend < divisor) {
    return dividend;
  }

  return getRemainder(divisor, dividend - divisor);
}

function __gcd(a, b) {
  if (a === 0) {
    return b;
  }

  return __gcd(getRemainder(a, b), a);
}

function gcd(a,b) {
  return __gcd(factorial(a), factorial(b));
}

console.log(gcd(0, 0));
console.log(gcd(2, 0));
console.log(gcd(2, 2));
console.log(gcd(2, 6));
console.log(gcd(3, 5));
