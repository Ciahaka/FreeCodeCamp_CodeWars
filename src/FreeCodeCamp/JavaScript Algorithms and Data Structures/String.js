const myStr = 'I am a \"double quoted\" string inside \"double quotes\";'
console.log(myStr)

const myStr_2 = 'I am a "double quoted" string inside "double quotes";'
console.log(myStr_2)

const myStr_3 = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr_3)

const myStr_4 = 'FirstLine\n\t\\SecondLine\nThirdLine\nNewLine\rNowLine\n\bNewLine\n\fNewLine';
console.log(myStr_4)

const myStr_5 = 'This is the start.' + ' This is the end.';
console.log(myStr_5)

let myStr_6 = 'This is the first sentence. '
myStr_6 += 'This is the second sentence.'
console.log(myStr_6)

const myName_1 = 'Alexandr';
const myStr_7 = 'My name is ' + myName_1 + 'and I am well!';
console.log(myStr_7)

const someAdjective = "hard or good?";
let myStr_8 = "Learning to code is ";
myStr_8 += someAdjective
console.log(myStr_8)


let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength)


let firstLetterOfLastName = "";
const lastName_1 = "Lovelace";

firstLetterOfLastName = lastName_1[0]; // Change this line
console.log(firstLetterOfLastName)

let myStr_9 = "Jello World";
myStr_9 = "Hello World";
console.log(myStr_9)

const lastName_2 = "Lovelace";
const thirdLetterOfLastName = lastName_2[2];
console.log(thirdLetterOfLastName)

// Определить последний символ в строке
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
console.log(lastLetter)
console.log(lastLetter.length)
console.log(firstName.length)

const lastName_3 = "Lovelace";
const lastLetterOfLastName = lastName_3[lastName_3.length - 1]; // Change this line
console.log(lastLetterOfLastName)

//получить предпоследний символ в строке
const lastName_4 = "Lovelace";
const secondToLastLetterOfLastName = lastName_4[lastName_4.length - 2]; // Change this line
console.log(secondToLastLetterOfLastName)

// Заполнить пропуски в строке
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = 'My ' + myNoun + ' is very ' + myAdjective + ' and ' + myVerb + ' so ' + myAdverb;
console.log(wordBlanks)