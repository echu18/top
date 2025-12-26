const findTheOldest = function(people) {
  people.forEach(function(person) {
    if (!person.yearOfDeath) {
      person.age = new Date().getFullYear() - person.yearOfBirth
    } else {
      person.age = person.yearOfDeath - person.yearOfBirth;
    }
  })

  let max = 0;
  let oldest;

  people.forEach(function(person) {

    if (person.age > max) {
      max = person.age;
      oldest = person;
    }
  })

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
