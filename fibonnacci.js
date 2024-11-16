function nThTermInfibonnacci(n) {
  
  if(n === 2 || n === 3) {
    return 1;
  }

  return nThTermInfibonnacci(n - 1) + nThTermInfibonnacci(n - 2);
}

console.log(nThTermInfibonnacci(1));
console.log(nThTermInfibonnacci(2));
console.log(nThTermInfibonnacci(4));
console.log(nThTermInfibonnacci(5));
