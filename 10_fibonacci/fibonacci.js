const fibonacci = function(number) {
    let fibonacciNums = [1, 1];
    let i = 0;
    let position = Number(number)

    if (position < 0) {
        return "OOPS";
    }else if (position === 0) {
        return 0;
    }else if (position === 1) {
        return 1;
    }else if (position === 2) {
        return 1;
    };

    while (fibonacciNums.length <= number ) {
        let numToAdd = 0;
        numToAdd += fibonacciNums[i] + fibonacciNums[i + 1];
        fibonacciNums.push(numToAdd);
        i++;
    }

    return fibonacciNums[i];
};

// Do not edit below this line
module.exports = fibonacci;
