function logarithm(n, base) {
  if (n <= 1) {
    return 0;
  }

  return 1 + logarithm(n / base, base);
}

console.log(logarithm(2, 2));
console.log(logarithm(4, 2));
console.log(logarithm(32, 2));
console.log(logarithm(5, 2));
console.log(logarithm(32, 1));
console.log(logarithm(16, 3));
