// CRIE UM MODULO ESM personagem.js
// CRIE FUNÇÕES PARA
// IMPRIMIR UM OBJETO COM (nome, poder, vida)
// EXPORTE O A FUNÇAO (imprimirPersonagem)
// IMPORTE O MODULO DENTRO DO SEU ARQUIVO
// index.js
import { imprimirPersonagem } from "./personagem.js";

const Guerreiro = imprimirPersonagem("Guerreiro", "Espada", 100);
const Mago = imprimirPersonagem("Mago", "Bola de Fogo", 50);
const Arqueiro = imprimirPersonagem("Arqueiro", "Arco e Flecha", 80);

console.log(Guerreiro)
console.log(Mago)
console.log(Arqueiro)

//CRIE UM MODULE CJS(.cjs)
//IMPORTE AS FUNÇÕES (PATH, FS)
//EXPORTAR PATH E FS
//FINALMENTE IMPORTE-OS AQUI NO INDEX.JS

