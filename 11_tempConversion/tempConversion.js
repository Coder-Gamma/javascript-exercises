const convertToCelsius = function(tempInF) {

  const result = ((tempInF-32) * 5/9);

  return Math.ceil(result *10)/10;
};

const convertToFahrenheit = function(tempInC) {

  const result = (tempInC *9/5) + 32;
    return Math.ceil(result *10)/10;

};
convertToCelsius(32);
convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
