function sumOfAp(a, d, n){
  if(n < 1) {
    return 0;
  }

  return a + sumOfAp(a + d, d, n - 1);
}

console.log(sumOfAp(1,1,3));
console.log(sumOfAp(2,4,2));
console.log(sumOfAp(1,1,0));
console.log(sumOfAp(1,1,1));
