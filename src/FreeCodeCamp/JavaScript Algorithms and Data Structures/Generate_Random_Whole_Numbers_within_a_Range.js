/**
 Генерация случайных целых чисел в пределах диапазона
 */
//Вместо того чтобы генерировать случайное целое число между нулем и заданным числом, как мы делали раньше, мы можем генерировать случайное целое число, которое попадает в диапазон двух определенных чисел.
//
// Для этого мы определим минимальное число min и максимальное число max.
//
// Вот формула, которую мы будем использовать. Потратьте немного времени, чтобы прочитать ее и попытаться понять, что делает этот код:
/**
 * Math.floor(Math.random() * (max - min + 1)) + min
 */



// Задача: Создайте функцию randomRange, которая принимает диапазон myMin и myMax и возвращает случайное целое число, которое больше или равно myMin, и меньше или равно myMax, включительно.

const randomRange = (myMin, myMax)=> Math.floor(Math.random() * (myMax - myMin + 1)) + myMin

console.log(randomRange(3,6))

//Math.random() выдает нам случайное число в диапазоне от 0 до 1.
//
// Но нам не нужна случайная десятичная дробь; нам нужно случайное число. Мы можем получить его, умножив результат Math.random() на размер диапазона. Например, если мы хотим получить случайное число от 0 до 10, нам нужно умножить его на 10. Результат 0,4 будет равен 4. Если мы хотим получить случайное число от 7 до 11, то есть 5 возможных чисел (7, 8, 9, 10, 11).
// Здесь мы получаем Math.random() * (max - min + 1).
//
// Однако нам не нужны десятичные числа, нам нужны целые числа. Math.floor() просто отрезает десятичную дробь. 3.14159 становится 3.
// Отсюда мы получаем Math.floor(Math.random() * (max - min + 1)).
//
// Теперь мы получаем число от 0 до любого размера нашего диапазона. Если мы хотели получить число от 7 до 11, то это будет случайное число от 0 до 5. Чтобы это было число от 7 до 11, нужно просто добавить 7 к тому числу, которое мы получили. 7 - это наше минимальное значение.
// Это приводит нас к Math.floor(Math.random() * (max - min + 1)) + min