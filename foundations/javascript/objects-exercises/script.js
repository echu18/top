//== Map to names ==//

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map(user => user.name);

// alert(names); // John, Pete, Mary


//== Map to objects ==//
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => ({
//   fullName: user.name + ' ' + user.surname,
//   id: user.id
// }))

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith


//== Sort users by age ==//
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// function sortByAge(arr) {
//   arr.sort(compareAges)
// }

// function compareAges(a, b) {
//   return a.age - b.age
// }

// console.log(arr)

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete




//== Get average age ==//
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];


// function getAverageAge(arr) {
//   let sum = 0

//   arr.forEach(item => sum += item.age)

//   return sum/arr.length
// }

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


//== Create keyed object form array ==//
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

// function groupById(users) {
//   let obj = {}
//   users.forEach(user => obj[user.id] = user)

//   return obj;
// }

function groupById(users) {
  return users.reduce((obj, user) => {
    obj[user.id] = user;
    return obj
  }, {})
}

let usersById = groupById(users);
console.log(usersById)

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/