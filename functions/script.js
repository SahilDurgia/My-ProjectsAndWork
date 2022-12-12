//1
// Create a function addition that takes two numbers and prints their addition in the console.

// E.g.  addition(10, 20)
// Output: 30

const addition = function (a, b) {
  console.log(`addition of ${a} and ${b} is ${a + b}`);
};

addition(12, 34);

//2
// Create a function subtraction that takes two numbers and prints their subtraction in the console.

// E.g.  subtraction(20, 10)
// Output: 10

const subtraction = function (a, b) {
  console.log(`Subtraction of ${a} and ${b} is ${a - b}`);
};

subtraction(10, 2);

//3
// Create a function multiplication that takes two numbers and prints their multiplication in the console.

// E.g.  multiplication(10, 20)
// Output: 200
const multiplication = function (a, b) {
  console.log(`multiplication of ${a} and ${b} is ${a * b}`);
};

multiplication(2, 4);

//4
// Create a function division that takes two numbers and prints their addition in the console.

// E.g.  division(20, 2)
// Output: 10

const division = function (a, b) {
  console.log(`division of ${a} by ${b} is ${a / b}`);
};

division(20, 10);

//5
// Create a function greeting that takes a name and prints the following message in the console.

// E.g.  greeting(“Akshay”)
// Output: Hello Akshay,  how are you?

const greeting = function (name) {
  console.log(`Hello ${name}, how are you?`);
};
greeting("sahil");

//6
// Create a function showAge that takes two values, name and age of a person. and prints the following message in the console.

// E.g.  showAge(“Nikhil”, 23)
// Output: Hello Nikhil,  you are 23 years old.

const showAge = function (name, age) {
  console.log(`Hello ${name}, you are ${age} years old`);
};

showAge("sahil", 22);

//7
// Create a function checkEqual that takes two numbers and checks if the two numbers are equal or not. If the numbers are equal it prints they are equal. Else it prints they are not equal in the console.

// E.g.  checkEqual (10, 20)
// Output: The given numbers are not equal.

const checkEqual = function (a, b) {
  if (a == b) {
    console.log(`a is Equal to b`);
  } else {
    console.log(`a ${a}  is not equal to  b ${b}`);
  }
};
checkEqual(2, 2);
//8
// Create a function multiplyByTwo that takes 1 number and prints that numbers multiplication by 2 in the console..

// E.g.  multiplyByTwo(4)  4 multiplied by 2 is 8 so the output is 8.
// Output: 8

const multiplyByTwo = function (num) {
  console.log(`multiplication of ${num} by 2 is ${num * 2}`);
};
multiplyByTwo(9);

//9
// Create a function checkGreater that takes two numbers which are stored in a and b inside our function. It prints out which number is greater in the console.

// E.g.  checkGreater(10, 20)
// Output: b is greater than a.

// E.g.  checkGreater(40, 13)
// Output: a is greater than b.

const checkGreater = function (a, b) {
  if (a > b) {
    console.log(`A ${a} is Greater than B ${b}`);
  } else if (b > a) {
    console.log(`B ${b} is Greater than A ${a}`);
  } else {
    console.log(`A ${a} is Equal to  B ${b}`);
  }
};
checkGreater(1, 1);

//10
//Create a function checkGreaterThanThird that takes 3 numbers which are stored in a, b and c inside our function. If the addition of a and b is greater than c then print the following message in the console.

// E.g.  checkGreaterThanThird(10, 20, 40)
// Output: addition of 10 and 20 is less than 40.

// E.g.  checkGreaterThanThird(10, 20, 20)
// Output: addition of 10 and 20 is greater than 40.

const checkGreaterThanThird = function (a, b, c) {
  let i = a + b;
  if (i > c) {
    console.log(`Addition of ${a} and ${b} Greater than ${c}`);
  } else {
    console.log(`Addition of ${a} and ${b} less than ${c}`);
  }
};
checkGreaterThanThird(10, 20, 40);
checkGreaterThanThird(10, 20, 20);
/////////////////////////////////////////////////
//11
// Create a function calculator that takes three inputs, two numbers and operation (what to perform). Operation can be “add”, “sub”, “div”, “mul”.  Depending upon the operation value, perform necessary action and print the output:
// E.g.  calculator(20, 30, “add”)
// Output: Addition of 20 and 30 is 50.

