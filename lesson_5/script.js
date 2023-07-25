// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

// Об'єкт
// const user = {
//     name: 'Test user',
//     skills: {
//         html: true,
//         css: true,
//         react: false
//     },
// }

// Звернення до властивостей об'єкта

// console.log(user.name);
// console.log('css', user.skills.css);

// const objectKey = 'name';

// console.log(user[objectKey]);
// console.log(user['name']);

// const user = {
//     name: 'Test user',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// console.log(user.name);
// function getKey(key){ // 'name' 'skills'
//     console.log(user[key])//user['name']
// }
// getKey('name')
// getKey('skills')

// const objectKey = 'skills';
// const skillKey = 'css';

// console.log(user['skills']['css']);
// console.log(user[objectKey][skillKey]);
// console.log(user.skills[skillKey]);
// console.log(user[objectKey].css);

// Зміна значення властивості
// const user = {
//     name: 'Test user',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// user.city = 'Lviv';
// user['age'] = 28;
// console.log(user);

// user.city = 'Odessa';
// console.log(user);

// const user = {
//     name: 'Test user',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// Object.freeze(user.skills);
// user.name = 'Artem';
// user.city = 'Lviv';
// user.skills.html = true;
// console.log(user);

// const user = {
//     name: 'Test user',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// user.city = 'Lviv';
// delete user.city
// console.log(user);

// Методи об'єкта
// const user = {
//     name: 'Artem',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
//     sayHello(city) {
//         // console.log(city);
//         console.log(`Hello my name ${this.name}`);
//     }
// }

// const user2 = {
//     name: 'Den',
//     skills: {
//         html: true,
//         css: true,
//         react: true
//     },
//     sayHello: user.sayHello
// }

// user2.sayHello()
// user.sayHello('Lviv')

// console.log(user);

// Цикл for...in
// const testObj = {
//     name: 'Artem',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     }, sayHello(city) {
//         // console.log(city);
//         console.log(`Hello my name ${this.name}`);
//     }
// }

// const user = Object.create(testObj);
// user.city = 'Lviv'
// console.log(user);

// for (const key in testObj) {
//     if (testObj.hasOwnProperty(key)) {
//         console.log(key, user[key]);
//     }
// }

// Метод Object.keys()
// const user = {
//     name: 'Artem',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// const keys = Object.keys(user);
// for(const key of keys){
//     console.log(key,user[key]);
// }
// console.log(keys);

// Метод Object.values()

// const user = {
//     name: 'Artem',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// const values = Object.values(user);
// const values = Object.values(user.skills);
// console.log(values);

// Метод Object.entries()

// const user = {
//     name: 'Artem',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// const entries = Object.entries(user);
// const entries = Object.entries(user.skills);
// console.log(entries);

// Перерва до 21.05

// Практика //
// Task - 1
// Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.

// function createBasket(product, quantity, price) {
//     const totalPrice = quantity * price;

//     console.log('product', product);
//     // const basket = {
//     //     product, // product : 'pizza'
//     //     quantity,
//     //     price,
//     //     totalPrice
//     // }

//     // return basket;

//     return {
//         product,
//         quantity,
//         price,
//         totalPrice
//     }
// }
// console.log(createBasket('pizza', 3, 120));
// console.log(createBasket('aplle', 13, 1200));

// Task - 2
// Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.

// const players = {
//     Den: 60,
//     Kate: 130,
//     William: 45,
//     Matthew: 120,
//     Ethan: 40,
//     David: 55,
// }

// function getTime(obj) {
//     const values = Object.values(obj);
//     let total = 0;
// console.log(values);
//     for (const value of values) {
//         total += value;
//     }

//     return `Count of players ${values.length}, average time ${total/values.length}`
// }

// console.log(getTime(players));

// Task - 3
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//     { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//     { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
//     { name: "Oleksii", books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"], age: 26 },
// ]

// function getTotalAge(arr) {
//     let totalAge = 0;

//     for (const user of arr) {
//         // console.log(user.name, 'age' in user);

//         if ('age' in user) {
//             console.log(`${user.name} - ${user.age}`);
//             totalAge += user.age
//         }
//         // if (user.hasOwnProperty('age')) {
//         //     totalAge += user.age
//         // }
//     }
//     console.log(totalAge);
// }
// console.log(getTotalAge(friends));

// const user = {
//     name: "Anna",
//     books: ["Bible", "Harry Potter"],
//     age: 21
// }
// function getUsers(arr, bookName) {
//     const userNames = [];
//     for (const user of arr) {
//         if (user.books.includes(bookName)) {
//             userNames.push(user.name);
//         }
//     }

//     return userNames.join(', ');
// }
// console.log(getUsers(friends, "Harry Potter"));

// Task - 4
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета

