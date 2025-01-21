const reverseString = function(word) {
    output = ''
    for(i = word.length; i >= 0; i--){
        output += word.charAt(i)
    }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
