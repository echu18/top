const removeFromArray = function(array, ...args) {
  for (let i = 0; i < args.length; i++) {
    while (array.includes(args[i])){
      let idx = array.indexOf(args[i])
      array.splice(idx, 1);
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
