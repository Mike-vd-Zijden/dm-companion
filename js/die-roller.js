const mathematician = {
    '+': function (x, y) { return x + y;},
    '-': function (x, y) { return x - y;},
    '/': function (x, y) { return x / y;},
    '*': function (x, y) { return x * y;},
};

function d100() {
    return roll('1d100');
}

function roll(rollString) {
    let dissectedString = rollString.replace(/\s/g, '');

    let numberOfDice = parseInt(dissectedString.replace(/(^\d+)/g, '$1'));
    dissectedString = dissectedString.slice(numberOfDice.toString().length);

    /*
     * Different types of roll types are:
     * d - simply roll the die and add the results (1d6)
     *
     * TODO: dissect string to find rolltype. For now we only have 'd'
     */
    let rollType = dissectedString[0];
    dissectedString = dissectedString.slice(1);

    let sizeOfDie = parseInt(dissectedString.replace(/(\d+)/g, '$1'));
    dissectedString = dissectedString.slice(sizeOfDie.toString().length);

    let mathOperator = '+';
    let mathNumber = 0;
    if (dissectedString.length > 1) {
        mathOperator = dissectedString[0];
        dissectedString = dissectedString.slice(1);

        mathNumber = dissectedString;
    }

    let result = 0;
    for (let diceRolled = 0; diceRolled < numberOfDice; diceRolled++) {
        result += rollDie(sizeOfDie);
    }

    return mathematician[mathOperator](result, mathNumber);
}

function rollDie(dieSize) {
    return Math.floor(Math.random() * dieSize + 1);
}

function checkAgainstTable(table, rollResult = d100()) {
    let rolledValue = '';

    Object.keys(table).reverse().forEach(function (target) {
        if (rollResult <= parseInt(target)) {
            rolledValue = table[target];
        }
    });

    return rolledValue;
}
