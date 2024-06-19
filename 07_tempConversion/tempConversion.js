const convertToCelsius = function(temp) {
  celsius = (temp - 32) / (9/5);
  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  fahrenheit = (temp * (9/5)) + 32;
  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
