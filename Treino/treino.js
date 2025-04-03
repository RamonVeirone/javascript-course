const numbers = [10, 20, 30, 45, 50, 60, 75];

const numbersInDobro = numbers.map(function (number) {
  return number * 3;
});

//console.log(numbersInDobro)

const ages = [16, 17, 18, 19, 22, 24];

const bestAges = ages.filter(function (ages) {
  return ages % 2 === 0;
});

//console.log(bestAges)

const reducedNumbers = numbers.reduce(function (numbers, accumulator) {
  return accumulator + numbers;
}, 0);

//console.log(reducedNumbers)

const person = {
  firstName: "Ramon",
  lastName: "Alves",
  age: "23",
  height: "168",
  hobbies: ["Jogar videogame", "Economia", "Tecnologia", "Investimentos"],
};

const primeiroNome = person.firstName;

console.log(primeiroNome)