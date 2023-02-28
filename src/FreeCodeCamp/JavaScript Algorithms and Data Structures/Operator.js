const testStrict = (val) => {
    if (val === 7) { // Change this line
        return 'Equal';
    }
    return 'Not Equal';
}
console.log(testStrict(10))
console.log(testStrict(7))

//--------------------------------
console.log(typeof 3)
console.log(typeof '3')

function compareEquality(a, b) {
    if (a === b) { // Change this line
        return 'Equal';
    }
    return 'Not Equal';
}

console.log(compareEquality(10, '10'))
console.log(compareEquality(10, 5))
console.log(compareEquality(10, 10))

//---------------------------------------------------

const testNotEqual = (val) => {
    if (!val) { // Change this line
        return 'Not Equal';
    }
    return 'Equal';
}
console.log(testNotEqual(10))
;
console.log(10 !== 10)
console.log(10 !== '10')

console.log(typeof (typeof true))

const testGreaterThan = (val) => {
    if (val > 100) {  // Change this line
        return 'Over 100';
    }

    if (val > 10) {  // Change this line
        return 'Over 10';
    }

    return '10 or Under';
}
console.log(testGreaterThan(150))
;


function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >=10) {  // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

console.log(testGreaterOrEqual(10))
;

const testLogicalAnd = (val) => {
    if (val <= 50 && val >= 25 ) {
        return "Yes"
    }
    return "No";
}
console.log(testLogicalAnd(30))
;

function testLogicalOr(val) {
    if (val < 10 || val >20) {
        return "Outside";
    }
    return "Inside";
}

console.log(testLogicalOr(1))
;