const palindromes = function (string) {
  let filteredChars = string.replace(/[^a-zA-Z0-9]/g, '');
  let lowerCase = filteredChars.toLowerCase();

  // for (let i = 0; i < lowerCase.length - 1; i++) {
  for (let i = 0; i < lowerCase.length / 2; i++) { // only need to loop halfway through because it's checking at both ends
    if (lowerCase[i] !== lowerCase[lowerCase.length -1 - i]){
      return false
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;