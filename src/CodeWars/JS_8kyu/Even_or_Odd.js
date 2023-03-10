const evenOrOdd = (number) => number % 2 ? 'Odd' : 'Even'
console.log(evenOrOdd(2))

//Задача: Необходимо создать функцию, которая будет принимать целое число и возвращать 'Even' -если число положительное, и возвращать 'Odd' - если число отрицательно.

//Решение: Как определить, входящие число является положительныцм или отрицательным? Можно воспользоваться оператором %, который даёт остаток от деления. Если входящее число делиться на 2 без остатка - оно положительное. Если остаток присутствует - то отрицательное.
//Говорим, что если пришедшее число делиться на 2 с остатком, то верни 'Odd', а иначе верни 'Even'

//Решение при помощи инструкции if else
function even_or_odd(number) {
    if (number%2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(even_or_odd(5))

// best practices
const evenOrOdd_1 = n => n & 1 ? 'Odd' : 'Even'
console.log(evenOrOdd_1(4))

// Использован побитовый оператор - одиночный &, который сравнивает двоичное представление приходящегго числа с 1. Каждое двоичное число, заканчивающееся на 1 будет возвращать true('Odd'), поскольку мы его сравниваем с 1!
// expected output: 0;
console.log(10 & 1); // 1010 & 0001 = 0000

// expected output: 1;
console.log(9 & 1); // 1001 & 0001 = 0001
