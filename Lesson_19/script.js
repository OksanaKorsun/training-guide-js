// *********Links********* \\
// https://www.postman.com/downloads/
// https://rickandmortyapi.com/documentation
// https://www.weatherapi.com/docs/
// https://uk.wikipedia.org/wiki/SOAP

// Приклад документації до API
// https://rickandmortyapi.com/documentation/#rest

// *********Показати роботу з Postman********* \\
// https://www.postman.com/downloads/

// *********Fetch********* \\

// XMLHttpRequest прочитати і орієнтуватися, що це таке ніколи не буває зайвим(до ЄС6)

// const options = {
// method: 'GET',
// }
// fetch('https://rickandmortyapi.com/api/character', options)

// *********Обробка помилок та парсинг відповіді********* \\

// const options = {
//   method: "GET",
// };

// fetch("https://rickandmortyapi.com/api/character", options)
//   .then((resp) => {
//     console.log(resp);
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     //   JSON.parse()

//     return resp.json();
//   })
//   .then((qwerty) => {
//     console.log(qwerty);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//   .then(function (data) {
//     console.log(data);
//   });
//  метод json() -  завжди буде повертати проміс
// ПЕРЕРВА ДО 20.55

// ***************Практика*************** \\

// Потрібно створити функціонал для отримання прогнозу погоди в місті.
// Використай публічне API https://www.weatherapi.com/docs/
// Використовуй ендпоінт Forecast для того, щоб отримати прогноз погоди на декілька днів.

// Створи форму в яку користувач:
// 1 вводить назву міста.
// 2 обирає на яку кількість днів він хоче отримати прогноз погоди (3, 5 та 7 днів).
// (Іноді параметр не працює в такому випадку можна зробити пошук на 1, 2 та 3 дні)
// Приклад форми https://prnt.sc/kFmLOj6gBdv-

// Після сабміту форми відмалюй картки з інформацією отриманою з бекенду.
// Картка має містити відомості про:
// 1 Зображення з погодою (icon)
// 2 Текст з погодою (text)
// 3 Дату (date)
// 4 Середню температуру в Цельсія (avgtemp_c)
// Приклад картки https://prnt.sc/h_p-A6Hty-i-

// !!! ЗВЕРНИ УВАГУ ЩО API_KEY ПІСЛЯ РЕЄСТРАЦІЇ ВАЛІДНИЙ 21 ДЕНЬ !!!.

// const elements = {
//   searchForm: document.querySelector(".js-search-form"),
//   list: document.querySelector(".js-list"),
// };

// elements.searchForm.addEventListener("submit", handlerSearch);

// function handlerSearch(evt) {
//   evt.preventDefault();
//   const { city, days } = evt.currentTarget.elements;

//   serviceWeather(city.value, days.value)
//   .then(data => elements.list.innerHTML = createMarkup(data.forecast.forecastday))
//   .catch(err => console.log(err))
//   .finally(() => evt.target.reset())
// }

// function serviceWeather(city, days) {
//   const BASE_URL = "http://api.weatherapi.com/v1";
//   const END_POINT = "/forecast.json";
//   const API_KEY = "6410346f89264d6e919165208231505";

//   const params = new URLSearchParams({
//     key: API_KEY,
//     q: city,
//     days: days,
//     lang: "uk",
//   });

//   return fetch(`${BASE_URL}${END_POINT}?${params}`).then((resp) => {

//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   });

//   // fetch(`${BASE_URL}${END_POINT}?key=${API_KEY}&q=${city}&days=${days}&lang=uk`)
// }

// function createMarkup(arr){
// return arr.map(({date, day : {avgtemp_c , condition : {icon, text}}}) => `<li class="weather-card">
//     <img src="${icon}" alt="${text}" class="weather-icon"/>
//     <h2 class="date">${date}</h2>
//     <h3 class="weather-text">${text}</h3>
//     <h3 class="temperature">${avgtemp_c} °C</h3>
// </li>`).join('')
// }
// // Архітектура REST - побудована на JSON форматі, є багато архітектур, але ~90% ринку займає РЕСТ
// // Архітектура СОА
// // Endpoint - приставка після базового URL (назва функції на бекенді)
// // знак амперсанту &
// // handlerbars.js -?
// // midle - побудова браузера, робота з історією браузера, з навігацією по браузеру, set, map, mutation observed
// // кешування, робота з кукі....
// // додивитися виконання 9 домашки!!!


// const cats = [
//     {
//         "breeds": [
//             {
//                 "weight": {
//                     "imperial": "7  -  10",
//                     "metric": "3 - 5"
//                 },
//                 "id": "abys",
//                 "name": "Abyssinian",
//                 "cfa_url": "http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx",
//                 "vetstreet_url": "http://www.vetstreet.com/cats/abyssinian",
//                 "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian",
//                 "temperament": "Active, Energetic, Independent, Intelligent, Gentle",
//                 "origin": "Egypt",
//                 "country_codes": "EG",
//                 "country_code": "EG",
//                 "description": "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
//                 "life_span": "14 - 15",
//                 "indoor": 0,
//                 "lap": 1,
//                 "alt_names": "",
//                 "adaptability": 5,
//                 "affection_level": 5,
//                 "child_friendly": 3,
//                 "dog_friendly": 4,
//                 "energy_level": 5,
//                 "grooming": 1,
//                 "health_issues": 2,
//                 "intelligence": 5,
//                 "shedding_level": 2,
//                 "social_needs": 5,
//                 "stranger_friendly": 5,
//                 "vocalisation": 1,
//                 "experimental": 0,
//                 "hairless": 0,
//                 "natural": 1,
//                 "rare": 0,
//                 "rex": 0,
//                 "suppressed_tail": 0,
//                 "short_legs": 0,
//                 "wikipedia_url": "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
//                 "hypoallergenic": 0,
//                 "reference_image_id": "0XYvRd7oD"
//             }
//         ],
//         "id": "tv8tNeYaU",
//         "url": "https://cdn2.thecatapi.com/images/tv8tNeYaU.jpg",
//         "width": 1600,
//         "height": 1200
//     }
// ]


// console.log(cats[0].breeds[0].description);



