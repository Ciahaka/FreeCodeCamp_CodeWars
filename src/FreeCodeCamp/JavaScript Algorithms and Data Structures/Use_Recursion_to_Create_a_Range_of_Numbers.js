/**
 * Использование рекурсии для создания диапазона чисел
 */
//В продолжение предыдущей задачи мы предоставляем вам еще одну возможность создать рекурсивную функцию для решения задачи.
//
// Мы определили функцию rangeOfNumbers с двумя параметрами. Функция должна возвращать массив целых чисел, который начинается с числа, представленного параметром startNum, и заканчивается числом, представленным параметром endNum. Начальное число всегда будет меньше или равно конечному числу. Ваша функция должна использовать рекурсию, вызывая саму себя, и не использовать циклы любого вида. Она также должна работать для случаев, когда и startNum, и endNum одинаковы.
const rangeOfNumbers = (startNum, endNum) => {
    if (endNum < startNum) {
        return [];
    }
    const arr = rangeOfNumbers(startNum, endNum - 1)
    arr.push(endNum)
    return arr
};
console.log(rangeOfNumbers(3, 23))

//or
