// 1) Переменные типа string
let str1 = "Hello";
let str2 = "World";
let str3 = "JavaScript";
let str4 = "Variables";
let str5 = "Hello";
let str6 = "String";
let str7 = "Type";
let str8 = "Programming";
let str9 = "Example";
let str10 = "App";

// 2) Переменные типа number
let num1 = 42;
let num2 = 3.14;
let num3 = -7;
let num4 = 1000;
let num5 = 0.5;
let num6 = -10;
let num7 = 8.8;
let num8 = 123;
let num9 = -56;
let num10 = 987;

// 3) Переменные типа boolean
let bool1 = true;
let bool2 = false;
let bool3 = true;
let bool4 = false;
let bool5 = true;
let bool6 = false;
let bool7 = true;
let bool8 = false;
let bool9 = true;
let bool10 = false;

// 4) Объекты
let obj1 = {};
let obj2 = { key: "value" };
let obj3 = { num: 42, str: "Type" };
let obj4 = { bool: true, arr: [1, 2, 3] };
let obj5 = { prop: "Property" };
let obj6 = { nested: { inner: "Nested Object" } };
let obj7 = { fruit: "Apple", color: "Red" };
let obj8 = { name: "John", age: 30 };
let obj9 = { lang: "JavaScript", year: 1995 };
let obj10 = { city: "Paris", population: 2141000 };

// 5) Массивы
let arr1 = [1, "two", true];
let arr2 = [10, 20, 30];
let arr3 = ["apple", "banana", "orange"];
let arr4 = [true, false, true];
let arr5 = ["cat", 42, true];
let arr6 = [3.14, 2.718, 1.618];
let arr7 = ["red", "green", "blue"];
let arr8 = [false, true, false];
let arr9 = [null, undefined, "value"];
let arr10 = [5, 10, 15];

// 6) Функции
function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function isEven(num) {
  return num % 2 === 0;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseArray(arr) {
  return arr.slice().reverse();
}

function findMax(numbers) {
  return Math.max(...numbers);
}

function filterStrings(values) {
  return values.filter(value => typeof value === 'string');
}

function calculateAverage(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

function getUniqueValues(arr) {
  return [...new Set(arr)];
}

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
