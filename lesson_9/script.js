"use strict";


// function declaration

// foo()
// function foo(){

// }

// foo()

// function expression

// const foo = function () {

// }
// foo()



// arrow function

// const foo = () => {

// }

// foo()






// declaration expression



// arrow

// this може існувати тількі в середині функції і якщо значення властивості обєкту задати this,
// він буде посилатися на глобальний обєкт Window або з 'use strict' (суровий режим) type = "module" - на undefined
// arrow function або глобальний this - "use strict" не опрацьовує, лише type = "module"
// якщо ми будемо вживати this в рамках function declaretion він відповідно буде посилатися на Window або 
// при наявності строгого режиму на undefined

// delete оператор
// const obj = {
//     name: 'Test name',
//     hello() {
//         console.log(this);
//         console.log(this.name);
//     }
// }
// obj.hello()


// const objA = {
//     name: 'User name',
//     hello: obj.hello
// }

// objA.hello()
// 'use strict';

// const person = {
//     name: 'Alice',
//     customThis: this
// }
// console.log(person);
// 'use strict'
// function foo(){  //expression
//     console.log(this);
// }
// foo()

// 'use strict';
// const arrow = () => {
// console.log(this);
// }

// arrow()



// const person = {
//     name: 'Alice',
//     // hello() { // declaration
//     //     console.log(this.name);
//     // }
//     // hello: function() { // expression
//     //     console.log(this.name);
//     // }
//     skills: {
//         html: true,
//         css: false,
//         js: true,
//         showSkills() {
//             // console.log(this);
//             const keys = Object.keys(this)
//             const skills = keys.filter((key) => this[key] && typeof this[key] !== 'function')
//             console.log(skills);
//         }
//     }
// }
// person.skills.showSkills()



// const person = {
//     name: 'Alice',
//     years: 30,
//     // hello: () => {
//     //     console.log(this);
//     // }
//     hello() {
//         // console.log('declaration', this);
//         const arrow = () => {
//             console.log('arrow', this);
//         }
//
//         return arrow;
//     }
// }
// const response = person.hello();

// response();
// response();



// const test = {
//     brand: 'BMW',
//     maxSpeed: 200,
//     price: 10000,
//     getPrice() {
//         console.log('getPrice',this);

//         const getMaxSpeed = () => {
//             console.log('arrow getMaxSpeed',this);

//             // const getBrand = () => {
//             //     console.log('arrow getBrand',this);
//             // }
//             // getBrand()
//         }
//         getMaxSpeed()
//     }
// }

// test.getPrice()



// const test = {
//     brand: 'BMW',
//     maxSpeed: 200,
//     price: 10000,
//     getPrice() {
//         console.log('getPrice',this);

//         function getMaxSpeed () {
//             console.log('declaration getMaxSpeed',this);
//         }
//         getMaxSpeed()
//     }
// }

// test.getPrice()



// const test = {
//     brand: 'BMW',
//     maxSpeed: 200,
//     price: 10000,
//     getPrice: () => {
//         console.log('arrow getPrice', this);

//         const getMaxSpeed = () => {
//             console.log('arrow getMaxSpeed', this);
//         }
//         getMaxSpeed()
//     }
// }

// test.getPrice()




// call apply bind
// const person = {
//     name: "Alice",
//     city: 'Lviv'
// }



// function foo(car, speed) {
//     console.log('car', car);
//     console.log('speed', speed);
//     console.log(this);
// }
// foo()
// foo.call(person, 'BMW', 90)
// const foo= function (car, speed) {
//     console.log('car', car);
//     console.log('speed', speed);
//     console.log(this);
// }


// const foo = (car, speed) => {
//     console.log('car', car);
//     console.log('speed', speed);
//     console.log(this);
// }

// foo.call(person, 'BMW', 90)


// apply

// function foo(car, speed) {
//     console.log('car', car);
//     console.log('speed', speed);
//     console.log(this);
// }
// foo.apply(person, ['BMW', 90,"hello", 345]);
// // foo.apply(person1, ['Audi', 90]);

// foo.call(person, ...['BMW', 90]);


// bind
// const person1 = {
//     name: "Kate",
//     city: 'Odessa'
// }
// function foo(car, speed) {
//     // console.log(arguments);
//     console.log('car', car);
//     console.log('speed', speed);
//     console.log(this);
// }

// const copy = foo.bind(person);
// // console.log(copy);
// copy('Volvo', 100)
// copy('Audi', 120)
// foo()

// foo('Volvo', 100)


// const foo = (car, speed) => {
//     // console.log(arguments);
//     console.log('car', car);
//     console.log('speed', speed);
//     console.log(this);
// }
// const copy = foo.bind(person1);
// copy('Volvo', 100)
















