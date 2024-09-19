/**CRIE UM ARRAY DE OBJETOS => PESSOAS 
*  COM OS SEGUINTES ATRIBUTOS: NOME/SOBRENOME
*  CRIE UMA FUNÇÃO QUE ITERE SOBRE O ARRAY
*  E RETIRE NOMES E SOBRENOMES
*  CRIE UMA VARIAVEL COM O CONTEUDO: 
*        -> const emailBase = "@escola.pr.gov.br"
*  A PARTIR DESSES DADOS FORME UM @escola com
*  NOME.SOBRENOME+EMAILBASE
*/ 

const pessoas = [
  {nome : "João",
   sobrenome : "Silva"},
  {nome : "Maria",
   sobrenome : "Souza"}
]

const emailBase = "@escola.pr.gov.br"

function pegarNomes(pessoas){
  for(pessoas of pessoas){
    const nome = pessoas.nome
    const sobrenome = pessoas.sobrenome
    const email = nome + "." + sobrenome + emailBase
    console.log(email)
  }
}
pegarNomes(pessoas)