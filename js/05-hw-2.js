/*
 * Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
 * Функция проверяет ее на содержание слов spam и sale.
 * Если нашли зарещенное слово то функция возвращает true,
 * если запрещенных слов нет функция возвращает false.
 * Слова в строке могут быть в произвольном регистре.
 */

// const checkForSpam = function (message) {
//   message = message.toLowerCase(message);

//   if (message.includes("sale") || message.includes("spam")) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// *** 2 вариант ****
// const checkForSpam = function (message) {
//   const lowCaseMessage = message.toLowerCase();

//   return lowCaseMessage.includes("sale") || lowCaseMessage.includes("spam")
//     ? true
//     : false;
// };

// //
// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// *** 3 вариант ***
// Самый красивый :-)
const checkForSpam = function (message) {

  message = message.toLowerCase();

  return message.includes("sale") || message.includes("spam") ? true : false;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
