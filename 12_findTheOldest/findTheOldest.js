const findTheOldest = function (array) {
    let oldest = array[0];

    for (let i = 1; i < array.length; i++) {
        if (!oldest.yearOfDeath) {
            oldest.yearOfDeath = new Date().getFullYear();
        }

        if (array[i].yearOfDeath - array[i].yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) {
            oldest = array[i];
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
