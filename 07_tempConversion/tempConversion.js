const convertToCelsius = function toCelsius(number) {
    
    let result = (5 / 9) * (number-32);
    
    if (!Number.isInteger(result)) {
      result = parseFloat(result.toFixed(1));
    }   

    return result;
  };

const convertToFahrenheit = function toFarenheit(number) {
  let result = (9 / 5) * (number) + 32;
    
  if (!Number.isInteger(result)) {
    result = parseFloat(result.toFixed(1));
  }   

  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
