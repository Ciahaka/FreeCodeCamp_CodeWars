const caseInSwitch = (val) => {
    switch (val) {
        case 1:
            return 'alpha'
            break;
        case 2:
            return 'beta'
            break;
        case 3:
            return 'gamma'
            break;
        case 4:
            return 'delta'
            break;
    }
    return val
}
console.log(caseInSwitch(5))
;
//Данная конструкция позволяет сделать выбор и многои вариантов.
//если не прервать case то начинает выполнятся следующий case. Независимо от того, подошёл ли первый.