function logarithm(n, base) {
  if (n <= 1) {
    return 0;
  }

  return 1 + logarithm(n / base, base);
}

console.log(logarithm(32, 2));