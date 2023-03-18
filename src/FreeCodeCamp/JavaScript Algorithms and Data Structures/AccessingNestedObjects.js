//Получите доступ к объекту myStorage и назначьте содержимое свойства перчаточного ящика переменной gloveBoxContents. По возможности используйте запись через точку для всех свойств, в противном случае используйте запись в квадратных скобках.

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside['glove box'];
console.log(gloveBoxContents)