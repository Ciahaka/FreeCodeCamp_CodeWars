//Создайте функцию, которая выдает персонализированное приветствие. Эта функция принимает два параметра: имя и владелец. Используйте условные выражения, чтобы вернуть правильное сообщение:
//name equals owner return 'Hello boss'
//otherwise return 'Hello guest'
const greet = (name, owner) => owner === name ? 'Hello boss' : 'Hello guest'

console.log(greet('Daniel', 'Daniel'))
console.log(greet('Greg', 'Daniel'))
