/***** Оголошення змінних *****/

// let value;
// value = 15;
// value = 20;

// console.log(value);

/***** Примітивні типи даних ****/

// Number

// let value = 10.45;
// console.log(value);

// console.log(5 === 5);
// Особливий підтип NaN
// console.log(NaN === NaN);
// console.log(Number('22.5aa'));
// console.log(undefined + 1);
// console.log(null + 1); // 0 + 1
// console.log(false + 1); // 0
// console.log(true + 1); // 1 + 1

// String

// Типи рядків '' "" ``

// console.log("I'm");

// console.log('Total 25 + 15');
// const total = 25 + 15;
// console.log(`Total ${total}`);

// Boolean (true, false)
// true  => 1
// false => 0

// undefined

// null

// перевірка типу даних з яким працюємо метод typeof
// const value = '10';
// console.log(typeof value);
// console.log(typeof value === 'string');

/***** Комунікація з користувачем та можливість відображення якогось результату *****/

// console.log('result', 10 + 15); використовується на етапі розробки, має бути відсутнім в девтулзах
// console.log('result', 10 + 15);
// console.log('result', 10 + 15);
// alert('Привіт вчи JS'); тільки ОК

// const message = prompt("Введіть і'мя")
// console.log(message);
//  Введення даних від користувача

// const result = confirm('Будеш вчити JS ?');
// console.log(result); // ОК або Cancel

/***** Основні оператори *****/

// >
// console.log(25 > 21);

// <
// console.log(25 < 24);
// ==

// console.log('false' == 0);
// console.log(false == 0);

// ===

// console.log(Number('25') === 25);

// <=
// console.log(24 <= 25);
// console.log(25 <= 25);
// >=

// console.log(26 >= 20);
// console.log(26 >= 26);

// !=
// console.log('1' != 1);

// !==
// console.log('1' !== 1);

// Приклади роботи

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya'); порівняння по unicode і маленька літера буде завжди більша за велику

// console.log('a' < 'aAbBc');
// console.log('Papaya' === 'papaya');

/***** Значення які завжди будуть конвертовані до false (Обов'язково!!!) *****/

//  0 (число нуль)
// console.log(Boolean(0));
// // // "" (порожній рядок)
// console.log(Boolean(''));
// // // NaN
// console.log(Boolean(NaN));
// // NaN не дорівнює NaN
// // // undefined
// console.log(Boolean(undefined));
// // // null
// console.log(Boolean(null));
// // // false
// console.log(Boolean(false));

/***** Логічні оператори (в логічних операторах немає порівняння по юнікоду)*****/
// const sum = 10
// console.log(0 < sum  && sum < 20);
// ! логічний оператор інверсії - тобто заперечення
// console.log(10 !== 10);
// console.log(!"");
// console.log(Boolean(''));
// console.log(!!''); щоб не приводити до буля
// Приклад
// const message = prompt()
// console.log(message);
// console.log(Boolean(message));
// if (!message) {
//     console.log("Рядок порожній");
// }

// || шукає перше значення яке приводиться до тру та повертає його, оператор або

// console.log(2 || 0 || 1);

// ?? реагує лише на null undefined, оператор нульового порівняння

console.log(0 ?? 1);
console.log(false ?? 0);
console.log(null ?? 1);
console.log(undefined ?? 10);

// let qty; //undefined

// console.log(qty ?? 'Такого товару не знайдено');

// && повертає перше значення, що було конвертоване до фолс або останнє до тру
// console.log(false && 1);
// console.log(NaN && 2);

// console.log(1 && 5 && 23);
// console.log(1 && 0 && 23);

// console.log(1 || 0 && 23); && приорітетніший ніж ||

// Приклади роботи

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log( 3 ||true || 4);

// console.log('' || false || 7);

// console.log(null || 2 || undefined);

console.log("" ?? 4);

console.log(false ?? 7);

console.log(null ?? 7);

console.log(undefined ?? 7);

/***** Математичні оператори *****/

// const value = 10
// +
// const result = value + 15
// -
// const result = value - 5
// *
// const result = 10 + value * 5
// /

// %
// const result = value % 2 !== 0
// console.log(result);
// const result = !(value % 2) //=>  10 % 2 => !0
// console.log(result);
// console.log(Boolean(0)) === console.log(!!0);

// false => HE HE 0
/***** Комбіновані оператори *****/

// +=

// -=

// *=

// /=

/***** Методи для роботки з числами (тип даних Number) *****/

// const str = '25.7a32px';
// Number.parseInt() відібрати ціле число, або до крапки, або до моменту що не являється числом

// console.log(Number.parseInt(str));
// Number.parseFloat() відбирається все те, що приводиться до числа і якщо зустрічається елемент,
// який не може бути приведений до числа ми одразу пририваємо виконання
// console.log(Number.parseFloat(str));
// Number.isNaN() нічого самостійно не перетворює, фактично дивиться чи йому прийшов NaN
//   та метод isNaN() спочатку робить конвертацію до числа
// const num = Number(str) // NaN
// console.log(Number.isNaN(num));
// console.log(isNaN(num));
// console.log('=====================================');

