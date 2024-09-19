//array -> estrutura de dados indexada

const polemonlist = ["pilachu", "k", "hh,u"];
//console.log(polemon)

// for (let i = 0; i < polemon.length; i++){
//   console.log(polemon[i])
// }
for (let polemon in polemonlist) {
  console.log(polemonlist[polemon]);
}

for (let polemon of polemonlist){
  console.log(polemon)
}