// Вам дан объектный литерал, представляющий часть вашей коллекции музыкальных альбомов. Каждый альбом имеет уникальный идентификационный номер в качестве ключа и несколько других свойств. Не все альбомы имеют полную информацию.
//Вы начинаете с функции updateRecords, которая принимает литерал объекта, записи, содержащие коллекцию музыкальных альбомов, идентификатор, реквизит (например, исполнитель или треки) и значение. Завершите функцию, используя приведенные ниже правила, чтобы изменить объект, переданный функции.
//Ваша функция всегда должна возвращать весь объект коллекции записей. Если свойство не является дорожкой, а значение не является пустой строкой, обновите или установите для свойства этого альбома значение. Если реквизит — это треки, но в альбоме нет свойства треков, создайте пустой массив и добавьте к нему значение. Если реквизит — это треки, а значение не является пустой строкой, добавьте значение в конец существующего массива треков альбома. Если значение представляет собой пустую строку, удалите данное свойство реквизита из альбома.

const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {

    const album = records[id];

    if (value === "") {
        delete album[prop];
    } else if (prop !== "tracks") {
        album[prop] = value;
    } else {
        album["tracks"] = album["tracks"] || [];
        album["tracks"].push(value);
    }

    return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(recordCollection, 2548, "artist", ""));
console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
