//Удалите свойство tails из myDog. Вы можете использовать либо точку, либо квадратную нотацию.

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
delete myDog.tails
console.log(myDog)