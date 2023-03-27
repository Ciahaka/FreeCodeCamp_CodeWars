/**
 * Неожиданный разбор
 *
 * function getStatus(isBusy) {
 *     var msg = (isBusy ? "busy" : "available");
 *     return
 *     {
 *         status: msg
 *    }
 * }
 */

//Ожидаемое поведение
// Функция должна возвращать словарь/Object/Hash с "status" в качестве ключа, значение которого может быть : "занят" или "доступен" в зависимости от истинностного значения аргумента is_busy.
// Но, как вы увидите после нажатия кнопки RUN или ATTEMPT, в этом коде есть несколько ошибок, пожалуйста, исправьте их.

const getStatus = (isBusy) => {
    let msg = (isBusy ? "busy" : "available");
    return {status: msg}
}
console.log(getStatus(true))
console.log(getStatus(false))

