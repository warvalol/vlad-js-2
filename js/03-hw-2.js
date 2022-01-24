/*
 * Напиши фукцнию findLongestWord(string),
 * которая принимает параметром произвольную строку
 * (в строке будут только слова и пробелы)
 * и возвращает самое длинное слово в этой строке.
 */

const findLongestWord = function (string) {
  const stringSplit = string.split(" ");
  let longestWord = "";

  for (const word of stringSplit) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'

console.log(findLongestWord("Абабагаламага - це книжкове видавництво"));

