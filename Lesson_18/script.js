//*********Приклад роботи синхронного та асинхронного JS**************\\

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve("C").then((value) => console.log(value));

// console.log("D");

//*********Поділення асинхронного JS на мікро та макро процеси**************\\

// ******Мікро процеси***** \\
// Promise
// Observer
// addEventListner

// ******Макро процеси****** \\
// setTimeout
// setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
// setImmediate
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
// requestAnimationFrame

//*********Приклад роботи синхронного та асинхронного JS**************\\
// Пронумеруй виклики методів відповідно до порядку їх виконання

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.reject("C").then((value) => console.log(value)).catch(err => console.log(err));
// Promise.resolve("D").then((value) => console.log(value)).catch(err => console.log(err));

// setTimeout(() => console.log("E"), 0);

// console.log("F");

//*************** Promise *******************\\

// ****Створення Promise**** \\

const promise = new Promise((res, rej) => {
  const random = Math.random();
  setTimeout(() => {
    if (random > 0.5) {
      res([{ name: "Alice" }, {name: 'Kate'}]);
    } else {
      rej("Error 😥");
    }
  }, 1000);
});

// ****Обробка Promise**** \\
// console.log(typeof promise);
promise
  .then(
    (data) => {
      console.log(data);
      return data
    }
  ).then((value) => {value.map(item => console.log(item.name))})

  .catch((err) => {
    console.log(err);
    // location.href = './error.html'
  })
  .finally(() => {
    console.log("Я виконався після then або catch");
  });

// console.log(fetch("https://swapi.dev/api/starships/"));
// .then((response) => response.json())
// .then(data => console.log(data))

// ПЕРЕРВА ДО 21.10

// ****************************Практика************************* \\
// Наше завдання написати програмне забезпечення для ігрового автомата
// Для вирішення завдання використай готову розмітку HTML та базову стилізацію
// Після натиснення на кнопку "Start game" в кожному віконці по черзі має з'являтись смайлик з затримкою в 1 секунду ('🤑' або '👿')
// Під час обробки кожного віконця створи масив з Promis-ами в якому кожен з них буде відповідати за своє віконце, після чого оброби даний масив за допомогою методу Promise.allSettled
// Після того як всі віконця були заповнені потрібно щоб скріпт автоматично визначав чи гравець переміг, чи ні. Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
// Виводить модальне вікно з повідомленням про статус гри ('Winner' або 'Loser')
// Для модального вікна використовуй бібліотеку basicLightbox
// Після повторного натискання на кнопку "Start game" поле має очищатись, а гра починатись з початку.

const selectors = {
  startBtn: document.querySelector(".js-start"),
  container: document.querySelector(".js-container"),
};

selectors.startBtn.addEventListener("click", handlerStart);

function handlerStart() {
  const promises = [...selectors.container.children].map((_) =>
    createPromise()
  );

  Promise.allSettled(promises).then((items) => {
    items.forEach((item, i) => {
      selectors.container.children[i].textContent = "";
      console.log(item);
      setTimeout(() => {
        selectors.container.children[i].textContent = item.value || item.reason;

        if (i === items.length - 1) {
          const instance = basicLightbox.create(
            `<h1>${isWinner ? "Winner" : "Loser"}</h1>`
          );
          instance.show();
        }
      }, 1000 * (i + 1));
    });

    const isWinner =
      items.every(({ status }) => status === "fulfilled") ||
      items.every(({ status }) => status === "rejected");
  });
}

function createPromise() {
  return new Promise((res, rej) => {
    const random = Math.random();
    if (random > 0.5) {
      res("🤑");
    } else {
      rej("😈");
    }
  });
}
// асинхронний код поділяється на мікропроцеси та макропроцеси - мікропроцеси(проміси) більш приорітетні
// ніж макропроцеси(setTimeout)
// Проміс в резолві завжди буде більш приорітетний ніж проміс в реджекті
// проміс - це запит на бек енд
// кетч - 1, файнелі - 1, а от зенів може бути велика кількість
//  в першому зені ми завжди будемо парсити
// проміси в чистому вигляді використовуються в геймдевелопменті(~4% від загальної розробки)
// Медоти промісів:
// Promise.all()  - обробить всі успішні проміси
// Promise.race() - обробляє перший успішний проміс
// Promise.allSettled() - єдиний метод, який дозволяє опрацювати всі проміси - повертає масив промісів, де кожен
// проміс представлений у вигляді обєкту і вказує з яким статусом був відпрацьований даний проміс
// метод reset() працює тільки на формі
// сайти з api подивитися в гугл доці до цього урока

// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// Promise.all([promiseA, promiseB])
//   .then(value => console.log(value)) //["promiseA value", "promiseB value"]
//   .catch(error => console.log(error));