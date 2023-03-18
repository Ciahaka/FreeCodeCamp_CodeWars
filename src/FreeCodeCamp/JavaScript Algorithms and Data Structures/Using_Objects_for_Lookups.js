// Объекты можно рассматривать как хранилище ключей/значений, например словарь. Если у вас есть табличные данные, вы можете использовать объект для поиска значений, а не оператор switch или цепочку if/else. Это наиболее полезно, когда вы знаете, что ваши входные данные ограничены определенным диапазоном.
//Преобразуйте оператор switch в объект с именем lookup. Используйте его, чтобы найти val и присвоить связанную строку переменной результата.
const phoneticLookup = (val) => {
        let result = '';

        // Only change code below this line

        const lookup = {
            'alpha': 'Adams',
            'bravo': 'Boston',
            'charlie': 'Chicago',
            'delta': 'Denver',
            'echo': 'Easy',
            'foxtrot': 'Frank',
        }
        result = lookup[val]

        return result
    }

;
console.log(phoneticLookup('delta'))