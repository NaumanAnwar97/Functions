// Practice TypeScript Functions
// Functions similar to python
function functionMinusSeven(number = 0) {
  return number - 7;
}

console.log(functionMinusSeven(10));

function functionTimesFive(number = 0) {
  return number * 5;
}

console.log(functionTimesFive(5));

// return value from a function can also be assigned to a variable
function functionTimes(number = 0) {
  return number * 5;
}

let newNum = functionTimesFive(5);
console.log(newNum);

// // Next in Line (Queue)
// function nextInLine(arr, item) {
//   arr.push(item);
//   return arr.shift();
// }
// testArr = [1, 2, 3, 4, 5];
// console.log("Before:" + testArr);
// console.log(nextInLine(testArr, 6));
// console.log("After:" + testArr);

// // Using Conditional If Statement

// function trueOrFalse(item) {
//   if (item == 5) {
//     return true;
//   }
//   return false;
// }

// console.log(trueOrFalse(5));

// console.log(trueOrFalse(10));

// // Strict Equal Operator (===)
// // 3 == 3 True 3== '3' also True, but 3 === '3' False

// // AND operator (&&)
// function doubleCheck(value) {
//   if (value <= 50 && value >= 25) {
//     return "Yes";
//   }
//   return "No";
// }
// console.log(doubleCheck(35));
// console.log(doubleCheck(55));

// // OR operator (||)
// function doubleCheck(value) {
//   if (value < 50 || value > 25) {
//     return "Outside";
//   }
//   return "Inside";
// }
// console.log(doubleCheck(35));
// console.log(doubleCheck(55));

// // Eslse Statement

// function elseFun(val) {
//   if (val < 10) {
//     return "Smaller";
//   } else {
//     return "Bigger";
//   }
// }
// console.log(elseFun(11));
