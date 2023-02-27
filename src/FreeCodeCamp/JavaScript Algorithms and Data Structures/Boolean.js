//Задача: создать функцию с инструкцией if. Функция должна возвращать строку 'Yes, that was true' при входящем параметре true. И строку 'No, that was false', при входящем параметре false

function trueOrFalse(wasThatTrue) {
  if(wasThatTrue){
      return 'Yes, that was true'
  }
return 'No, that was false'
}

console.log(trueOrFalse(true))
console.log(trueOrFalse(false))