// E.g.  calculator(20, 30, “multiplication”)
// Output: Multiplication of 20 and 30 is 600.

const calculator = function (a, b, task) {
  if (task == "add") {
    console.log(`Adition of A ${a} and B ${b} is ${a + b}`);
  }
  if (task == "mul") {
    console.log(`Multiplication of A ${a} and B ${b} is ${a * b}`);
  }
  if (task == "div") {
    console.log(`Division of A ${a} and B ${b} is ${a / b}`);
  }
  if (task == "sub") {
    console.log(`Subtraction of A ${a} and B ${b} is ${a - b}`);
  }
};
calculator(10, 20, "mul");

//12
// Create a function printUpto that takes a number as an argument. The function prints numbers from 1 to that number in the console.
// If the argument passed to the function is less than 1. It prints necessary message

// E.g.  printUpto(20)
// Output: 1
// 2
// 3
// …
// 20

// E.g.  printUpto( -2 )
// Output: The number should be greater than 1.

const printUpto = function (a) {
  for (let i = 1; i <= a; i++) {
    console.log(i);
  }
};
printUpto(3);

//13
// Create a function printDirection that takes 1 argument and its  value is  either “forward” or “backward”.
// Depending Upon the second value. Output will change.
// E.g. printDirection(“forward”)
// Print the numbers from 1 to that 100 in the console.

// E.g. printDirection(“backward”)
// Print the numbers from 100 to that 1 in the console.

const printDirection = function (direction) {
  if (direction == "forward") {
    for (let i = 1; i <= 100; i++) {
      console.log(i);
    }
  } else {
    for (let i = 100; i >= 1; i--) {
      console.log(i);
    }
  }
};
printDirection("backward");

//14
// Create a function printDirection that takes two arguments. 1st is a number and the second value is  either “forward” or “backward”.
// Depending Upon the second value. Output will change.
// E.g. printDirection(10, “forward”)
// Print the numbers from 1 to that number(20) in the console.

// E.g. printDirection(10, “backward”)
// Print the numbers from that number(10) to 1 in the console.

const printDirection1 = function (till, direction) {
  if (direction == "forward") {
    for (let i = 1; i <= till; i++) {
      console.log(i);
    }
  } else {
    for (let i = till; i >= 1; i--) {
      console.log(i);
    }
  }
};
printDirection1(10, "backward");

//15
// Create a function calculateGST that takes 1 argument e.g. totalAmount.
// The function then applies 18% GST on the totalAmount passed to the function and prints the necessary message in the console.

// Note: Percentage formula will be used here.

// E.g.  calculateGST (1000)
// Output: Total Amount after GST is  1180.

const calculateGST = function (totalAmount) {
  let gst = (totalAmount * 18) / 100;
  console.log(`Total Amount After GST is ${gst + totalAmount}`);
};
calculateGST(1000);

//16
// Create a function GSTType that takes 1 argument e.g. typeOfService. The value of typeOfService can be one of the following:
// Goods
// Entertainment
// IT
// Electronics
// Vehicles
// Alcohol
// Healthcare.
// Dine

// 	Following are the GST applied on above values:
// Dine and Healthcare -> 5% GST.
// Entertainment and Goods -> 12% GST.
// IT and Alcohol -> 18%
// Electronics and Vehicles -> 28% GST.

// Depending upon what value is passed to GSTType. Print appropriate message.

