// // Завдання 1
// // Напиши функцію delay(ms), яка повертає проміс, що переходить в стан "resolved" через ms мілісекунд. Значенням промісу, яке виповнилося має бути та кількість мілісекунд, яку передали під час виклику функції delay.



// const delay = ms => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//           resolve(ms)
//       },ms)
//   })
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Виклич функції для перевірки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms


// // Завдання 2

// // Перепиши функцію toggleUserState() так, щоб вона не використовувала callback-функцію callback, а приймала всього два параметри allUsers і userName і повертала проміс.
// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName) => {
//     return new Promise((resolve) => {
//         const updatedUsers = allUsers.map(user =>
//             user.name === userName ? { ...user, active: !user.active } : user,
//         );
//         resolve(updatedUsers)
//     })
// };

// const logger1 = updatedUsers => console.table(updatedUsers);

// toggleUserState(users, 'Mango').then(logger1);
// toggleUserState(users, 'Lux').then(logger1);


// // Завдання 3

// // Перепиши функцію makeTransaction() так, щоб вона не використовувала callback-функції onSuccess і onError, а приймала всього один параметр transaction і повертала проміс.



// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = (transaction) => {
//     return new Promise((resolve, reject) => {
//         const delay = randomIntegerFromInterval(200, 500);

//   setTimeout(() => {
//     const canProcess = Math.random() > 0.3;

//     if (canProcess) {
//       resolve(transaction.id, delay);
//     } else {
//       reject(transaction.id);
//     }
//   }, delay);
//     })
  
// };

// const logSuccess = (id, time) => {
//   console.log(`Transaction ${id} processed in ${time}ms`);
// };

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// makeTransaction({ id: 70, amount: 150 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 71, amount: 230 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 72, amount: 75 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 73, amount: 100 })
//   .then(logSuccess)
//   .catch(logError);






// const f1Drivers = [
//     "Max Verstapen",
//     "Lewis H",
//     "Charls L",
//     "Lando N",
//     "Fernando A",
//     "Carlos S",
//     "Sergio P",
//     "Georgeo R",
//     "Oscrar P",
//     "Veltteri B"
// ]

// function run(racer) {
//     return new Promise(resolve => {
//         const time = Math.floor(Math.random() * 5000) + 1000
//         setTimeout(() => {
//             resolve({racer, time})
//         }, time)
//     })
// }

// run(f1Drivers[0]).then(result => console.log(result))

// const arrPromise = f1Drivers.map(driver => run(driver))
// Promise.all(arrPromise).then(result => console.log(result))

// Promise.race(arrPromise).then(result => console.log(result))


// Завдання 2

// "Змагання промісів"

// Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.race і отримати результат найшвидшого проміса.

// Створіть функцію randomDelay, яка приймає значення і повертає проміс з випадковою затримкою (від 1000 до 5000 мілісекунд).
// Створіть масив з 5 промісів, використовуючи функцію randomDelay, із різними значеннями.
// Використайте Promise.race, щоб виконати всі проміси з масиву і отримати результат найшвидшого проміса.
// Обробіть результат найшвидшого проміса та виведіть його у консоль.


function randomDeley(value) {
    return new Promise(resolve => {
        const delay = Math.floor(Math.random () * (5000 - 1000)) + 1000
        setTimeout(() => {
            resolve(`promis ${value} resolve in ${delay}`)
        },delay)
    })
}

// randomDeley("123").then(result => console.log(result))
const promise = [
    randomDeley("1"),
    randomDeley("2"),
    randomDeley("3"),
    randomDeley("4"),
    randomDeley("5")
]
Promise.race(promise).then(result => console.log(result))
Promise.all(promise).then(result => console.log(result))



// Завдання 1

// "Порівняння кількох промісів"

// Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.all і обробити результати.

// Створіть функцію delayedPromise, яка приймає значення і затримку (у мілісекундах) і повертає проміс, який вирішується з заданим значенням після затримки.
// Створіть масив з 5 промісів, використовуючи функцію delayedPromise, із різними значеннями та затримками.
// Використайте Promise.all, щоб одночасно виконати всі проміси з масиву.
// Обробіть результати вирішення промісів та виведіть їх у консоль.
function delayedPromise(value, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`promis ${value} resolve in ${delay} ms`)
        })
    }, delay)
}
const promise2 = [
    delayedPromise("1", 1200),
    delayedPromise("2", 1340),
    delayedPromise("3", 1210),
    delayedPromise("4", 1250),
    delayedPromise("5", 1450)
]
Promise.all(promise2).then(result => console.log(result))