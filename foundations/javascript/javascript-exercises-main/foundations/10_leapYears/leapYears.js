const leapYears = function(year) {
  let isCentury = year % 100 == 0;
  let isYearDivisibleByFourHundred = year % 400 == 0;
  let isYearDivisibleByFour = year % 4 == 0;

  if (isCentury && !isYearDivisibleByFourHundred){
    return false;
  } else if (!isYearDivisibleByFour) {
    return false
  } 

  return true
};

// const leapYears = function(year) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return year % 4 === 0;
//   }
// };

// Do not edit below this line
module.exports = leapYears;
