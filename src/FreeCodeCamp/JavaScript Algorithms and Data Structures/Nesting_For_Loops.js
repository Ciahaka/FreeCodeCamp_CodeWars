//Вложение циклов
//Если у вас есть многомерный массив, вы можете использовать ту же логику, что и предыдущая путевая точка, для прохода как по массиву, так и по любым подмассивам. Вот пример:

 const arr = [
 [1, 2], [3, 4], [5, 6]
 ];

 for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}


//Это выводит каждый подэлемент в arr по одному. Обратите внимание, что во внутреннем цикле мы проверяем .length для arr[i], так как arr[i] сам по себе является массивом.

//Измените функцию multipleAll так, чтобы она возвращала произведение всех чисел в подмассивах массива.
console.log('------------------')

const multiplyAll = (arr) => {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
        //   product = product * arr[i][j]
            product *= arr[i][j]
        }}
    return product;
 }
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
console.log(multiplyAll([[1], [2], [3]]));
console.log(multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]));

// Мы проверяем длину arr в цикле i for и длину arr[i] в цикле j for.
// Мы умножаем переменную продукта на саму себя, потому что она равна 1, а затем умножаем ее на подмассивы.
// Два подмассива для умножения — это arr[i] и j.