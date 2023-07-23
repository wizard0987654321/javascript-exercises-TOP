const sumAll = function sum(firstNum, secondNum) {
    let result = 0;
    // Checking, whether both arguments are positive integers
    if (secondNum < 0 || firstNum < 0)  {
        return ('ERROR');
    // Checking, whether types of both arguments are numbers
    } else if (typeof(firstNum) != "number" || 
        typeof(secondNum) != "number") {
        return ('ERROR');
    // Checking, which argument has higher value and looping according to that
    } else if (secondNum < firstNum) {
        for (let i = secondNum; i <= firstNum; i++) {
            result += i;
        }
    }
    
    for (let i = firstNum; i <= secondNum; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
