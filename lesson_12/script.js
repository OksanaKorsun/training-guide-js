const elements = {
    clickMe: document.querySelector('.js-click'),
    box: document.querySelector('.js-box'),
    query: document.querySelector('.js-query'),
    form: document.querySelector('.js-form')
}

elements.clickMe.addEventListener('click', handlerClick);
// elements.box.addEventListener('click', handlerClick);

let step = 0;
function handlerClick() {
    step += 50;
    elements.box.style.marginTop = `${step}px`;
    elements.box.style.marginLeft = `${step}px`;
}


// function handlerClick(evt) {
//     step += 50;
//     evt.currentTarget.style.marginTop = `${step}px`;
//     evt.currentTarget.style.marginLeft = `${step}px`;
// }



// elements.query.addEventListener('input', handlerSearch); викликається після кожного натиснення
// подія ченж викликається коли ви втратили фокус
// // elements.query.addEventListener('blur', handlerSearch); фактично той самий ченж

// function handlerSearch(evt) {
//     console.dir(evt.currentTarget); відкриває у вигляді обєкту
//     console.dir(evt.currentTarget.value);
// }

// elements.form.addEventListener('submit', handlerSubmit)

// function handlerSubmit(evt) {
//     evt.preventDefault();
//     console.dir(evt.currentTarget);
//     const { comment, email, password } = evt.currentTarget.elements;

//     console.log(email);
//     console.log(password);
//     console.log(comment);
// }




// Перерва до 21.30


// document.addEventListener('keydown', handlerKey);



// function handlerKey(evt) {
// if (evt.code === "Escape") {
//     console.log('😂');
// } else {
//     console.log('😴');
// }
// console.log(evt.code);
//     switch (evt.code) {

//         case 'Escape':
//             console.log('Escape');
//             break;
//         case 'KeyQ':
//             console.log('Q');
//             break;
//     }
// }


// document.addEventListener('keydown', handlerKey);


// function handlerKey(evt) {
//     // if (evt.ctrlKey && evt.code === 'KeyC') {
//     //     evt.preventDefault();
//     // }


// console.log(evt);
//     if (evt.ctrlKey) {
//         switch (evt.code) {
//             case 'KeyC':
//             case 'KeyV':
//                 evt.preventDefault();
//         }
//     }
// }


// document.addEventListener('mouseup', handler)
// function handler(evt) {
//     console.log(evt);
// }
// ліва клавіша міші - баттон 0,
//права клавіша миші - баттон 2,
//колесо - баттон 1


// const cars = [
//     {
//         id: 1,
//         car: "Honda",
//         type: "Civic",
//         price: 12000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//     },
//     {
//         id: 2,
//         car: "Audi",
//         type: "Q7",
//         price: 40000,
//         img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//     },
//     {
//         id: 33,
//         car: "BMW",
//         type: "5 siries",
//         price: 9000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//     },
//     {
//         id: 3,
//         car: "Honda",
//         type: "Accord",
//         price: 20000,
//         number: "+380000000000",
//         img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//     },
//     {
//         id: 4,
//         car: "Volvo",
//         type: "XC60",
//         price: 7000,
//         img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//     },
// ];

// const elements = {
//     form: document.querySelector('.js-form'),
//     container: document.querySelector('.js-list')
// }

// function createMarkup(arr) {
//     return arr.map(({ id, car, type, price, img }) => `
//     <li data-id="${id}">
//     <img src="${img}" alt="${type}" width="300"/>
//     <h2>${car}</h2>
//     <h3>${type}</h3>
//     <span>${price}</span>
//   </li>`).join('')
// }

// elements.container.style.display = 'flex';
// elements.container.style.flexWrap = 'wrap';
// elements.container.style.gap = '25px';
// elements.container.insertAdjacentHTML('beforeend', createMarkup(cars))
// elements.form.addEventListener('submit', handlerSearch);

// function handlerSearch(evt) {
//     evt.preventDefault();

//     const { options, query } = evt.currentTarget.elements;
//     console.log(options.value);

//     const result = cars.filter((item) => item[options.value].toLowerCase().includes(query.value.toLowerCase()))
//         .sort((a, b) => a[options.value].localeCompare(b[options.value]));
// використовуємо чейнінг
//     elements.container.innerHTML = createMarkup(result);
// }


// Бібліотека - це набір якихось методів які між собою логічно ніяк не повязані
// Фреймворк - це вже певна екосистема, методи можуть бути логічно повязані на результаті виконання одного метода
// може викликатися інший (React, Next)

















