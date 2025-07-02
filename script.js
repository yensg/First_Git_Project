// comments;

// const a = 1;
// console.log(typeof a);

// references types
// object(dictionary / KVP);
// array;
// set;
// null;

// const currName = "Lily";
// const currRole = "dancer";
// const outputStr = "hello, I am " + currName + " and I am a " + currRole;
// console.log(outputStr);

// const outputStr2 = `hello, I am ${currName} and I am a ${currRole}`;
// console.log(outputStr2);

// const thisLine = "this is line one\nThis is line two";

// const thatLine = `This is line one
// This is line two`;
// console.log(thatLine);

// function foo() {
//   let x = 11;
//   return x;
// }

// let result = foo();
// console.log(result);

// const numA = 5;
// const numB = 6;

// const total = numA + numB;

// console.log(total);

// let myBike = "Schwinn Vega";

// if (myBike === "Marin Presidio 3") {
//   console.log("That's a cool bike!");
// } else {
//   console.log("That's not cool!");
// }

// const student = {
//   firstName: 'Lauren',
//   lastName: 'Marks',
//   age: 20,
//   major: 'computer Science',
//   address: {
//     street: '123 Main St',
//     city: 'Seattle',
//     state: 'WA',
//     zipCode: '98101',
//   },
// };

// console.log(student.address.city);

// function getInitials(fullName) {
//   // Split the full name into an array of names
//   const nameArray = fullName.trim().split(' ');
//   // Map each name to its first letter and convert to Uppercase
//   const initialsArray = nameArray.map(name => name.charAt(0).toUpperCase());
//   // Join the initials into a single string
//   const initials = initialsArray.join('');
//   return initials;
// }

// console.log(getInitials("Jane Ann Doe"));

// let guests = 6;
// let availableTables;

// if (guests === 6) {
//   availableTables = [1, 4, 7, 8, 10];
// } else {
//   availableTables = [2, 3, 5, 6, 9];
// }

// console.log(availableTables);

// function calculateSalesTax(amount, taxRate) {
//   const salesTax = amount * (taxRate / 100);
// 	return salesTax;
// }

// const amount = 100;
// const taxRate = 7;

// const tax = calculateSalesTax(amount, taxRate);
// console.log(`The sales tax on $${amount} at a rate of ${taxRate}% is $${tax.toFixed(2)}.`);

// const person = {
//   name: 'John',
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };

// let hello = person.greet;
// hello.greet();

// const car = {
//   make: 'Toyota',
//   mode: 'Rav4',
//   year: '2012',
// }

// car.forEach((item) => {
//   console.log(car.item)
// })

// const people = [
//   { name: 'Alice', age: 12 },
//   { name: 'Bob', age: 17 },
//   { name: 'Charlie', age: 21 },
//   { name: 'Dave', age: 35 }
// ];

// const filteredPeople = people.filter(person => {
//   if (person.age >= 16) {
//     person.isLegalToDrive = true;
//   }
// });

// console.log(filteredPeople);

// Math.ceil(x);
// Math.floor(x);
// Math.round(x);
// Math.max(1, 2, 3);
// Math.min(1, 2, 3);
// Math.round();

// const calculatedValue = Math.floor(1.834);

// console.log(calculatedValue);

// const luckyNumber = Math.floor(Math.random() * 10);

// const x = 7.1632;
// const z = x.toFixed(2);
// console.log(parseInt(z));

// const currentDate = new Date();

// const newDate = new Date("2025-01-01");
// console.log(newDate);
// const fullYear = newDate.getFullYear();
// console.log(fullYear);
// const month = newDate.getMonth();
// console.log(month);
// const thisDate = new Date().toISOString().split("T")[0];
// console.log(thisDate);

// const i = 2;

// if (i % 2 === 0) {
//   console.log("even");
// } else if (i % 5 === 0) {
//   console.log("divisible by 5");
// } else {
//   console.log("odd");
// }

// const citizen = true;
// const age = 32;

// if (citizen) {
//   if (age >= 21) {
//     console.log("You can vote.");
//   } else {
//     console.log("You cannot vote.");
//   }
// } else {
//   console.log("You must be a citizen to vote.");
// }

// const i = 10;

// i % 2
//   ? i % 5
//     ? console.log("divisible by 5")
//     : console.log("odd")
//   : console.log("even");

// const type = "a";
// switch (type) {
//   case "a":
//     console.log("animal");
//     break;
//   case "v":
//     console.log("vegetable");
//     break;
//   default:
//     console.log("none");
// }

// for (let i = 0; i <= 100; i++) {
//   console.log(i);

//   if (i === 10) {
//     break;
//   }
// }

// for (let i = 0; i <= 1000; i++) {
//   for (let j = 0; j <= 100; j++) {}
// }

