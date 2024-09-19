const intervalo1 = setInterval(function () {
  console.log("Olá");
}, 200)
//Limpar interval
clearInterval(intervalo1)
const timeout1 = setTimeout(function () {
  console.log("Olá");
}, 200)
//Limpar timeout
clearTimeout(timeout1)

//array
const names = ["José", "Maria", "João", "Ana"];
names[2] //= "José";

//Objeto
const cachorro= {
  patas:4,
  cor:"Verde",
  raca:"indeterminado",
  castrado:true,
};
console.log(cachorro)
console.log(cachorro.cor)

Object.keys(cachorro)
Object.values(cachorro)

