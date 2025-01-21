const removeFromArray = function(array, ...otherInputs) {
    let outputArray = [];

    for(i = 0; i < array.length; i++){
        let add = true;
        for(j = 0; j < otherInputs.length; j++){
            if(array.at(i) === otherInputs.at(j)){
                add = false;
            }
        }

        if(add){outputArray.push(array[i])}
    }

    return outputArray
};

// Do not edit below this line
module.exports = removeFromArray;