// const hogvarts = {
//     griffindor: [{
//         name: "Harry",
//         points: 17
//     },
//     {
//         name: "Hermiona",
//         points: 19
//     },
//     {
//         name: "Ron",
//         points: 14
//     },
//     ],
//     slizerin: [{
//         name: "Draco",
//         points: 17
//     },
//     {
//         name: "Goyl",
//         points: 14
//     },
//     {
//         name: "Crabbe",
//         points: 5
//     },
//     ],
//     getUserList(faculty) {
//         if (!(faculty in this)) {
//             return 'Faculty not found 😥';
//         }
//         const students = [];
//         for (const student of this[faculty]) {
//             students.push(student.name);
//         }
//         return students.join(', ')
//     },
//     getTotalPoints(faculty) {
//         if (!(faculty in this)) { // ! HE
//             return 'Faculty not found 😥';
//         }
//         let totalPoints = 0;
//         for (const student of this[faculty]) {
//             if ('points' in student) {
//                 totalPoints += student.points;
//             }
//         }

//         return totalPoints;
//     }
// }

// console.log(hogvarts.getUserList('griffindor'));
// console.log(hogvarts.getUserList('slizerin'));
// console.log(hogvarts.getUserList('slitherin'));

// console.log(hogvarts.getTotalPoints('griffindor'));
// console.log(hogvarts.getTotalPoints('slizerin'));
// console.log(hogvarts.getTotalPoints('slitherin'));

// const user = {
//     name: 'Test user',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// let totalKeys = 0;

// for (const key in user) {
//     if (user.hasOwnProperty(key)) {
//         totalKeys += 1
//     }
// }

// console.log(totalKeys);

// console.log(Object.keys(user).length);

// console.log(800 === 000800);
// console.log(123 === 000123);

// 2) чо це ? 800 === 000800 true 123 === 000123 false
// 3) де можна дивитися інфу про оновлення всяких мов щоб бути в курсі всіх нових фішок ?
// 4) я знайшов додаток RunJS там не треба свторювати файли і писати логи там вже показується результат, ви знаєте про цей додаток ? пишу щоб всі змогли спробувати в ньому просто не треба зайвих файлів і браузер відкривати його навіть на заннятях можна використовувати, що скажете ? якраз практика без логів які все одно треба буде потім прибирати
// 5) бачив у вас в джс сніпети для розгортки коду чи можна буде іх отримати в слек ?
// 6) чи є у вас вигорання і якщо є як з ним справлятися ?

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book);
// console.log(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];
// for (const book of books) {
//   // Об'єкт книги
//   console.log(book);
// //   Назва
//   console.log(book.title);
// //   Автор
//   console.log(book.author);
// //   Рейтинг
//   console.log(book.rating);
// }
// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); // ["The Last Kingdom", "На березі спокійних вод", "Сон смішної людини"]

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const accessType = book.isPublic ? "публічному" : "закритому";
// const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType} доступі.`;
// console.log(message);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(lastTag);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// console.log(apartment.location.country);

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// };
// console.log(credentials.email);

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
// const keys = Object.keys(object);

//   for (const key of keys) {
//     propCount += 1;
//   }

//   return propCount;
//   // Change code above this line
// }
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for (const product of products) {
//   if (productName === product.name) {
//     return product.price;
//   }

//   }

// return null;
//   // Change code above this line
// }
// getProductPrice('Gri');
// console.log(getProductPrice('Gri'));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
  
// let arr = [];
//   for (const product of products) {
//     const keys = Object.keys(product);
//     if (keys.includes(propName)) {
//       arr.push(product[propName]);
//     }
     
//   }
//       return arr;
    
// }


// function getAllPropValues(propName) {
//   // Change code below this line
// const propValues = [] ;

//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       propValues.push(product[propName]);
//     }
//   }

//   return propValues;
// }


  // Change code above this line

// function getAllPropValues(propName) {
//     // Change code below this line
//     let arr = [];
//     for (const product of products) {
         
//         switch (propName) {
//             case "name":
//                 arr.push(product.name);
//                 break;
//             case "price":
//                 arr.push(product.price);
//                 break;
//             case "quantity":
//                 arr.push(product.quantity);
//                 break;
//         }
//     }
//     return arr; 
    
// }

// function getAllPropValues(propName) {
//   // Change code below this line
//   let arr = [];
//   for (const product of products) {
  
//     if (propName === "name") {
//       arr.push(product.name);
      
//     }
//     if (propName === "price") {
//       arr.push(product.price);
      
//     }
//     if (propName === "quantity") {
//       arr.push(product.quantity);
      
//     }
    
//   }

//  return arr;
//   // Change code above this line
// }
// getAllPropValues("price");
// console.log(getAllPropValues("price"));



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//     let totalPrice = 0;

//     for (const product of products) {
//         totalPrice = product.price * product.quantity;
//     }


//   // Change code above this line
// }
// calculateTotalPrice("Radar");
// console.log(calculateTotalPrice("Radar"));

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']
// console.log(book);




// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Генрі Сибола";
// console.log(user.name); // 'Генрі Сибола'


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Об'єкт книги
//   console.log(book);
//   // Назва
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }
// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2



// const temps = [14, -4, 25, 8, 11];

// // В консолі буде масив
// console.log(temps);
// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN

// // В консолі буде набір окремих чисел
// console.log(...temps);
// // ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25


// const lastWeekTemps = [14, 23, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]



const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
  },
  {
    title: "Сон смішної людини",
    author: "Федір Достоєвський",
    rating: 7.75,
  },
];

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = (totalRating / books.length).toFixed(1);
console.log(averageRating); // 8.2