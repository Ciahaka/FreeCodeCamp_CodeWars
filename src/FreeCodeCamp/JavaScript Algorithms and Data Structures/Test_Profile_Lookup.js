/**
 * Поиск профиля
 */

//У нас есть массив объектов, представляющих разных людей в наших списках контактов.
// Для вас была заранее написана функция lookUpProfile, которая принимает name и свойство (prop) в качестве аргументов.
// Функция должна проверять, является ли name фактическим именем первого контакта firstName, а данное свойство (prop) является свойством этого контакта.
// Если оба верны, верните «value» этого свойства.
// Если имя не соответствует ни одному контакту, то вернуть строку No such contact.
// Если свойство не соответствует каким-либо действительным свойствам контакта, найденному для совпадения с именем, верните строку No such property.

// Setup
const contacts = [
    {
        firstName: 'Akira',
        lastName: 'Laine',
        number: '0543236543',
        likes: ['Pizza', 'Coding', 'Brownie Points'],
    },
    {
        firstName: 'Harry',
        lastName: 'Potter',
        number: '0994372684',
        likes: ['Hogwarts', 'Magic', 'Hagrid'],
    },
    {
        firstName: 'Sherlock',
        lastName: 'Holmes',
        number: '0487345643',
        likes: ['Intriguing Cases', 'Violin'],
    },
    {
        firstName: 'Kristian',
        lastName: 'Vos',
        number: 'unknown',
        likes: ['JavaScript', 'Gaming', 'Foxes'],
    },
];

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop]
            }
            return 'No such property'
        }
    }
    return 'No such contact'
}

console.log(lookUpProfile('Akira', 'likes'));
console.log(lookUpProfile('Akira', 'address'));
console.log(lookUpProfile('Kristian', 'lastName'));
console.log(lookUpProfile('Sherlock', 'likes'));
console.log(lookUpProfile('Harry', 'likes'));
console.log(lookUpProfile('Bob', 'potato'));
console.log(lookUpProfile('Bob', 'number'));

//Выполняется цикл for, начиная с первого объекта в списке контактов.
// Если параметр firstName, переданный в функцию, совпадает со значением ключа "firstName" в первом объекте, оператор if проходит.
// Затем мы используем метод .hasOwnProperty() (проверяет наличие заданного свойства и возвращает булево значение) с параметром prop в качестве аргумента. Если он истинен, возвращается значение prop.
// Если второй оператор if не сработал, то такое свойство не возвращается.
// Если первый оператор if не сработал, цикл for переходит к следующему объекту в списке контактов.
// Если параметр firstName не соответствует последнему объекту контактов, цикл for завершается и возвращается No such contact.