function exponent(base, power) {
  if (power === 0) {
    return 1;
  }

  return base * exponent(base, power - 1);
}

// test fragment starts from here
function testExponent(base, power, expected) {
  const result = exponent(base, power);
  console.log(result === expected ? '✅' : '❌', result , expected);
}

function testAll() {
  testExponent(1, 0, 1);
  testExponent(3, 0, 1);
  testExponent(2, 1, 2);
  testExponent(3, 2, 9);
  testExponent(5, 2, 25);
}

testAll();
