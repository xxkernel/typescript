// Тип enum или перечисление позволяет определить набор именнованных констант, которые описывают определенные состояния.

enum Seasons {
  Winter,
  Spring,
  Summer,
  Autumn,
}
let currentt: Seasons = Seasons.Summer;
console.log(currentt); // 2
currentt = Seasons.Autumn; // изменение значения

enum Season {
  Winter = 0,
  Spring = 1,
  Summer = 2,
  Autumn = 3,
}
var current: string = Season[2]; // 2 - числовое значение Summer
console.log(current); // Summer
