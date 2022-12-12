// ///// COnditional Statements
// ///1
// //Given a variable var n = 30;
// // Write a program to check if a given variable is greater than 100.
// // Output: The given number 30 is less than 100.

// let n = 2;

// if (n > 100) {
//   console.log(`The Given ${n} is Greater 100`);
// } else if (n == 100) {
//   console.log(`The Given ${n} is Equal 100`);
// } else {
//   console.log(`The Given ${n} is lesser 100`);
// }

// //2
// // Given a variable var monthOfYear = 1;
// // monthOfYear can take any value between 1 to 12. If we change its value accordingly, display a message.
// // E.g.  monthOfYear  = 4;
// // Output: We are in April month.

// let monthOfYear = 1;

// switch (monthOfYear) {
//   case 1:
//     console.log(`We are in January Month`);
//     break;

//   case 2:
//     console.log(`We are in febuary Month`);
//     break;

//   case 3:
//     console.log(`We are in March Month`);
//     break;

//   case 4:
//     console.log(`We are in April Month`);
//     break;

//   case 5:
//     console.log(`We are in May Month`);
//     break;

//   case 6:
//     console.log(`We are in June Month`);
//     break;

//   case 7:
//     console.log(`We are in July Month`);
//     break;

//   case 8:
//     console.log(`We are in August Month`);
//     break;

//   case 9:
//     console.log(`We are in September Month`);
//     break;

//   case 10:
//     console.log(`We are in October Month`);
//     break;

//   case 11:
//     console.log(`We are in november Month`);
//     break;

//   case 12:
//     console.log(`We are in December Month`);
//     break;
// }

// //3
// // Write JS code to check if a variable n is odd or even.
// // E.g n=7
// // Output: The given number is odd.

// let a = 33;

// if (a % 2 == 0) {
//   console.log(`The Given Number ${a} is Even Number`);
// } else {
//   console.log(`The Given Number ${a} is odd Number`);
// }

// //4
// // Write JS code to check and print the maximum number between 2 variables.
// // E.g a=7, b=10;
// // Output: b is greater than a.

// let x = 10;
// let y = 9;

// if (x > y) {
//   console.log(`x ${x} is greater than y ${y}`);
// } else if (x < y) {
//   console.log(`x ${x} is leasser than y ${y}`);
// } else {
//   console.log(`x ${x} is equal to  y ${y}`);
// }

// //6

// // Given two variables a, b. Check if that variable is even and it is less than  b.
// // If a is even and less than b. Print: a is even and less than b.
// // If a is odd and less than b. Print: a is odd and less than b.
// // If a is odd and greater than b Print: a is odd and greater than b.
// // If a is even and greater than b Print: a is even and greater than b.

// let s = 12;
// let t = 33;

// if (s % 2 == 0 && s < t) {
//   console.log(`S ${s} is even and lesser than T ${t}`);
// } else if (s % 2 != 0 && s < t) {
//   console.log(`S ${s} is odd and lesser than T ${t}`);
// } else if (s % 2 == 0 && s > t) {
//   console.log(`S ${s} is even and greater than T ${t}`);
// } else {
//   console.log(`S ${s} is Equal to T ${t}`);
// }

// //7
// // Create an array of any numbers e.g. arr = [14, 35, 65, 78, 92, 42];
// // Create a variable index which takes any value e.g. index = 4.
// // Now write a program to check if the element in array at index 4 is odd or even.
// // E.g. index = 3;  Output: 78 is an even number.
// // E.g. index = 1;  Output: 35 is an odd number.

// // arr = [14, 35, 65, 78, 92, 42];
// // index = 3;

// // console.log();

// // if (arr[index - 1] % 2 == 0) {
// //   console.log(`${arr[index - 1]} is an even number`);
// // } else {
// //   console.log(`${arr[index - 1]} is an odd number`);
// // }

// //8

// // Create an array of any numbers e.g. arr = [14,  36, 45, 78, 92, 42];
// // Create a variable index which takes any value e.g. index = 4.
// // Now write a program to check if the element in the array at index 4 is divisible by 2 and 3 both and print messages accordingly.
// // Index = 3 Output: 78 is not divisible by 2 and 3.
// // Index = 3 Output: 36 is divisible by 2 and 3.

// arr = [14, 36, 45, 78, 92, 42];
// index = 4;

// if (arr[index - 1] % 2 == 0 && arr[index - 1] % 3 == 0) {
//   console.log(`${arr[index - 1]} is Divisible by 2 &3`);
// } else {
//   console.log(`${arr[index - 1]} is not Divisible by 2 &3`);
// }

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /// loops
// 1; //
// // Write JS code to print up to 10 numbers.

// // for (let i = 0; i <= 10; i++) {
// //   console.log(i);
// // }
// 2; //
// // Write JS code to print numbers in reverse order from 100 to 1.

