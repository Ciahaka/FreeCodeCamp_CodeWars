const numberArr = [3, 12, -4, 4, -5]
const positiveSum = (arr) => {
    const positiveArr = numberArr.map(n => Math.sign(n) >= 0 ? n : null)
    return positiveArr.reduce((acc, num) => acc + num, 0)
}
console.log(positiveSum(numberArr))
// методом масссива map перебрал исходный массив, применив к нему Math.sign, отобрал положительные числа. После методом reduce нашёл сумму этих чисел. Можно было записать всё в одну строку, применив reduce через dot запись к map.
//Но есть менее энергозатратное решение в одну строку. Можно обойтись одним методом reduce, а положительные числа найти просто сравнив элементы с 0
//Говорим, что если элемент больше нуля, то верни сумму значения в acc и нового элемента, иначе верни значение хранимое в acc. И указываем стартовое значение для acc
const positiveSum_1 = (arr) => arr.reduce((acc, num) => num > 0 ? acc + num : acc, 0)

console.log(positiveSum_1(numberArr))