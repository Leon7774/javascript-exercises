const convertToCelsius = function(tempF) {
  if(typeof tempF != 'number'){
    return "ERROR";
  }

  let returnVal = 5/9 * (tempF - 32);

  return (returnVal % 1 == 0) ? returnVal : parseFloat(returnVal.toFixed(1)) 
};

const convertToFahrenheit = function(tempC) {
  if(typeof tempC != 'number'){
    return "ERROR";
  }

  let returnVal = (tempC * 9/5) + 32;

  return (returnVal % 1 == 0) ? returnVal : parseFloat(returnVal.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
