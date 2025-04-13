class Pessoa{
  constructor(nome, sobrenome, idade, altura){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.altura = altura;
  }

  tamanho(){
    return console.log(`Minha altura é ${this.altura}`)
  }
}

const p1 = new Pessoa('Ramon', 'Alves', 24, 168)

console.log(p1.tamanho());