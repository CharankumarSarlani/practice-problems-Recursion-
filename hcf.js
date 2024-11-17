function getRemainder(divisor, dividend) {
  if (dividend < divisor) {
    return dividend;
  }

  return getRemainder(divisor, dividend - divisor);
}

function hcf(a, b) {
  if (a === 0) {
    return b;
  }

  return hcf(getRemainder(a, b), a);
}

console.log(hcf(0, 0));
console.log(hcf(2, 0));
console.log(hcf(2, 2));
console.log(hcf(2, 6));
console.log(hcf(15, 30));
console.log(hcf( 3, 5));
