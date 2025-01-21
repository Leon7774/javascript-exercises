const sumAll = function(num1, num2) {

    if(typeof num1 != 'number' || typeof num2 != 'number'){
        return "ERROR"
    }
    
    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR"
    }

    if(num1 < 0 || num2 < 0){
        return "ERROR"
    }

    if(num1 > num2){
        temp = num2
        num2 = num1
        num1 = temp
    }

    let returnSum = 0
    
    for(i = num1; i <= num2; i++){
        returnSum += i;
    }

    return returnSum
};

// Do not edit below this line
module.exports = sumAll;
