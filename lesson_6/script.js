// https://www.geeksforgeeks.org/lodash-_-clonedeep-method/

// http://www.circle-lutsk.pp.ua/js_recursion.html



// const arr = [1, 2, 3, 4, 5];
// // const first = arr[0];
// // const second = arr[1];
// // console.log(second);


// const [first, , second, , third] = arr;
// console.log(first);
// console.log(second);
// console.log(third);


// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }
// console.log(user.skills.html);
// const { skills: { html } } = user;
// const { skills, skills: { html, css, js } } = user

// console.log('skills', skills);
// console.log("html", html);



// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }
// const css = 'i don`t know';
// const { skills: { css : cssLanguage } } = user;
// // const { html } = user.skills;
// // console.log(html);

// // console.log(css);
// console.log(cssLanguage);
// // console.log(user);
// console.log(user.skills.css);


// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }
// const user2 = {
//     name: 'Artem',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// function getUserName({ name, skills: { html, css, js } } = {}) {
//     console.log(`Hello my name is ${name}, I know html - ${html}, css - ${css} and js -${js}`);
// }

// getUserName(user)
// getUserName(user2)


// function getUserName(obj) {
//     console.log(`Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`);
// }

// getUserName(user)

// function getUserName(obj) {
//   const { name, skills: { html, css, js } } = obj;
//     console.log(`Hello my name is ${name}, I know html - ${html}, css - ${css} and js -${js}`);
// }

// getUserName(user);






// const users = [{ name: 'Kate' }, { name: 'Alex' }, { name: 'Mark' }];

// const names = [];
// for (const { name } of users){
//     names.push(name)
// }
//     // for (const user of users) {
//     //     names.push(user.name)
//     // }

//     console.log(names);



// const arr = [1, 2, 3];
// const arr2 = [...arr]; //spread
// arr.splice(0, 1)
// console.log(arr === arr2);
// console.log('arr', arr);
// console.log('arr2', arr2);


// const arr = [1, 2, 3];
// const [first, ...args] = arr; // rest

// console.log(first);
// console.log(args);
// console.log('arr',arr);


// function foo(...props){//rest

// }
// foo(...arr)// spread


// const arr = [1, 2, 3];

// const user = {
//     name: 'Test name',
//     age: 22,
//     city: 'Lviv',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }
// function foo(first, second, third) {
//     console.log('first', first);
//     console.log('second', second);
//     console.log('third', third);
// }
// foo('a', 'b', 'c')
// foo(...arr)
// foo(...arr)// foo(1, 2, 3)




// function foo(a, b, ...args) {
//     console.log(args);
//     console.log(arguments);
// }



// foo(1, 2, 3, 4)
// foo(1, 2)
// foo(1, 2, 3, 4, 5, 6, 7, 8)

// const user = {
//     name: 'Test name',
//     age: 22,
//     city: 'Lviv',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }



// function foo({ name, skills: { html, ...props }, ...props2}) {
//     console.log(name);
//     console.log(html);
//     console.log(props);
//     console.log(props2);
// }
// foo(user)

// function foo({ name, age, ...props }) {
//     console.log(name);
//     console.log(age);
//     console.log(props);
// }
// foo(user)



// const user = {
//     name: 'Test name',
//     age: 22,
//     city: 'Lviv',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }


// const copy = { ...user }
// console.log('user', user);
// console.log('copy', copy);
// console.log(copy === user);
// console.log(copy.skills === user.skills);













// Task - 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function calcBMI({ weight, height }) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// console.log(calcBMI({
//     weight: '88,3',
//     height: '1.75'
// }));





// Task - 2 - Операція spread
// Напиши функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.



function createContact(partialContact) {
    return {
        id: Math.random(),
        createdAt: new Date(),
        list: 'default',
        ...partialContact
    }
}

console.log(
    createContact({
        name: 'Mango',
        email: 'mango@mail.com',
        list: 'friends',
    }),
);
console.log(
    createContact({
        name: 'Poly',
        email: 'poly@hotmail.com',
    }),
);




// Task - 3 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// function transformUsername({ firstName, lastName, ...props }) {
//     return {
//         fullName: `${firstName} ${lastName}`,
//         ...props
//     }
// }


// function transformUsername(obj) {
//     const changeKeys = ['firstName', 'lastName'];
//     const keys = Object.keys(obj);
//     const result = {
//         fullName: ''
//     };

//     for (const key of keys) {
//         if (changeKeys.includes(key)) {
//             // result.fullName ? result.fullName += ` ${obj[key]}` : result.fullName = obj[key]
//             result.fullName += `${obj[key]} `
//         } else {
//             result[key] = obj[key]
//         }
//     }
//     console.log(result);
// }

// function transformUsername(obj) {
//     const changeKeys = ['firstName', 'lastName'];
//     const keys = Object.keys(obj);
//     const result = {
//         fullName: `${obj.firstName} ${obj.lastName}`
//     };

