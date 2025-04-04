const numbers = [10, 20, 30, 45, 50, 60, 75];

const numbersInDobro = numbers.map(function (number) {
  return number * 3;
});

// console.log(numbersInDobro)

const ages = [16, 17, 18, 19, 22, 24];

const bestAges = ages.filter(function (ages) {
  return ages % 2 === 0;
});

// console.log(bestAges)

const reducedNumbers = numbers.reduce(function (numbers, accumulator) {
  return accumulator + numbers;
}, 0);

// console.log(reducedNumbers)

const person = {
  firstName: "Ramon",
  lastName: "Alves",
  age: "23",
  height: "168",
  hobbies: ["Jogar videogame", "Economia", "Tecnologia", "Investimentos"],
};

const personJson = JSON.stringify(person); // comando pra enviar para para servidores

// console.log(personJson)

// for (let index = 1; index <= 10; index++) {
//  console.log(index);}

const carros = ["BMW", "Audi", "Mercedes"];

// for (let i = 0; i < carros.length; i++) {
//  console.log(carros[i]);}

function soma(x, y) {
  return x + y;
}

//console.log(soma(5,8));

class Pessoa {
  construtor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName(){
    console.log (`${this.firstName} + ${this.lastName}`);
  }
}

const novapessoa = new Pessoa("Ramon", "Alves", 23);

console.log(novapessoa);