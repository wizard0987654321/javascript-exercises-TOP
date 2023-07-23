const removeFromArray = function remove(array, ...args)  {

    /* Creating new array, where we are going to store 
    value, that should not be removed from an array
    */

    let newArray = [];

    // Looping through array elements
    for (index in array) {

        /* Checking whether array contains arguments
        passed as ...args, in order to create new array,
        with only the value, that should not have
        been removed from an original array
        */
       
        if (args.includes(array[index]) === false) {
            newArray.push(array[index]);
        }
    };
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
