function factorial(n) {
  if(n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

// test fragment starts from here
function testFactorial(number, expected) {
  const result = factorial(number);
  console.log(result === expected ? '✅' : '❌', result , expected);
}

function testAll() {
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(3, 6);
  testFactorial(5, 120);
}

testAll();
