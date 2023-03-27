/**
 Удаление элементов
 */
//Возьмите массив и удалите из него каждый второй элемент. Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.
//Пример:
// ["Сохранить", "Удалить", "Сохранить", "Удалить", "Сохранить", ...] --> ["Сохранить", "Сохранить", "Сохранить", ...].
//
// Ни один из массивов не будет пустым, поэтому об этом можно не беспокоиться!

const removeEveryOther = arr => arr.filter((_, index) => index % 2 === 0)
//const removeEveryOther = arr => arr.filter((_, index) => !(index % 2))


console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(removeEveryOther([[1, 2]]))
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]))

//или
const removeEveryOther_1 = arr => {
    let filteredArr = []
    for (let i = 0; i < arr.length; i += 2) {
        filteredArr.push(arr[i])
    }
    return filteredArr
}
console.log(removeEveryOther_1(['Hello', 'Goodbye', 'Hello Again']))
console.log(removeEveryOther_1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(removeEveryOther_1([[1, 2]]))
console.log(removeEveryOther_1([['Goodbye'], {'Great': 'Job'}]))
