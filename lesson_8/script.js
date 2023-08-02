// const users = [
//     { id: 1, name: 'John', age: 28, skills: ['JavaScript', 'HTML', 'CSS'] },
//     { id: 2, name: 'Alice', age: 32, skills: ['Python', 'Data Analysis'] },
//     { id: 3, name: 'Bob', age: 24, skills: ['JavaScript', 'React', 'Node.js'] },
//     { id: 4, name: 'Emily', age: 40, skills: ['Java', 'Spring'] },
//     { id: 5, name: 'David', age: 22, skills: ['C++', 'C#'] }
// ];


// map
// const names = users.map((user, idx, arr)=>{
//     return user.name
// })
// const names = users.map(({ name }) => name)
// console.log(names);

// function customMap(arr) {
//     const result = []
//     for (let i = 0; i < arr.length; i += 1) {
//         result.push(callback(arr[i]))
//     }
//     return result;
// }

// const callback = ({name}) => name
// console.log(customMap(users));

// flatMap
// const result = users.flatMap(({skills}) => skills)
// console.log(result);

// flat
// const arr1 = [0, 1, 2, [3, [4, [45]]]];
// const resut = arr1.flat(3)
// console.log(resut);

// filter
// const result = users.filter(({ age }) => age > 30);
// console.log(result);

// const skills = users.flatMap(({ skills }) => skills);
// console.log(skills);
// const uniqueSkills = skills.filter(
//     (skill, index, array) => {
//         // console.log(skill, 'idx', index);
//         return array.indexOf(skill) === index
//     }
// );


// console.log(uniqueSkills);

// find
// const result = users.find(({ skills }) => skills.includes('Java'))
// console.log(result);

// findIndex

// const idx = users.findIndex(({ id }) => id === 3);
// const idx = users.findIndex(({ skills }) => skills.includes('Python'));
// users.splice(idx, 1)
// console.log(idx);
// console.log(users);


// every some
// const users = [
//     { id: 1, name: 'John', age: 28, skills: ['JavaScript', 'HTML', 'CSS'] },
//     { id: 2, name: 'Alice', age: 32, skills: ['Python', 'Data Analysis'] },
//     { id: 3, name: 'Bob', age: 24, skills: ['Java', 'React', 'Node.js'] },
//     { id: 4, name: 'Emily', age: 40, skills: ['Java', 'HTML'] },
//     { id: 5, name: 'David', age: 22, skills: ['C++', 'CSS'] }
// ];

// const isKnow = users.some(({skills}) => skills.includes('Python'))
// console.log(isKnow);


// const result = users.every(({ age }) => age > 20 && age <= 40)
// console.log(result);



// sort
// const users = [
//     { id: 1, name: 'John', age: 28, skills: ['JavaScript', 'HTML', 'CSS'] },
//     { id: 2, name: 'Alice', age: 32, skills: ['Python', 'Data Analysis'] },
//     { id: 3, name: 'Bob', age: 24, skills: ['Java', 'React', 'Node.js'] },
//     { id: 4, name: 'Emily', age: 40, skills: ['Java', 'HTML'] },
//     { id: 5, name: 'David', age: 22, skills: ['C++', 'CSS'] }
// ];

// const result = users.sort((a, b) => b.age - a.age);
// console.log(users);

// const result = users.sort((a, b) => b.name.localeCompare(a.name))
// console.log(result);



// reduce
// const users = [
//     { id: 1, name: 'John', age: 28, skills: ['JavaScript', 'HTML', 'CSS'] },
//     { id: 2, name: 'Alice', age: 32, skills: ['Python', 'Data Analysis'] },
//     { id: 3, name: 'Bob', age: 24, skills: ['Java', 'React', 'Node.js'] },
//     { id: 4, name: 'Emily', age: 40, skills: ['Java', 'HTML'] },
//     { id: 5, name: 'David', age: 22, skills: ['C++', 'CSS'] }
// ];


// const result = users.reduce((acc, { age }, idx, arr) => acc + age, 0);
// const result = users.reduce((acc, { name }) => {
//     acc.push(name);
//     return acc
// }, [])
// console.log(result);




// Перерва до 21.28






// Практика

// Task-1
// Напишіть функцію, яка використовує метод map, щоб створити новий масив об'єктів, в якому буде інформація про середній бал кожного студента. 

