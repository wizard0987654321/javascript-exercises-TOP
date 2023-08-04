const getTheTitles = function(array) {
    let length = array.length;
    let titles = [];

    for (let i = 0; i < length; i++) {
        let titleToAdd = array[i]["title"]
        titles.push(titleToAdd);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
