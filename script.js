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


// 20
let x = 5;
let n = 3;

function pow(x, n) {
    console.log(x ** n);
}

pow(x, n);

// let str = `a
// b
// c`;
// console.log(str);

// console.log("true" * 7);

// console.log(10 / 0);

// console.log(-10 * 0);

// console.log(10 / -0);

// document.write(admin);
