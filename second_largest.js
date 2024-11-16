function secondLargest(a, b, c) {
  if (b > a) {
    return secondLargest(b, c, a);
  }

  if (b > c) {
    return secondLargest(b, a, c);
  }

  return c;
}

console.log(secondLargest(2, 12, 3));
console.log(secondLargest(2, 3, 12));

console.log(secondLargest(3, 12, 2));

console.log(secondLargest(3, 2, 12)); //not working 

console.log(secondLargest(12, 2, 3));
console.log(secondLargest(12, 3, 2));



// 2,12,3
// 3,12,2 