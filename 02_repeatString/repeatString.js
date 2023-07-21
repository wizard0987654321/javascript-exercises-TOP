const num = prompt("Provide a number");
const word = prompt("Provide a word");

const repeatString = function repeat(word, num) {
    let result = "";

    if (num < 0) {
        result += "ERROR";
    }

    for (let i = 0; i < num; i++) {
        result += word;
    }
    
    return result;
};

// Do not edit below this line
module.exports = repeatString;
