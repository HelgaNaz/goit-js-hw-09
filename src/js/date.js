import format from 'date-fns';
import parseISO from 'date-fns/parseISO';

// console.log("start");

// Пример 1
// const timer = setTimeout(function () {
//   console.log("something go!")
// }, 2000)

// console.log("finish");
// console.log("timer", timer)

// Пример 2
// let count = 0;
// const timer = setInterval(function () {
//   count++;
//   console.log(count)
// }, 1000)

// console.log("finish");
// console.log("timer", timer)

// const stop = () => {
//   clearInterval(timer);
// };

// setTimeout(() => {
//   stop();
// }, 5000)

// ---------------Promise------------------
// console.log("start");

// const randomNumber = Math.floor(Math.random() * 100)

// const result = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(randomNumber);
//     if (randomNumber > 50) {
//       resolve("success");
//     } else {
//       reject("fail");
//     }
//   }, 2000)
// })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Это финальное сообщение не зависит от результата."))
//   // В finally нет атрибутов

// console.log("finish");

// -----------------------------------------
console.log("start");

// Что-то не работает 
// const fetcher = page => {
//   return new Promise((resolve, reject) => {
//     if (typeof page === 'number') {
//       resolve(fetch("https://swapi.dev/api/films/${page}/"))
//     } else {
//       reject("LOL");
//     }
    
//   });
// };

fetch("https://swapi.dev/api/films/1/")
  .then(data => data.json())
  .then(response => console.log(response.created))
  .catch(console.error);

console.log("finish");

// Используем либы
console.log(format(new Date(2014, 1, 11), 'yyyy-MM-dd'))


