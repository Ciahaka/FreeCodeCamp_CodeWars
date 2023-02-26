const reusableFunction = () => {
    console.log('Hi World')
}
reusableFunction()

//Сумма чисел, переданных в функцию
const functionWithArgs = (arg1, arg2) => {
    console.log(arg1 + arg2)
}
functionWithArgs(1, 2)
functionWithArgs(7, 9)

const timesFive = (arg) => {
    return arg * 5
}
const er = timesFive(5)
const or = timesFive(2)
const ir = timesFive(0)
console.log(er)
console.log(or)
console.log(ir)
//__________________________________
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
   let outerWear = 'sweater'
    // Only change code above this line
    return outerWear;
}
console.log(myOutfit())
// Понимание undefined

let sum = 0;

function addThree() {
    sum = sum + 3;
}

const addFive =()=>{
    sum = sum + 5
}
console.log(sum)
console.log(addThree())
console.log(sum)
console.log(addFive())
console.log(sum)

let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7)
console.log(processed)