// const str = '25.7a32px';
// console.log(typeof str);
// console.log(Number.isNaN(str));// NaN //String
// console.log(isNaN(str)); //Number(str) => NaN

// let value;

// value += 1; undefined + 1 = NaN
// console.log(value);
// console.log(Number.isNaN(value))
// console.log(Number.isNaN(str))
// console.log(num === NaN);

// Класс Math
// const value = 11.500
// console.log(Math.floor(value)); округлює в меншу сторону

// console.log(Math.ceil(value)); округлює в більшу сторону нехтуючі математичними правилами

// Math.round()
// console.log(Math.round(value)); округлення по математичним правилам

// console.log(Math.pow(5, 4)); підннесення до степеню
// console.log(5 ** 4); аналог

/***** Методи та властивості для роботки з рядками (тип даних String) *****/

// const str = 'Hello world';
// // length
// console.log(str.length);
// // toLowerCase()
// console.log(str.toLowerCase());
// // toUpperCase()
// console.log(str.toUpperCase());
// indexOf()

// console.log(str.indexOf(' '));
// console.log(str.indexOf('H'));
// console.log(str.includes('world'));
// const str = 'Hello world';
// endsWith()
// console.log(str.endsWith(' world'));
// startsWith()
// console.log(str.startsWith('h'));
// replace() замінює перший елемент, який знайде
// console.log(str.replace('l', '🍕'));
// console.log(str);
// // replaceAll() змінить всі елементи, які підпадають під наш пошук
// console.log(str.replaceAll('l','🍟'));
// slice() вирізає частину рядка з початкового індексу до кінцевого але невключно

// console.log(str.slice(0, str.length-1));
// console.log(str);

// **************************************** Практика ****************************** //

// Task - 1

// Виконавши математичні операції та застосувавши шаблоні рядки виведи в консоль загальну кількість та ціну за кожен продукт та за всі продукти в кошику

// const apple = "🍎";

// const appleQuantity = 8;

// const applePrice = 34;

// const  appleMessage = `${apple} total cost ${appleQuantity * applePrice}`
// console.log(appleMessage);
// const lemon = "🍋";

// const lemonQuantity = 3;

// const lemonPrice = 72;

// // const lemonMessage = lemon + ' total cost ' + (lemonQuantity + lemonPrice)
// // console.log(lemonMessage);
// const cherry = '🍒';

// const cherryQuantity = 3;

// const cherryPrice = 72;

// const cherryMessage = `${cherry} total cost ${cherryQuantity * cherryPrice}`;

// console.log(cherryMessage);
// const result = `Total ${(applePrice * appleQuantity) + (lemonQuantity * lemonPrice) + (cherryQuantity * cherryPrice)}`

// console.log(result);

// Task - 2

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 450;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// const result = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
// console.log(result);

// Task - 3

// Виконай рефакторинг коду щоб уникнути помилок

// const name = 'Harry'
// const message = `Hello my name is ${name}`
// console.log(message);

// const delivery = 25;
// const price = 190;
// const message = `Total purchase, price ${delivery + price}`;

// console.log(message);

// Task - 4
// Виконай рефакторинг коду так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = 0;
// const defaultValue = 10;
// const value = null ?? defaultValue;
// console.log(value);

// const KEY_AUTHORIZATION = 'qwerty111';
// console.log(KEY_AUTHORIZATION);

// Приклади циклів

// let password = "";
// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// let clientCounter = 23;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// const target = 100;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password = "") { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// const age = 20;
// console.log(age > 10 && age < 30);
// console.log(true && 3); // 3

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if (totalSpent >= 50000) {
//   discount === GOLD_DISCOUNT;
// } else if (totalSpent >= 20000 && totalSpent < 50000) {
//   discount === SILVER_DISCOUNT;
// } else if (totalSpent >= 5000 && totalSpent < 20000) {
//   discount === BRONZE_DISCOUNT;
// } else {
//   discount === BASE_DISCOUNT;
// }
//   // Change code above this line
//   return discount;
// }

// const age = 13;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // "adult"

// let cost;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }
// console.log(cost);

// function formatMessage(message, maxLength) {
//   let result;

// if (message.length <= maxLength) {
//   result = message;
// } else {
//   result = message.slice(0, maxLength) + "...";
// }
//     return result;
// }
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));

// function add(a, b, c) {
//   // Change code below this line

// return a + b + c;

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// let cost;
// const subscription = "pro";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// let inputValue = null;

// console.log(typeof inputValue); // "object"

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41

// console.log(Math.max(20, 10, 50, 40));

// console.log(Math.pow(3, 4));

// const age = 20;
// console.log(age > 10 && age < 30);
