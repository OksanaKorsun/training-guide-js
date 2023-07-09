
// const array = ["Hello world", null, true, 15];


// console.log(typeof array); // object

// console.log(Array.isArray(array)); // true

// console.log(Array.isArray("hello")); // false



// const firstEl = array[0];
// lastEl
// const lastIDX = array.length - 1;
// const lastEl = array[array.length - 1];
// console.log(lastEl);



// const array = ["Hello world", null, true, 15];

// for (let i = 0; i < array.length; i+=1){
//     const item = array[i]
//     console.log(item);
// }


// for(const item of array){
//     console.log(item);
// }



// const array = [null, true, "Hello world", 15, undefined, 'ok'];

// for (let i = 0; i < array.length; i += 1) {
//     if (typeof array[i] === 'string') {
//         array[i] = false;
//     }
// }

// for (let item of array) {
//     if (typeof item === 'string') {
//         item = false;
//     }
//     console.log(item);
// }
// console.log(array);



// Примітивні типи даних - за значенням
// console.log(1 === 1);
// console.log([1] === [1]);


// let a = 15;
// let b = a;

// b += 1;

// console.log(a);
// console.log(b);
// console.log(a === b);




// Складні типи даних - за посиланням
// let a = [1,2,3];
// let b = a;

// b.push(4)


// console.log('a',a);
// console.log('b',b);

// console.log(a === b);





// push pop
// const numbers = [1, 2, 3];
// // numbers.push(4);
// const result = numbers.pop();
// console.log(result);
// console.log(numbers);


// unshift shift

// const numbers = [1, 2, 3];
// numbers.unshift(4,5,6)
// const result = numbers.shift();
// console.log(result);
// console.log(numbers);





//slice
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = numbers.slice(2, 5);
// console.log(result);
// console.log(numbers);

// splice


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = numbers.splice(2,2)
// console.log(result);
// console.log(numbers);

// numbers.splice(2, 1, 'hello world', false)
// console.log(numbers);


// numbers.splice(2, 0, 'hello world')
// console.log(numbers);


//includes
// const str = ['a', 'b', 'c', 'd'];

// console.log(str.includes('c')); // true
// console.log(str.includes('e')); // false

//indexOf
// const str = ['a', 'b', 'c', 'd','c'];

// console.log(str.indexOf('c'));//2
// console.log(str.indexOf('e'));//-1

// console.log(str.indexOf('e') !== -1);


// concat
// const str = ['a', 'b', 'c', 'd', 'c'];
// const strA = ['g', 'h'];
// const strB = ['w', 'e'];


// const result = str.concat(strA, strB);
// console.log(result);
// console.log(str);











// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не є типом даних Number.

// const arrA = [3, 'Hello', null, 42, false];


// console.log(typeof null);
// for (let i = 0; i < arrA.length; i += 1) {
//     if (typeof arrA[i] !== 'number') {
//         arrA.splice(i, 1);
//         i -= 1;
//     }
// }

// console.log(arrA);

// const arrA = [3, 'Hello', null, 42, false];

// [3, 'Hello', null, 42, false]

// for (let i = arrA.length - 1; i >= 0; i -= 1) {
//     console.log(arrA[i]);
//     if (typeof arrA[i] !== 'number') {
//         arrA.splice(i, 1);
//     }
// }
// console.log(arrA);






// const arrB = ['world', true, 22, 41, undefined];










// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх в вигляді нового масиву як результат виконання функції

// function getCommonElements(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr.includes(arr[i], i + 1)) {
//             result.push(arr[i])
//         }
//     }

//     return result
// }

// console.log(getCommonElements([1, 2, 3, 2, 1, 17, 19]));




// Task-3
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з чоловічими іменами.
//Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.

// const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', 'Olga'];
// const men = ['Artem', 'Maksim', 'David', 'Roman'];

// function getWomen(users, men) {
//     const women = [];

//     for (const user of users) {
//         if (!men.includes(user)) {
//             women.push(user)
//         }
//     }

//     return women
// }

// console.log(getWomen(users, men));








// Task-4 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.

// const string = 'Welcome to the future';
// const SEPARATOR = '';
// const result = string.split(SEPARATOR).reverse().join(SEPARATOR)
// console.log(result);




// Task-5
// Напиши скрипт який буде перевіряти чи елементи в масиві розташовані в порядку зростання,
// якщо ні то замінювати елемент на вірнi
// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9]

// for (let i = 1; i < numbers.length; i += 1) {
//     const currentEl = numbers[i];
//     const prevEl = numbers[i - 1];
//     if (currentEl - prevEl !== 1) {
//         numbers[i] = numbers[i - 1] + 1;
//     }
// }
// console.log(numbers);


