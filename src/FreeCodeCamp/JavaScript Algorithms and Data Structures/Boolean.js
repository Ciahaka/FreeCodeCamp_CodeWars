//Задача: создать функцию с инструкцией if. Функция должна возвращать строку 'Yes, that was true' при входящем параметре true. И строку 'No, that was false', при входящем параметре false

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return 'Yes, that was true'
    }
    return 'No, that was false'
}

console.log(trueOrFalse(true))
console.log(trueOrFalse(false))

//---------------------------------------------
const testStrict = (val) => {
    if (val === 7) { // Change this line
        return 'Equal';
    }
    return 'Not Equal';
}
console.log(testStrict(10))
console.log(testStrict(7))

//--------------------------------
console.log(typeof 3)
console.log(typeof '3')

function compareEquality(a, b) {
    if (a === b) { // Change this line
        return 'Equal';
    }
    return 'Not Equal';
}

console.log(compareEquality(10, '10'))
console.log(compareEquality(10, 5))
console.log(compareEquality(10, 10))

//---------------------------------------------------

const testNotEqual = (val) => {
    if (!val) { // Change this line
        return 'Not Equal';
    }
    return 'Equal';
}
console.log(testNotEqual(10))
;
console.log(10 !==10)
console.log(10 !=='10')