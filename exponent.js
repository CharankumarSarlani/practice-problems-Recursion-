function exponent(base, power) {
  if (power === 0) {
    return 1;
  }

  return base * exponent(base, power - 1);
}

console.log(exponent(1, 0));
console.log(exponent(3, 0));
console.log(exponent(2, 1));
console.log(exponent(3, 2));
console.log(exponent(5, 2));