// Task - 1
// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки прискорення в системі круїз контролю.
// const car = {
//     speed: 0,
//     accelerate() {
//         this.speed += 10;
//         console.log(`Автомобіль ${this.brand} прискорюється. Поточна швидкість ${this.speed}`);
//     },
//     decrease() {
//         if(this.speed <= 0){
//             console.log('Авто зупинилось');
//             return
//         }
//         this.speed -= 10;
//         console.log(`Автомобіль ${this.brand} гальмує. Поточна швидкість ${this.speed}`);
//     }
// }

// const car2 = {
//     brand: 'BMW',
//     speed: 40,
//     // accelerate: car.accelerate
// }

// const car3 = {
//     brand: 'Volvo',
//     speed: 70,
// }

// const bmw = car.accelerate.bind(car2);
// const bmwDecrease = car.decrease.bind(car2);
// const volvo = car.accelerate.bind(car3)

// bmw()
// bmw()
// bmwDecrease()
// bmwDecrease()
// bmwDecrease()
// bmwDecrease()
// bmwDecrease()
// bmwDecrease()
// bmwDecrease()
// for (let i = 0; i < 8; i += 1) {
//     bmw()
// }





// Task - 2
// Потрібно створити систему для продажу в інтернет магазині.
// Є об'єкт продукта в якому потрібно створити метод discount(буде приймати знижку клієнта в %) який буде повертати вартість товара з врахуванням знижки
// Є об'єкт клієнта який містить ім'я та індивідуальну знижку, потрібно створити метод purchase, який буде викликати метод для розрахунки вартості товару та логувати повідомлення про покупку
// Alice придбала товар зі знижкою в 8%, сума до сплати 460грн"

// const product = {
//     name: "Smartphone",
//     price: 500,
//     discount(percent) {
//         return this.price * (100 - percent) / 100
//     }
// };

// const client = {
//     name: "Alice",
//     discountPercent: 11,
//     purchase() {
//         const price = product.discount(this.discountPercent);
//         console.log(`${this.name} придбала товар зі знижкою в ${this.discountPercent}%, сума до сплати ${price}грн`);
//     }
// };

// const client2 = {
//     name: 'Kate',
//     discountPercent: 4,
// }

// const client3 = {
//     name: 'Mark',
//     discountPercent: 0,
// }
// client.purchase.call(client2);
// client.purchase.call(client3);
// client.purchase();



// Task - 3
// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this

// const tesla = {
//     brand: "Tesla",
//     speed: 70,
// };

// const audi = {
//     brand: 'Audi',
//     speed: 70,
// }

// function speedSensor(maxSpeed) {
//     // if (this.speed <= maxSpeed) {
//     //     console.log(`Автомобіль ${this.brand} рухається з безпечною швидкістю`);
//     //     return;
//     // }
//     // console.log(`${this.brand} - Перевищено безпечну швидкість! 😨`);


//     return this.speed <= maxSpeed ? `Автомобіль ${this.brand} рухається з безпечною швидкістю`: `${this.brand} - Перевищено безпечну швидкість! 😨`

// }
// console.log(speedSensor.call(audi, 70));

// console.log(speedSensor.call(tesla, 70));




// Task-4 Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.
// const calculator = {
//     read(a = 0, b = 0) {
//         this.a = a;
//         this.b = b;
//     },
//     add() {
//         return (this.a ?? 0) + (this.b ?? 0)
//     },
//     mult() {
//         return (this.a ?? 1) * (this.b ?? 1)
//     }
// };
// calculator.read(3,4)
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());

// ||

// 6 false значень
// 0
// ''
// NaN
// undefined
// null
// false

// console.log(1 || 'Hello');
// console.log(0 || false);
// console.log(false || NaN);


// ??
// null
// undefined

// console.log(false ?? 'hello');
// console.log(null ?? 'hello');
// console.log(undefined ?? 'hello');
// console.log(null ?? undefined);
// console.log(undefined ?? null);


// const person = {
//     name: 'Alice',
//     skills: ['html', 'ajax',
//         'js', 'css', 'react', 'node'],
//     sortSkills() {
//         this.skills.sort((a, b) => a.localeCompare(b))
//     }
// }
// person.sortSkills()
// console.log(person);


// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const oddNumbers = numbers.filter(number => number % 2); //1 //0 //1



// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//     addItem(newItem) {
        
//      this.items.push(newItem);
//             }
//     removeItem(itemToRemove) {
//         this.items = this.items.filter(item => item !== itemToRemove);
    
//   }
// }
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// // console.log(storage.addItem("Droid"));
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// // storage.removeItem("Prolonger");
// // console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Манго";

console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.name); // 'Манго'

// console.log(dog.hasOwnProperty("legs")); // false
// console.log(dog.legs); // 4



// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue () {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value += str;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padBoth(str) {
//       this.padStart(str);
//       this.padEnd(str);
//   }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//     this.#price = newPrice; }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000



// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//     static chec
//     kPrice(price) {
//     if (price > this.#MAX_PRICE) {
//         return "Error! Price exceeds the maximum";
//     } else {
//         return "Success! Price is within acceptable limits";
//     }
// }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"



// next js - що це???