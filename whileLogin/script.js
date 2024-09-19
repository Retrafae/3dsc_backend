const usuario = "admin"
const senha = "1234"
let estaLogado = false 
let u, s = ""

while(!estaLogado) {
  u = prompt("Digite o usuário: ")
  s = prompt("Digite a senha: ")

  if(u == usuario && s == senha) {
    alert("bem vindo")
    estaLogado = true
  } else {
    alert("Usuário ou senha inválidos")
  }

  
}