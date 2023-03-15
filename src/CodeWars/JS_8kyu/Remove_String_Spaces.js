//Напишите функцию, которая удаляет пробелы из строки, а затем возвращает результирующую строку.

//Решение при помощи регулярного выражения и метода replace. g - поиск символа ведётся глобально т.е по всей строке. Ищем пробел / / . Метод replace найдёт и удалит заданный разделитель по всей строке( в начале, в конце, в середине и в любом количестве)
const noSpace = x=>x.replace(/ /g,'')

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'))
console.log(noSpace('8aaaaa dddd r     '))


//Решение при помощи методов split и join.  Вначале преобразуем строку в массив элементов разбив по пробелу. Затем собираем обратно в строку с разделителем пустая строка.
const noSpace1 = x=>x.split(' ').join('')

console.log(noSpace1('8 j 8   mBliB8g  imjB8B8  jl  B'))
console.log(noSpace1('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'))
console.log(noSpace1('8aaaaa dddd r     '))