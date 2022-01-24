// 1
//

const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    // console.log(i + 1, array[i]); // +1 щоб було не з 0, а з 1
    // console.log(i+1, "-" , array[i]);
    console.log(`${i + 1} - ${array[i]}`); // вірний запис до умови задачі через шаблонну стрічку
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
