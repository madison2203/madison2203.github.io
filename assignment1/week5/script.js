// console.log ("welcome to the class");
// // this is a comment
// let myName= "alice";
// const myCity02 ="melbourne";
// console.log (myName, "lives in", myCity02);
// console.log ('${myName} lives in ${myCity02}');

// let count = 10;
// console.log(count);

// let isItMorningClass =true;
// let IsItAfternoonClass =false;

// let myStudentRecord = {
//     name: "madison",
//     id: 1234,
//     class: "OART1013",
//     isItScience: false,
//     isItDesign: true,
// };

// console.log("Hello everyone, my name is", myStudentRecord.name);

// console.log("my id is, myStudentRecord.id");
// console.log("my class is", myStudentRecord.class);
// console. log("are you a science student?", myStudentRecord.isItScience);

// const numberArray = [2, 4, 6, 8, 10];
// console.log(numberArray[2])
// myStudentRecord,isItScience = true;
// if (myStudentRecord.isItScience ===true)

// if (myStudentRecord.isItScience) {
//     console.log("Sorry you are in a wrong class");
// } else {
//     console.log ("Welcome to OART1013");
// }

// let myScore = 83;
// if(myScore >=90)
// {
//     console.log("You scored a HD");
// } else if (myScore ,90 && myScore =70) {
//     console.log("you score a D")
// } else if (myScore < 70 && myScore <= 50) {
//     console.log("you score a C");
// } else {
//     console.log("you score a P");
// }

// console.log ("Hello Jenny");
// console.log ("Hello Sarah");
// console.log ("Hello Robert");
// console.log ("Hello Alice");
// console.log ("Hello Peter");

const names = ["Sarah", "Peter", "Alice", "Robert", "Jenny", "Frank"];
console.log(names.length);
for (let i = 0; i < names.length; i++) {
  console.log("hello", names[i]);
}

let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
  { name: "cap", price: 40 },
];

let total =
  shoppingCart[0].price +
  shoppingCart[1].price +
  shoppingCart[2].price +
  shoppingCart[3].price;

console.log(total);
let sum = 0;
for (let i = 0; i < 5; i++) {
  sum = sum + shoppingCart[i].price;
  console.log("intermediate sum", sum);
}

console.log(sum);
