//В игре казино Блэкджек игрок может определить, будет ли у него преимущество в следующей раздаче над казино, отслеживая относительное количество старших и младших карт, оставшихся в колоде. Это называется подсчетом карт. Наличие большего количества старших карт в колоде благоприятствует игроку. Каждой карте присваивается значение в соответствии с таблицей ниже. Когда счет положительный, игрок должен делать большие ставки. Когда счет равен нулю или отрицательный, игрок должен делать ставку меньше.

//Вы напишете функцию подсчета карт. Он получит параметр карты, который может быть числом или строкой, и увеличит или уменьшит глобальную переменную счетчика в соответствии со значением карты (см. таблицу). Затем функция вернет строку с текущим счетчиком и строку Bet, если счетчик положительный, или Hold, если счетчик нулевой или отрицательный. Текущий счет и решение игрока (Bet или Hold) должны быть разделены одним пробелом.

let count = 0;

function cc(card) {
switch (card){
    case 2: case 3: case 4: case 5: case 6:
        count++
        break
    case 10: case 'J': case 'Q': case 'K': case 'A':
        count--
        break
}
if (count > 0){
    return count + ' Bet'
}else return count + ' Hold'

}

console.log(cc(3));
console.log(cc(5));
console.log(cc('Q'));
console.log(cc(4));
console.log(cc('A'));