// E.g.  GSTType(“Goods”)
// Output: GST for Goods will be 12%.
// E.g.  GSTType(“Healthcare”)
// Output: GST for  Healthcare will be 5%.
// E.g.  GSTType(“Electronics”)
// Output: GST for Electronics will be 28%.
const GSTType = function (type) {
  if (type == "Goods" || type == "Entertainment") {
    console.log(`GST for ${type} will be 12%.`);
  } else if (type == "IT" || type == "Alcohol") {
    console.log(`GST for  ${type}  will be 18%.`);
  } else if (type == "Healthcare" || type == "Dine") {
    console.log(`GST for  ${type}  will be 5%.`);
  } else if (type == "Vehicles" || type == "Electronics") {
    console.log(`GST for  ${type}  will be 28%.`);
  } else {
    console.log(`${type} is not a vaild entry`);
  }
  //   switch (type) {
  //     case "Goods":
  //       console.log(`GST for Goods will be 12%.`);
  //       break;
  //     case "Entertainment":
  //       console.log(`GST for Entertainment will be 12%.`);
  //       break;
  //     case "IT":
  //       console.log(`GST for  IT  will be 18%.`);
  //       break;
  //     case "Alcohol":
  //       console.log(`GST for Alcohol will be 18%.`);
  //       break;
  //     case "Healthcare":
  //       console.log(`GST for Healthcare will  be 5%.`);
  //       break;
  //     case "Dine":
  //       console.log(`GST for Dine will  be 5%.`);
  //       break;
  //     case "Electronics":
  //       console.log(`GST for Electronics will  be 28%.`);
  //       break;
  //     case "Vehicles":
  //       console.log(`GST for Vehicles will  be 28%.`);
  //       break;
  //     default:
  //       console.log(`${type} is not a vaild entry`);
  //   }
};

GSTType("Goods");
GSTType("Entertainment");
GSTType("IT");
GSTType("Electronics");
GSTType("Vehicles");
GSTType("Dine");
GSTType("Healthcare");
GSTType("Alcohol");

GSTType("tyre");

17; //

// Now using the above 2 examples. Create a function CalculateGSTOnService function which takes 2 arguments.
// 1st argument -> totalAmount
// 2nd argument -> typeOfService
// Depending upon the values passed, calculate and print the message as shown in example below.

// E.g.  CalculateGSTOnService(1000, “Electronics”)
// Output: GST for Electronics is 28%. Total amount after GST is 1280.

// E.g.  CalculateGSTOnService(1000, “Healthcare”)
// Output: GST for Electronics is 5%. Total amount after GST is 1050.

// E.g.  CalculateGSTOnService(1000, “Goods”)
// Output: GST for Electronics is 12%. Total amount after GST is 1120.

const gstCalc = function (totalAmount, GstPercent, Type) {
  console.log(
    `Gst For ${Type} is ${GstPercent}%. Total Amount After GST is ${
      totalAmount + (totalAmount * GstPercent) / 100
    }`
  );
};

const CalculateGSTOnService = function (ta, ty) {
  if (ty == "Goods" || ty == "Entertainment") {
    let gst = 12;
    gstCalc(ta, gst, ty);
  } else if (ty == "IT" || ty == "Alcohol") {
    let gst = 18;
    gstCalc(ta, gst, ty);
  }
  //
  else if (ty == "Electronics" || ty == "Vehicles") {
    let gst = 28;
    gstCalc(ta, gst, ty);
  } else if (ty == "Dine" || ty == "Healthcare") {
    let gst = 5;
    gstCalc(ta, gst, ty);
  } else {
    console.log(`${ty} is not a valid entry`);
  }
};
CalculateGSTOnService(1000, "Goods");
CalculateGSTOnService(1000, "Entertainment");
CalculateGSTOnService(1000, "IT");
CalculateGSTOnService(1000, "Electronics");
CalculateGSTOnService(1000, "Vehicles");
CalculateGSTOnService(1000, "Healthcare");
CalculateGSTOnService(1000, "Alcohol");
CalculateGSTOnService(1000, "Dine");
CalculateGSTOnService(1000, "hotel");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//1

const addition1 = function (a, b) {
  return `addition of ${a} and ${b} is ${a + b}`;
};

console.log(addition1(12, 34));

//2
const multiplication1 = function (a, b) {
  return `multiplication of ${a} and ${b} is ${a * b}`;
};
console.log(multiplication1(2, 4));

//3

const division1 = function (a, b) {
  return `division of ${a} by ${b} is ${a / b}`;
};
console.log(division1(20, 10));
//4
const subtraction1 = function (a, b) {
  return `Subtraction of ${a} and ${b} is ${a - b}`;
};
console.log(subtraction1(10, 2));

//5
const showAge1 = function (name, age) {
  return `Hello ${name}, you are ${age} years old`;
};
console.log(showAge1("sahil", 22));
