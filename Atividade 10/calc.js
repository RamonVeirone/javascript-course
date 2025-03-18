const form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  let peso = inputPeso.value.replace(",", ".");
  let altura = inputAltura.value.replace(",", ".");

  peso = Number(peso);
  altura = Number(altura);

  if (isNaN(peso) || peso <= 0) {
    setResultado("Peso inválido. Use um número positivo.", false);
    return;
  }

  if (isNaN(altura) || altura <= 0) {
    setResultado("Altura inválida. Use um número positivo.", false);
    return;
  }

  if (altura < 0.5 || altura > 2.5) {
    setResultado("Altura fora do intervalo comum (0.5 a 2.5 m). Verifique.", false);
    return;
  }

  const imc = getIMC(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc})`;
  setResultado(msg, true);
});

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 40) return nivel[5];
  if (imc >= 35) return nivel[4];
  if (imc >= 30) return nivel[3];
  if (imc >= 25) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  return nivel[0];
}

function getIMC(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  const p = criaP();
  p.innerHTML = msg;
  p.classList.add(isValid ? "paragrafo-resultado" : "bad");
  resultado.appendChild(p);
}