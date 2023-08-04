const palindromes = function (word) {
    let example = word.toUpperCase();
    example = example.replace(/[^\w\s]/g, '');
    example = example.replace(/\s/g, "");
    let midpoint = 0;
    let length = example.length;
    

    if (length % 2 === 0) {
        midpoint += (length / 2);

        let first = example.substring(0, midpoint);
        let second = example.substring(midpoint);
        second = second.split('').reverse().join('');
        return first === second ? true:
        false;
    }
        midpoint += Math.floor(length / 2);

        let first = example.substring(0, midpoint);
        let second = example.substring(midpoint + 1);
        second = second.split('').reverse().join('');
        return first === second ? true:
        false;
};

// Do not edit below this line
module.exports = palindromes;
