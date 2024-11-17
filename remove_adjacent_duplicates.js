function __removeDuplicates(string, start) {
  if (start > string.length) {
    return '';
  }

  if (string[start] === string[start + 1]) {
    return __removeDuplicates(string, start + 1);
  }

  return string[start] + __removeDuplicates(string, start + 1);
}


function removeDuplicates(string) {
  return __removeDuplicates(string, 0);
}

// test fragment starts from here
function testRemoveDuplicate(string, expected) {
  const result = removeDuplicates(string);
  console.log(result === expected ? '✅' : '❌', "|" + result + "|", "|" + 
    expected + "|");
}

function testAll() {
  testRemoveDuplicate("cccc", "c");
  testRemoveDuplicate(" ", " ");
  testRemoveDuplicate("cccs", "cs");
  testRemoveDuplicate("cad", "cad");
  testRemoveDuplicate("csc", "csc");
}

testAll();

