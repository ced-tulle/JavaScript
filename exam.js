const temperatures = [20, 30, 40];
const toFahrenheit = (celsius) => `${celsius}C is ${celsius * 9 / 5 + 32}F`;

let total = 0;

temperatures.forEach((celsius) => console.log(toFahrenheit(celsius)));
temperatures.forEach((celsius) => {
  total += celsius;
});
console.log("Total temperature:", total);