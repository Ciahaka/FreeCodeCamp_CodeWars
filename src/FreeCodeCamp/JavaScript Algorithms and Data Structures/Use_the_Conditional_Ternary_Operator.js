/**
 * Использование условного (тернарного) оператора
 */
//Условный оператор, также называемый тернарным оператором, можно использовать как однострочное выражение if-else.

//Синтаксис таков: a ? b : c, где a - условие, b - код, который должен выполняться, если условие возвращает истину, а c - код, который должен выполняться, если условие возвращает ложь.

   // Следующая функция использует оператор if/else для проверки условия:

    function findGreater(a, b) {
        if(a > b) {
            return "a больше";
        }
        else {
            return "b больше или равно";
        }
    }
// Это можно переписать, используя условный оператор:

   const findGreater_1 = (a, b) => {
        return a > b ? "a больше" : "b больше или равно";
    }
// Используйте условный оператор в функции checkEqual, чтобы проверить, равны или нет два числа. Функция должна возвращать либо строку Equal, либо строку Not Equal.
const checkEqual = (a, b) => a===b? 'Equal' : 'Not Equal'

console.log(checkEqual(2, 2))
;