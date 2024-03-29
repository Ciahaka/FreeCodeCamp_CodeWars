//Задача: Перебор нечетных чисел с помощью цикла for
//Циклы for не должны повторяться по одному. Изменив наше конечное выражение, мы можем считать по четным числам.
//Мы начнем с i = 0 и зациклим, пока i < 10. Мы будем увеличивать i на 2 в каждом цикле с i += 2.
const ourArray = [];

for (let j = 0; j < 10; j += 2) {
    ourArray.push(j);
}
console.log(ourArray)
//Теперь наш массив будет содержать [0, 2, 4, 6, 8]. Давайте изменим нашу инициализацию, чтобы мы могли считать нечетными числами.

//Вставьте нечетные числа от 1 до 9 в myArray с помощью цикла for.

const myArray = [];

for (let i = 1; i < 10; i += 2) {
    myArray.push(i)
}
console.log(myArray)