// let i = 0;

// while (i <= 1000) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i <= 1000);

// function nameOfFunction(parameter1, parameter2) {
//   //codes
//   return x;
// }

// const x = 10;
// const y = 20;

// function calculateTriangle(l, b) {
//   const area = 0.5 * l * b;
//   return area;
// }

// const area = calculateTriangle(x, y);

// function sumAll(...allNums) {
//   let sum = 0;

//   for (let i = 0; i < allNums.length; i++) {
//     sum += allNums[i];
//   }
//   return sum;
// }

// console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8));

// function calServiceCharge(amount) {
//   return amount * 0.1;
// }

// const calServiceCharge = (amount) => amount * 0.1;

// const calGST = (amount) => amount * 0.09;

// const calTotalBill = (amount) => {
//   const serviceCharge = calServiceCharge(amount);
//   const gst = calGST(amount);
//   return amount + serviceCharge + gst;
// };

// console.log(calTotalBill(88));

// function maxOfThree(...nums) {
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] > nums[i + 1]) {
//       return nums[i];
//     }
//   }
// }
// // how to solve this if maxOfThree is (5, 10, 17)?
// console.log("Exercise 6 Result:", maxOfThree(5, 10, 8));

// const test = 1

// const arr = [1, 2, 3];

// const shallowCopy = [...arr];

// const arr1 = [1, [2, 3], 4];

// const shallowCopy1 = [...arr1];

// const deepCopy = JSON.parse(JSON.stringify(arr1));
// const deepCopy1 = structuredClone(array);

// function maxOfThree(...nums) {
//   let max = 0;
//   for (i = 0; i < nums.length; i++) {
//     if (max < nums[i]) {
//       max = nums[i];
//     }
//   }
//   return max;
// }

// console.log("Exercise 6 Result:", maxOfThree(5, 10, 8));

// // const rooms = ["bedroom", "kitchen", "living"];

// // // this uses index to look at the value
// // for (let i = 0; i < rooms.length; i++) {
// //   console.log(rooms[i]);
// // }

// // // every loop, the previous room get destroyed.
// // // first loop, room = "bedroom"
// // // second loop, room = "kitchen"
// // // third loop, room = "bedroom"
// // // hence the room stores the actual value rather than index
// // for (const room of rooms) {
// //   console.log(room);
// // }

// // anomoyous function its a callback function
// // passes rooms value to item (parameters), it just run function 3 times.

// // rooms.forEach(function (item) {
// //   console.log(item);
// // });

// // rooms.forEach((item) => {
// //   console.log(item);
// // });

// // rooms.forEach(function (item, i) {
// //   rooms[i] = rooms[i] + "hello";
// //   console.log(rooms);
// // });

// const someChars = [
//   "a",
//   "c",
//   "b",
//   "a",
//   "b",
//   "c",
//   "c",
//   "a",
//   "b",
//   "c",
//   "a",
//   "b",
//   "c",
//   "a",
//   "b",
// ];

// // let found = false;

// // for (const char of someChars) {
// //   console.log(char);
// //   if (char === "b") {
// //     console.log("breaking");
// //     found = true;
// //     break;
// //   }
// // }

// // console.log(found);

// let countA = 0;
// let countB = 0;

// for (const char of someChars) {
//   console.log(char);
//   if (char === "a") {
//     console.log("counting a");
//     countA++;
//     continue;
//   }

//   console.log("next 1");

//   if (char === "b") {
//     console.log("counting b");
//     countB++;
//     continue;
//   }
//   console.log("next 2");
// }

// const kvp = {};
// const activities = { time: "12:00", activity: "lunch", activity: "dinner" };
// activities.day = "Saturday";

// activities.activity = "Saturday";

// console.log(activities);

// // if "day" key is found in the activities.
// if ("day" in activities) {
// }

// // returns an array of keys
// Object.keys(activities);

// // returns an array of values
// Object.values(activities);

// // returns a key and a value, returns an array of arrays [ [key,value], [key,value] ]
// Object.entries(activities);

// for (const [key, value] of Object.entries(activities)) {
//   console.log(`${key}: ${value}`);
// }

// const shallowCopy = {...activities};
// const deepCopy = JSON.parse(JSON,stringify(activities));
// const deepCopy2 = structuredClone(activities):

// const dog = 7;

// const changeVar = (cat) => {
//   cat = 777;
//   console.log("in", cat);
// };

// changeVar(dog);

// console.log("out", dog);

const chicken = [1, 2, 3, 4];

const changeArr = (duck) => {
  duck[0] = 17;
};

changeArr(chicken);
console.log(chicken);

const horse = { hay: "hello", barn: "turkey" };

const changeKvp = (cow) => {
  cow.hay = "bye";
};

changeKvp(horse);
console.log(horse);
