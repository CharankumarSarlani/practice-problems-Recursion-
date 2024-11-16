function _reverseString(string, start) {
  if(string.length <= start) {
    return '';
  }

  return string[string.length - ++start] + _reverseString(string, start);
}

function reverseString(string) {
  return _reverseString(string, 0);
}

console.log("|" + reverseString("charan") + "|");
console.log("|" + reverseString("c")+ "|");
console.log("|" + reverseString(" ")+ "|");
console.log("|" + reverseString("") + "|");
