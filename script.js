"use strict";

// 1
let admin;
let name;
//let age = 49;

// 2
name = "Джон";

// 3
admin = name;

// 4
console.log(admin);
//console.log('Имя администратора ' + admin + ', ему ' + age + ' лет.');

// 5
let house = {
  city: "Moscow",
  address: "Pushkinskaya street",
};

// 6
console.log(house.city);
console.log(house.address);

// 7
let user = {};

// 8
user.name = "John";
console.log(user);

// 9
user.surname = "Smith";
console.log(user);

// 10
user.name = "Pete";
console.log(user);

// 11
delete user.name;
console.log(user);

// 12
let styles = ["Джаз", "Блюз"];
console.log(styles[1]);

// 13
//styles[2] = "Рок-н-ролл";
//styles.push("Шансон");
styles.push("Рок-н-ролл");
console.log(styles);
//console.log(styles.pop());

// 14
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles);

// 15
console.log(styles.shift());

// 16
styles.unshift("Рэп", "Регги");
console.log(styles);

// 17
let result;
let a = 1;
let b = 2;

if (a + b < 4) {
  result = "Мало";
} else {
  result = "Много";
}
// Та же самая конструкция if с использованием условного оператора '?':
console.log(a + b < 4 ? "Мало" : "Много");

// 18
let message;

// if (login == "Сотрудник") {
//   message = "Привет";
// } else if (login == "Директор") {
//   message = "Здравствуйте";
// } else if (login == "") {
//   message = "Нет логина";
// } else {
//   message = " ";
// }

// Та же самая конструкция if с использованием условного оператора '?':
var login = "Сотрудник";
console.log(
  login == "Сотрудник" ? "Привет" : " ",
  login == "Директор" ? "Здравствуйте" : " ",
  login == "" ? "Нет логина" : " "
);

var login = "Директор";
console.log(
  login == "Сотрудник" ? "Привет" : " ",
  login == "Директор" ? "Здравствуйте" : " ",
  login == "" ? "Нет логина" : " "
);

var login = "";
console.log(
  login == "Сотрудник" ? "Привет" : " ",
  login == "Директор" ? "Здравствуйте" : " ",
  login == "" ? "Нет логина" : " "
);

// 19
let c = 11;
let d = 9;

if (c < d) {
  console.log(c);
} else if (d < c) {
  console.log(d);
} else {
}

// 20
function pow(x, n) {
  console.log(x ** n);
}

pow(5, 3);

// Просто Мои примеры
let q = 0;
while (q < 7) {
  console.log(q);
  q++;
}

for (let i = 0; i < 5; i++) {
  // выведет 0, затем 1, затем 2
  console.log(i);
}

// let str = `a
// b
// c`;
// console.log(str);

// console.log("true" * 7);

// console.log(10 / 0);

// console.log(-10 * 0);

// console.log(10 / -0);

// document.write(admin);