// Task-6
// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// Функцію має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"


// function createStr(arr) {
//     let message;
//     switch (arr.length) {
//         case 0:
//             message = "no one likes this"
//             break;
//         case 1:
//             message = `${arr[0]} likes this`
//             break;
//         case 2:
//             message = `${arr[0]} and ${arr[1]} like this`
//             break;
//         case 3:
//             message = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
//             break;
//         default:
//             message = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`
//     }
//     return message;
// }

// console.log(createStr([]));
// console.log(createStr(["Peter"]));
// console.log(createStr(["Jacob", "Alex"]));
// console.log(createStr(["Max", "John", "Mark"]));
// console.log(createStr(["Mark", "Alex", "Jacob", "Mark"]));

// ітерація масива приклад
// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }


// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"


// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// console.log(numbers.length);


// const numbers = ["Lviv", "Brovary", "Kyiv", "Svitilnya"];
// for (const number of numbers) {
//     console.log(number);
// }


// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]


// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join("-")); // "JavaScript-це-цікаво"


// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "apple";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//     console.log(`${fruit} is a red fruit!`);
    
// }
// console.log(`${fruit} is not a red fruit`);

// const colors = ["red", "green", "blue"];
// colors.splice(2, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]



// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]


// function getExtremeElements(array) {
   
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
//   return [firstElement, lastElement];
// }


// getExtremeElements([1, 5, 6, 8, 3, 1]);


// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   let totalPrice;
//   totalPrice = message.length * pricePerWord;
//   return totalPrice;
//    // Change code above this line
// }
// calculateEngravingPrice('JavaScript is in my blood', 10);

// function slugify(title) {

// return title.toLowerCase().split(" ").join("-");

// }
// slugify('Arrays for begginers');
// console.log(slugify('Arrays for begginers'));



// function makeArray(firstArray, secondArray, maxLength) {
   
// let newArray = firstArray.concat(secondArray);
// if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
// }
//  return newArray;
// }
// makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3);
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));


// Області видимості
let product = "banana";
function getProduct(qwerty) {
    qwerty = "chery";
    if (true) {
        let product = "kiwi";
        if (true) {
            product = "pear";
        }
        console.log("Перший консоль", product);
    }
    product = "creaм";
}
getProduct(product);
console.log("Другий консоль", product);


// function calculateTotal(number) {
 
// let sum = 0;
//     for (let i = 1; i <= number; i += 1) {
//  sum += i;
// }
//  return sum;    
// }
// calculateTotal(3);

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (let i = min; i <= max; i += 1) {
//   numbers.push(i);
// }
//   // Change code above this line
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// console.log(createArrayOfNumbers(1, 17));



// function filterArray(numbers, value) {
//    // Change code below this line
// const newNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newNumbers.push(numbers[i]);
//     }
//   }

// return newNumbers;
//   // Change code above this line
// }
// filterArray([12, 24, 8, 41, 76], 20);
// console.log(filterArray([12, 24, 8, 41, 76], 20));



// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   if (fruits.includes(fruit)) {
//       return true;
    
//   }
//   return false; // Change this line
// }
// checkFruit("banana");
// console.log(checkFruit("banana"));



// function getCommonElements(array1, array2) {
//   // Change code below this line
// const commonArray = [];
//     for (let i = 0; i < array1.length; i += 1) {
//         for (let j = 0; j < array2.length; j += 1) {
//             if (array1[i] === array2[j]) {
//                 commonArray.push(array1[i])
      
//             }
//         }
//     }
// return commonArray;
//  // Change code above this line
// }





// function getCommonElements(array1, array2) {
//   // Change code below this line
// const commonArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
    
//       if (array2.includes(array1[i])) {
//         commonArray.push(array1[i])
      
//     }
//   }

// return commonArray;
//  // Change code above this line
// }
// getCommonElements([24, 12, 27, 5], [24, 8, 5, 36, 27]);
// console.log(getCommonElements([24, 12, 27, 5], [24, 8, 5, 36, 27]));


// function getEvenNumbers(start, end) {
//    // Change code below this line
// const numbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       numbers.push(i);
//     }
//   }
// return numbers;

//     // Change code above this line
// }
// getEvenNumbers(3, 11);
// console.log(getEvenNumbers(3, 11));


// function includes(array, value) {
//   // Change code below this line
//     for (let i = 0; i < array.length; i += 1) {
//         if (array[i] === value) {
//             return true;
//         }
//     }
//     return false;
// }
//   // Change code above this line

// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "wer");
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "wer"));


// Прочитати learn JS!!!!!!