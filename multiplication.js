function multiplication(x, y) {
  if (y === 1) {
    return x;
  }

  return x + multiplication(x, y - 1);
}
 
console.log(multiplication(3, 4));




