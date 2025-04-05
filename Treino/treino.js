const button = document.querySelector('#botao');

const completeName = document.querySelector('#nome-completo');

const cpf = document.querySelector('#cpf');
button.addEventListener('click', function (event){
  event.preventDefault();
  console.log("Botão clicado!")
})