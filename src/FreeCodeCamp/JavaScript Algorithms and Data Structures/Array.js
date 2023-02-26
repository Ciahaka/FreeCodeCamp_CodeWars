const myArray = ['bla-bla', 1];
console.log(myArray)

//Вложение массивов. Многомерный массив
const myArray_1 = [[], []];
console.log(myArray_1)

//Обращение к элементу массива при помощи индекса
const myArray_2 = [50, 60, 70];
const myData = myArray_2[0]
console.log(myData)

const myArray_3 = [18, 64, 99];
myArray_3[0] = 45

//Достать значение 8 из многомерного массива
const myArray_4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData_1 = myArray_4[2][1];
console.log(myData_1)

// Метод массива push
const myArray_5 = [["John", 23], ["cat", 2]];
myArray_5.push(["dog", 3])
console.log(myArray_5)

// Метод массива pop
const myArray_6 = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray_6.pop()
console.log(removedFromMyArray)
console.log(myArray_6)

// Метод массива shift
const myArray_7 = [["John", 23], ["cat", 2]];
const removedFromMyArray_1 = myArray_7.shift()
console.log(removedFromMyArray_1)
console.log(myArray_7)

// Метод массива unshift
const myArray_8 = [["John", 23], ["dog", 3]];
myArray_8.shift()
myArray_8.unshift(["Paul", 35]);
console.log(myArray_8)

// Список покупок
const myList = [
    ["Chocolate Bar", 15],
    ["Milk", 2],
    ["Butter", 4],
    ["Soda", 9],
    ["Banana", 5],
];
console.log(myList)

