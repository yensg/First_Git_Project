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

const people = [
  { name: 'Alice', age: 12 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 21 },
  { name: 'Dave', age: 35 }
];

const filteredPeople = people.filter(person => {
  if (person.age >= 16) {
    person.isLegalToDrive = true;
  }
});

console.log(filteredPeople);