/*
 * Напиши скрипт подсчета стоимости гравировки украшений.
 * Для этого создай функцию
 * calculateEngravingPrice(message, pricePerWord)
 * принимающую строку (в строке будут только слова и пробелы)
 * и цену гравировки одного слова,
 * и возвращающую цену гравировки всех слов в строке.
 */

const calculateEngravingPrice = function (message, pricePerWord) {
  const totalStringElements = message.split(" ").length;
  // через .split(" ") з пробілом поділив стрічку на окремі елементи(слова), а потім через .length дізнався їхню к-сть
  const resoult = totalStringElements * pricePerWord;
  return resoult;
};

// вызов функции для проверки работоспособности

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120
