// gitlab
// bitbucket
// на будь-який проект робиться документація, як правило вся вона знаходиться в readme файлах або це може бути
// посилання на конфлюенс сторінку(майже той самий гугл докс6 тільки з хорошою структурою)
// node -v - перевірка версії node
// npm start - для початку роботи всієї збіркі
// control + С  - зупиняємо воч режім
// git remote set-url origin + url
// git remote -v
// npm install 
// npm run start - запуск якогось одного конкретного файлу
// в homepage - міняємо goitacademia на назву власного репозиторія
// міняємо 5 і 8 рядок в package json
// git status - покаже що ми змінювали
// 1) git add . - додаємо пуш на репозиторій
// 2) git commit -m "first comit" - додаємо коміт
// 3) git push - пушимо
// settings - action - general - read and write permissions
// settings - pages - branch 
// утиліта бабл переганяє новий зручний синтаксис на більш старий зрозумілий браузеру
// не оголошені змінні за допомогою ключових слів - видаляються при відправці на гіт
// перевірка парсел кешу - віводимо щось через консоль лог(н-д: прівіт) в глобальній області,
// якщо в браузері не відобразилося: 1) спершу обновляємо сторінку(бо кеші бувають двох видів - кеш браузера та
// кеш парсела) 2) в Networki - ставимо галочку в disable cash або права кнопка миші на оновлені будучі в консолі - 
// empty cash and hard reload. Якщо це не допомогло - значить забився парсел кеш
// Як його почистити? просто видаляємо папку parcel cache, після npm start вона знову зявиться
// в dist міміфіковані файли
// sourcetree - аналог github desktop\
// type = module дає нам режим виконання строго коду use strict і має під капотом атрибут defer (дає можливість
// завантажити js файл, але не виконувати його)
// атрибут async може блокувати побудову DOM дерева, номінально існує але майже не використовується
// Експорт існує іменований та дефолтний(майже ніколи не використовується)
// В проектах прийнято експорти оголошувати вкінці, імпорти вгорі
// export {add, sum} якщо використали іменований експорт, то завжди використовується іменований імпорт
// import {add} from './home/helpers/add';
// функції, які експортуються мають память про своє локальне оточення
// можна імпортувати функції, обєкти, змінні, класи
// _function() - показуємо, що функція не для експорту, але її можна перевикористовуввати в даному файлі
// гугл дока -  слеш + 2 зірочки + таб
// дефолтний експорт може бути один на сторінку - export default add => import qwerty from './home/helpers/add'
// дефолтний імпорт використовується для класів
// одночасно можна використовувати іменований та дефолтний експорт/імпорт
// якщо веліка кількість елементів для імпорту - import * as ESmodule from './home/helpers/add' - створюється ESM module
// якщо потрібно щось ввикликати ESmodule.value
// якщо імпортуються дві функції з різних файлів з однаковою назвою - можна одну з них перейменувати 
// export {sum as sumAdd} from './home/helpers/add'
// переміщення рядків - option + cтрілочка вгору/вниз
// скопіювати - дабл клік + command C


// const result = _.add(2, 3);
// console.log(result); // 5

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     console.log("Scroll handler call every 300ms");
//   }, 300)
// );

// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     console.log("Scroll handler call after 300ms pause");
//   }, 300)
// );

// document.addEventListener(
//   "scroll",
//   _.debounce(
//     () => {
//       console.log("Scroll handler call on every event stream start");
//     },
//     300,
//     {
//       leading: true,
//       trailing: false,
//     }
//   )
// );

// const string = "1 6 3 4 -5";
// function highAndLow(numbers){
//   const array = numbers.split(' ').sort((a, b) => a - b);
//   // console.log(array);
//   return `${array[array.length - 1]} ${array[0]}`;
// }

// highAndLow(string);
// console.log(highAndLow(string));

// function solution(str, ending){
//   return str.endsWith(ending);
// }
// console.log(solution('abc', 'bc'));
// console.log(solution('abc', 'd'));

// Input: 42145 Output: 54421
// const number = 42145;
// function descendingOrder(n){
//   const result = String(n).split('').sort((a, b) => b - a).join('');
//   return Number(result);
// }
// console.log(descendingOrder(number));;
// let value1 = 999; //3
// let value2 = 39; //4
// function persistence(num) {
//   let count = 0;
//   let array = String(num).split("");
//   if (array.length >= 2) {
//     array = multiplyDigits(array);
//     count += 1;
//   }
//   return count;
// }

// function multiplyDigits(array) {
//   if (array.length >= 2) {
//     return array.reduce((previousValue, number) => previousValue * number, 1);
//   }
// }
//   for (i = 0; i < array.length; i += 1){
//     result *= array[i];
//     console.log(result);

//   }
// if (array.length >= 2) {
//   array.reduce((previousValue, number) =>  previousValue *= number, 1);
// }

// persistence(value1);

// function persistence(num) {
//   let count = 0;

//   while (num >= 10) {
//     num = multiplyDigits(num);
//     count++;
//   }

//   return count;
// }

// function multiplyDigits(num) {
//   let product = 1;

//   while (num > 0) {
//     product *= num % 10;
//     num = Math.floor(num / 10);
//   }

//   return product;
// }
// const value = '';
// const value2 = 'HLX0,EIVC,C,PQMLR,I9,SLNCY,SMN0,4VN,4LCVY'

// function array(string) {
//   const arr = string.split(',');
//   console.log(arr);
//   if (arr.length < 3) {
//     return 'null';
//   }
//   const result = arr.slice(1, arr.length - 1);
//   return result.join(" ");
// }
// console.log(array(value));
// let candidate = {
//   minSalary: 120000
// }
// let job = {
//   maxSalary: 140000
// }

// function match(candidate, job) {
//   if (!candidate.minSalary || !job.maxSalary) {
//     throw new Error('Minimum salary or maximum salary not provided');
//   }
//   const wiggleRoom = candidate.minSalary * 0.1;
//   const adjustedMinSalary = candidate.minSalary - wiggleRoom;
  

//   return adjustedMinSalary <= job.maxSalary;
// }
// match(candidate, job);




let result;
// /**
//  * 
//  * @param {*} operation 
//  * @param {*} value1 
//  * @param {*} value2 
//  * @returns 
//  */
// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case '+':
//       result = value1 + value2;
//       break;
//     case '-':
//       result = value1 - value2;
//       break;
//     case '*':
//       result = value1 * value2;
//       break;
//     default:
//       result = value1 / value2;
//   }
//   return result;
// }
// basicOp('-', 15, 18);
// console.log(basicOp('-', 15, 18));
// basicOp('/', 49, 7);
// console.log(basicOp('/', 49, 7));


//  