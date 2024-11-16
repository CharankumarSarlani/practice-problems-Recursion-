function multiplication(n) {
  if (n === 0) {
    return 0;
  }

  console.log(n);
  const fx = multiplication(n - 1);
  console.log("addition of " + n + " " + fx);
  return n + fx;
}

console.log(multiplication(5));