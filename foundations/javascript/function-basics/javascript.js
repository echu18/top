function add7(num) {
  let newNum = num + 7;
  return newNum;
}

console.log(add7(10)); // 17

function multiply(num1, num2) {
  let newNum = num1 * num2;
  return newNum;
}

console.log(multiply(3, 2)) // 6

function capitalize(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i == 0) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}

console.log(capitalize('abcd')) // Abcd
console.log(capitalize('ABCD')) // Abcd
console.log(capitalize('aBcD')) // Abcd

function lastLetter(string) {
  if (typeof string !== 'string') {
    return 'Not a string';
  } else {
    let letter = string[string.length -1];
    return letter;
  }
}

console.log(lastLetter(512)); // Not a string
console.log(lastLetter("nugget")); // t