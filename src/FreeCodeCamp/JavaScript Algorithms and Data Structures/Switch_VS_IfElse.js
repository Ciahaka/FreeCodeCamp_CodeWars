const chainToSwitch=(val)=> {
    let answer = ""
switch (val){
    case "bob":
        return "Marley"
    break;
    case 42:
        return "The Answer"
        break;
    case 1:
        return "There is no #1"
        break;
    case 99:
        return "Missed me by this much!"
        break;
    case 7:
        return "Ate Nine"
        break;
    default:
        return answer
    break
}
}
console.log(chainToSwitch(95))
;