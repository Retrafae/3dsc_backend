//DECLARAR
function imprimeOla() {
  console.log("Olá");
}

function olaPessoa(nome) {
  console.log("Olá " + nome);
}

let salario = 1000;
//SET INTERVAL

setInterval(function () {
  salario = salario + 100;
  console.clear();
  console.log(`Salário: R$${salario},00`);
}, 2000);

setInterval(function dwww() {
  salario = salario - Math.random() * 100;
  console.clear();
  console.log(`Salário após imposto: R$${salario.toFixed(2)}`);
}, 1000);
//INVOCAR
// imprimeOla();
// olaPessoa("José");