// const students = [
//     { name: 'John', grades: [80, 85, 90] },
//     { name: 'Alice', grades: [90, 95, 92] },
//     { name: 'Bob', grades: [70, 80, 75] },
//     { name: 'Emily', grades: [95, 92, 88] },
//     { name: 'David', grades: [85, 88, 90] }
// ];

// function getAverage(arr) {
//     const result = arr.map(({ name, grades }) => {
//         const total = grades.reduce((acc, item) => acc + item, 0)
//         const obj = {
//             name,
//             average: Math.round(total / grades.length)
//         }
//         return obj
//     });

//     return result;
// }
// console.log(getAverage(students));


// Task-2
// Напишіть функцію, яка використовує метод filter, щоб створити новий масив, в якому будуть тільки студенти які старше 20 років


// const students = [
//     { name: 'John', age: 20, gpa: 3.8 },
//     { name: 'Alice', age: 21, gpa: 3.2 },
//     { name: 'Bob', age: 19, gpa: 3.5 },
//     { name: 'Emily', age: 22, gpa: 3.9 },
//     { name: 'David', age: 20, gpa: 3.7 }
// ];

// function getAdult(arr) {
//     // const result = arr.filter((student) => student.age > 20)

//     // return result;

//    return arr.filter(({age}) => age > 20)

// }
// console.log(getAdult(students));


// Task-3
// Напишіть функцію, яка використовує метод find, щоб знайти книжку за її назвою (title)
// const books = [
//     { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
//     { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', year: 2008 },
//     { title: 'The Pragmatic Programmer: Your Journey to Mastery', author: 'Andrew Hunt, David Thomas', year: 1999 },
//     { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', year: 1994 },
//     { title: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler', year: 1999 }
// ];


// function getBook(arr, title) {
//     // const book = arr.find((book) => book.title === title);

// return book ? book : 'Not found'
//     // return book || 'Not found';


//   return arr.find(({title : bookTitle}) => bookTitle === title) || 'Not found';
// }
// console.log(getBook(books, 'Design Patterns: Elements of Reusable Object-Oriented Software'));
// console.log(getBook(books, 'qwerty'));


// Task-4
// Напишіть функцію, яка використовує метод reduce, щоб обчислити загальну вартість всіх товарів у масиві, яка розраховується як добуток ціни товару на його кількість, а потім сумується з іншими товарами. Результат повинен бути загальною вартістю всіх товарів.

// const products = [
//     { id: 1, name: 'T-shirt', price: 20, quantity: 3 },
//     { id: 2, name: 'Jeans', price: 50, quantity: 2 },
//     { id: 3, name: 'Sneakers', price: 80, quantity: 1 },
//     { id: 4, name: 'Hat', price: 15, quantity: 4 },
//     { id: 5, name: 'Socks', price: 5, quantity: 6 }
// ];

// function getTotal(arr) {
//     const total = arr.reduce((acc, product) => {
//         acc += product.price * product.quantity;
//         return acc;
//     }, 0)

//     return total;

//     // return arr.reduce((acc, { price, quantity }) => acc += price * quantity, 0)
// }
// console.log(getTotal(products));



// Task-5
// Напишіть функцію, яка використовує метод sort, щоб відсортувати книжки за роком видання у спадаючому порядку. Результат повинен бути відсортованим масивом книжок за роком видання.


// const books = [
//     { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
//     { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', year: 2008 },
//     { title: 'The Pragmatic Programmer: Your Journey to Mastery', author: 'Andrew Hunt, David Thomas', year: 1999 },
//     { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', year: 1994 },
//     { title: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler', year: 1999 }
// ];

// function sortDesc(arr) {
//     // const result = [...arr].sort((a, b) => b.year - a.year);
//     // return result;


//     return [...arr].sort((a, b) => b.year - a.year)
//     // .map(({ author, year }) => ({ author, year }));

// }
// console.log(sortDesc(books));