// // for (let i = 100; i >= 1; i--) {
// //   console.log(i);
// // }
// 3; //
// // Write JS code to print odd numbers up to 100.
// // Output: 1 3 5 7 9…

// for (let i = 0; i <= 100; i = i + 2) {
//   console.log(i);
// }

// 4; //
// // create a variable n with any value. e.g n = 3 Write JS code to print up to n numbers.
// // Output: 1   2   3

// let q = 55;

// for (let i = 1; i <= q; i++) {
//   console.log(i);
// }

// 5; //

// // create a variable n with any value. e.g n = 10 Write JS code to print only even numbers up to n.
// // Output: 2   4   6   8   10

// let e = 33;
// for (let i = 0; i <= e; i = i + 2) {
//   console.log(i);
// }

// 6; //

// // create a variable n with any value. e.g n = 10. Write JS code to print only odd numbers up to n.
// // Output: 3   5   7   9

// let r = 33;

// for (let i = 0; i <= r; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// 7; //

// // create a variable n with any value. e.g n = 10 Write JS code to print only the numbers divisible by 3 up to n.
// // Output: 3   6   9    (upto 10)

// let w = 22;

// for (let i = 1; i <= w; i++) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
// }

// 8; //
// // Write a JS program to print only the numbers divisible by 2 and 3 both up to 100.
// // Output: 6   12   18    (upto 100).

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     if (i % 3 == 0) {
//       console.log(i);
//     }
//   }
// }
// // for (let i = 1; i <= 100; i++) {
// //   if (i % 2 == 0 && i % 3 == 0) {
// //     console.log(i);
// //   }
// // }

// 9; //
// //
// //
// // Write JS code to print numbers divisible by 3 or 5 up to 100.
// // Output: 3   5   6   9   10   12   15    (upto 100)

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 || i % 5 == 0) {
//     console.log(i);
//   }
// }

// 10; //

// // create a variable n. Write a JS code to print the table of a given number up to 10 in the following format. E.g. n = 3;
// // Output: 3 * 1 = 3          3 * 2 = 6         3 * 3 = 9           Upto 3 * 10 = 30
// let f = 4;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${f} * ${i} = ${i * f}`);
// }

// 11; //

// // Create a variable n. Write a JS program to print numbers from n to 0 in reverse order. E.g. n = 9
// // Output:    9      8     7   upto 0.

// let g = 16;

// for (let i = g; i >= 0; i--) {
//   console.log(i);
// }

// 12; //

// // Create a variable n. Write a program to print the sum of all the numbers starting from 1 up to n. e.g. n = 4;
// // Output:    10 (1+2+3+4)

// let h = 4;
// let sum = 0;
// for (let i = 1; i <= h; i++) {
//   sum = sum + i;
// }
// console.log(sum);
// // pending
// 13; //
// // Write a program to print a square of numbers from 1 to 100.
// // Output:           1          4             9              16            (upto 100).

// for (let i = 1; i <= 100; i++) {
//   console.log(`Square Root of ${i} is ${i * i}`);
// }
// for (let i = 1; i <= 100; i++) {
//     let square = i * i;
//     if (square <= 100) {
//       console.log(square);
//     }
//   }

// // 14
// // Take two variables: start and end. The start variable will contain the start of the loop and the end variable will contain the end of the loop. Write a for loop to print numbers from start to end.
// // E.g. start = 14, end = 20
// // Output: 14 15 16 17 18 19 20

// let start = 40;
// let end = 50;

// for (let i = start; i <= end; i++) {
//   console.log(i);
// }

// 15; //
// // Create an array of any random numbers and name it num. Write a program to print all the elements of that array.
// // E.g. num = [232,45,67,64,56,90];
// // Output:
// // 232
// // 64
// // 56
// // 90

// let num = [232, 45, 67, 64, 56, 90];

// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

// 16; //
// // Create an array of any random numbers and name it num. Write a program to print all even numbers of that array.
// // E.g. num = [232,45,67,64,56,90].
// // Output:
// // 232
// // 64
// // 56
// // 90

// let numEVEN = [232, 45, 67, 66, 64, 56, 90, 33, 55, 65, 88];

// for (let i = 0; i <= numEVEN.length; i++) {
//   if (numEVEN[i] % 2 == 0) {
//     console.log(numEVEN[i]);
//   }
// }
// 17; //
// // Create an array of any random numbers and name it num. Write a program to print the addition of all numbers of that array.
// // E.g. num = [10,20,30,40,50].
// // Output: 150

// let numADD = [10, 20, 30, 40, 50];

// let arraysum = numADD[0];
// for (i = 1; i < numADD.length; i++) {
//   arraysum = arraysum + numADD[i];
// }
// console.log(arraysum);
