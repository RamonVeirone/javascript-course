function psp() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");
  
    const pessoas = [];
  
    function recebeEvento(evento) {
      evento.preventDefault();
  
      const nome = form.querySelector(".nome").value;
      const sobrenome = form.querySelector(".sobrenome").value;
      const altura = form.querySelector(".altura").value;
      const peso = form.querySelector(".peso").value;
  
      function people(nome, sobrenome, altura, peso) {
        return {
          nome: nome,
          sobrenome: sobrenome,
          altura: altura,
          peso: peso
        };
      }
  
      const novaPessoa = people(nome, sobrenome, altura, peso);
      pessoas.push(novaPessoa);
  
      resultado.textContent = `Total de pessoas cadastradas: ${pessoas.length}`;
    }
  
    form.addEventListener("submit", recebeEvento);
  }
  
  psp();