//     for (const key of keys) {
//         if (!changeKeys.includes(key)) {
//             result[key] = obj[key]
//         }
//     }
//     return result;
// }


// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     }),
// );


// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@hotmail.com',
//         friendCount: 20,
//     }),
// );


// Task - 4 - Деструктуризація
// Напиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.

// function getStockReport({ companyName, stock }) {
//     const values = Object.values(stock)
//     let total = 0;

//     for(const value of values){
//         total += value
//     }
//     return `${companyName} has ${total} items in stock`;
// }

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         },
//     }),
// ); // "Belacci has 35 item in stock"//



// const rgb = ['122', '180', '255'];
// const [, , blue] = rgb;


// console.log(`Blue ${' '}`); // Blue 255 // Blue  



// Вопрос по глубокому копированию, 
// функция будет вызывать сама себя, в стеке вызовов будет еще один вызов функции?

// obj {
//   x: 2,
//   y {a: [  ], b: { a: 0, b: 1, с: 2 } }
//   z: {a: 0, b: 1, с: 2}
//     }

// function copyArr(arr){
//   var res = [];
//   for (var i in arr) { res.push(arr[i]); }
//   return res;
// }
// function copyObj(obj){
//   res = {};
//   for (var key in obj) {
//     if (typeof obj[key] === 'object') {
//       if (obj[key].length !== undefined) {
//         res[key] = copyArr(obj[key]);
//       } else {
//         res[key] = copyObj(obj[key]);
//       }
//     } else {
//       res[key] = obj[key];
//     }
//   }
//   return res;
// }


// const numbers = [1, 2, 3, [5, [9, 9], 6]]; Приклад рекурсивної фцнкції!!!!
// [5, 18, 6] =>29
// [9, 9] => 18
// function sum(arr) {
//     let total = 0;

//     for (const num of arr) {
//         if (Array.isArray(num)) {
//             total += sum(num)
//         } else {
//             total += num;
//         }
//     }
//     return total;
// }
// console.log(sum(numbers));

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);


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
//   const {hex, rgb} = color;
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);
  
// function add(...args) {
//   let result = 0;
//   for (const arg of args) {
//     result += arg;
    
//   }
//    return result;
//   // Change code above this line
// }
// add(15, 17);
// console.log(add(15, 17));


// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);


// function addOverNum(firstArg, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstArg){
//     total += arg;
//   }
//   }

//   return total;
//   // Change code above this line
// }
// addOverNum(50, 15, 57);
// console.log(addOverNum(50, 15, 57));



// function findMatches(firstArg, ...args) {
//   const matches = []; // Don't change this line
// for (const arg of args) {
//   if (firstArg.includes(arg)) {
//     matches.push(arg)
//   }
// }
//   // Change code above this line
//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//     getPotions() {
//             return this.potions;
//     },
    
//     addPotion(newPotion) {
//         for (const potion of this.potions) {
//             if (potion.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//     return this.potions.push(newPotion);
//   },
//     removePotion(potionName) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (this.potions[i].name === potionName) {
//                 return this.potions.splice(i, 1); 
//             }
//         }
//         return this.potions;
//   },
//     updatePotionName(oldName, newName) {
//         for (const potion of this.potions) {

//             if (potion.name === oldName) {
//                  return potion.name = newName;
//             }
//         }
//         return this.potions;
//   },
//   // Change code above this line
// };
// // atTheOldToad.getPotions();
// // console.log(atTheOldToad.getPotions());
// // atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
// // console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));

// // atTheOldToad.removePotion("Dragon breath");
// // console.log(atTheOldToad.removePotion("Dragon breath"));


// const currentWeekTemps = [23, 17, 18];
// const temps = [14, -4, 25, 8, 11];
// const copyOfTemps = [...temps];
// const maxOfTemps = Math.max(...temps);
// const allTemps = [...temps, ...currentWeekTemps];
// console.log(copyOfTemps);
// console.log(maxOfTemps);
// console.log(allTemps);


// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); 



// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? "публічному" : "закритому";
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;



// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg
// console.log(firstBook);
// const secondBook = {
//   title: "Сон смішної людини",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480



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
];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }


// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308


// const rgb = [200, 100, 255];

// const [red, green, blue, alfa = 0.3] = rgb;

// console.log(`R:${red},G:${green},B:${blue},Alfa:${alfa}`);
// console.log(rgb);
// console.log(red);


// const rgb = [200, 255, 100];

// const [red, ...colors] = rgb;

// console.log(red); // "200"
// console.log(colors); // [255, 100]


// const rgb = [200, 100, 255];

// const [, , blue] = rgb;

// console.log(`Blue: ${blue}`); // "Blue: 255"


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for(const key in apartment) {
//   console.log(keys.push(key));
//   console.log(values.push(apartment[key]));
// }

// console.log(keys);
// console.log(values);
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change 

let allValues = [];
  for (const product of products) {
    allValues.push(product[propName]);
  }

return allValues;
  // Change code above this line
}
getAllPropValues("name");
console.log(getAllPropValues("name"));