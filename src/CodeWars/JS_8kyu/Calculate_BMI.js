/**
 Рассчитать индекс массы тела
 */
//Напишите функцию bmi, которая вычисляет индекс массы тела  (bmi = weight / height2).
//
// if bmi <= 18.5 return "Underweight"
//
// if bmi <= 25.0 return "Normal"
//
// if bmi <= 30.0 return "Overweight"
//
// if bmi > 30 return "Obese"

const bmi = (weight, height) => {
    const bmiDiv = weight / height ** 2
    console.log(bmiDiv)
    switch (true) {
        case bmiDiv <= 18.5:
            return 'Underweight'
        case bmiDiv <= 25.0:
            return 'Normal'
        case bmiDiv <= 30.0:
            return 'Overweight'
        default:
            return 'Obese'
    }
}
console.log(bmi(89, 1.56))

// или
const bmi_1 = (weight, height) => {
    let x = weight / height ** 2
    console.log(x)
    return x <= 18.5 ? 'Underweight' : x <= 25.0 ? 'Normal' : x <= 30.0 ? 'Overweight' : 'Obese'
}

console.log(bmi_1(45, 1.6))