// Task-6
// Напишіть функцію, яка використовує перебираючі методи масиву map та filter, щоб отримати масив назв продуктів, ціна яких менше 2 доларів та відсортуй їх за алфавітним порядком.
const products = [
    { id: 2, name: 'Banana', price: 0.99 },
    { id: 1, name: 'Apple', price: 1.99 },
    { id: 3, name: 'Orange', price: 2.49 },
    { id: 4, name: 'Grapes', price: 3.99 }
];
// function getSorted(arr) {
//   return arr.sort((a, b) => a.name.localeCompare(b.name))
//     .filter(({ price }) => price < 2)
//     .map(({ name }) => name);
//  }
// console.log(getSorted(products));
// console.log(products);

// function getProducts(arr) {
//     // const min = arr.filter((product) => product.price < 2);
//     // const names = min.map((product) => product.name);
//     // names.sort((a, b) => a.localeCompare(b));

//     // return names

//     return arr.filter(({ price }) => price < 2)
//     .map(({ name }) => name)
//     .sort((a,b) => a.localeCompare(b));
// }
// console.log(getProducts(products));
// console.log(products);

// Task-7 HARD 😈

// Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість разів яку вона дублюється буде значенням ключа
const str = 'absdabsrgbadgtdswwbetflg';
// Результат на який очікуємо
// const obj = {
//     a: 3,
//     b: 4,
//     s: 3,
//     // ...
// }

const obj = str.split('').reduce((acc, item) => {
  if (acc.hasOwnProperty(item)) {
    acc[item] += 1
  } else {
    acc[item] = 1
  } return acc;
}, {})

console.log(obj);













// const obj = str.split('')
//     .reduce((acc, item) => {
//         if (acc.hasOwnProperty(item)) { // item in acc
//             acc[item] += 1;
//         } else {
//             acc[item] = 1
//         }

//         return acc
//     }, {})

// console.log(obj);


// Артем вітаю. Допоможіть розібрати.
// const calculateTotalPrice = (orderedItems) => {
//     let result = 0;
//     orderedItems.forEach(number => {
//      result += number;
//     })
//     return result;
//   }
//    Що зробив помилково?



// const numbers = [44, 1, 2, 3, 11, 22];
// // numbers.sort()
// numbers.sort((a, b) => a - b)
// console.log(numbers);



// function changeEven(numbers, value) {
//   // Change code below this line
//   let newNumbers = [];
//   numbers.forEach(number => {
//     if(number % 2 === 0) {
//       number = number + value;
//       newNumbers.push(number);
//     } else {
//       newNumbers.push(number);
//     }
//   });
//   return newNumbers;
  
//   // Change code above this line
// }
// changeEven([1, 2, 3, 4, 5], 10);
// console.log(changeEven([1, 2, 3, 4, 5], 10));




// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// const getUserNames = users => {
//   return users.map(user => user.name)
    

// };
// getUserNames(users);
// console.log(getUserNames(users));




// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, allGenres) => allGenres.indexOf(genre) === index);
// console.log(allGenres);
// console.log(uniqueGenres);

// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]



// const getUsersWithEyeColor = (users, color) => {
//  return users.filter(user => user.eyeColor === color)

// };
// getUsersWithEyeColor(users, blue);
// console.log(getUsersWithEyeColor(users, blue));


// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((total, playtime) => {return total + playtime}, 0);
// console.log(totalPlayTime);
// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);




// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].sort((a, b) => a.author.localeCompare(b.author))
//     .filter(book => book.rating > MIN_BOOK_RATING)
//     .map(book => book.author);
// console.log(names);




users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

// const allFriends = [...users].flatMap(user => user.friends);
// console.log(allFriends);
// const filterFriends = allFriends.filter((friend, index, array)=> array.indexOf(friend) === index);
// console.log(filterFriends);
// const sortedFriends = [...filterFriends].sort((a, b) => a.localeCompare(b));
// console.log(sortedFriends);

// const getSortedFriends = users => {
//     return [...users].flatMap(user => user.friends)
//         .filter((friend, index, array) => array.indexOf(friend) === index)
//         .sort((a, b) => a.localeCompare(b))
// };
// getSortedFriends(users);
// console.log(getSortedFriends(users));



// const getTotalBalanceByGender = (users, gender) => {
//     return [...users].filter(user => user.gender === gender)
//         // .reduce((total, user) => {total + user.balance}, 0)
// };
// getTotalBalanceByGender(users, female);
// console.log(getTotalBalanceByGender(users, female));