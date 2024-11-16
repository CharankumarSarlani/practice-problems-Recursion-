let i = 0;

function reverseString(string) {
  if(string.length < i) {
    return 0;
  }

  console.log(i);

  i = i + 1;
  return string[string.length - i] + reverseString(string);
}

// i increments 
// console.log("|" + reverseString("charan") + "|");
console.log("|" + reverseString("c")+ "|");
console.log("|" + reverseString(" ")+ "|");
console.log("|" + reverseString("") + "|");
