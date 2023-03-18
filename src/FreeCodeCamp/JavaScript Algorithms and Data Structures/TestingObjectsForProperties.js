//Измените функцию checkObj, чтобы проверить, содержит ли объект, переданный функции (obj), определенное свойство (checkProp). Если свойство найдено, верните значение этого свойства. Если нет, вернуть «Не найдено».

const checkObj=(obj, checkProp) =>{
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp]
    } else {
        return 'Not Found'
    }
}

console.log(checkObj({gift: 'pony', pet: 'kitten', bed: 'sleigh'}, 'pet'))
console.log(checkObj({gift: 'pony', pet: 'kitten', bed: 'sleigh'}, 'house'))
console.log(checkObj({pet: 'kitten', bed: 'sleigh'}, 'gift'))


