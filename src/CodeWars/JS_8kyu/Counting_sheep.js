//Рассмотрим массив/список овец, где некоторые овцы могут отсутствовать на своем месте. Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает наличие).

const arrayOfSheep = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]

// const countSheep = arr => arr.reduce((acc, cur) => acc + cur, 0)   <---???

const countSheep = array1 => array1.filter(Boolean).length
// Boolean поможет создаст новый массив с элементами равными true. Решение аналогично записи ниже
// or
// const countSheep = arr => arr.filter(sh=>sh===true).length


console.log(countSheep(arrayOfSheep))

