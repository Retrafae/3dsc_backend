
    /*
        A) CRIE UM ARRAY DE OBJETOS CHAMADO > PESSOAS
        B) FAÇA UMA FUNÇÃO QUE RECEBA UM ARRAY
        C) ITERE SOBRE O ARRAY DE PESSOAS E VERIFIQUE SE
            O ITEM SEXO == 'F' OU 'M'
        D) SE FOR IGUAL A 'F', INSIRA A PESSOA CORRENTE EM UM ARRAY CHAMADO MENINAS, SE FOR M' INSIRA A PESSOA EM UM ARRAY CHAMADO MENINOS
        E) FINALMENTE, IMPRIMA OS TRÊS ARRAYS
    

    const PESSOAS = [
        { nome: "Maria", sexo: "F" },
        { nome: "João", sexo: "M" },
        { nome: "Carla", sexo: "F" },
        { nome: "Pedro", sexo: "M" }
    ];
     const MENINAS = [];
     const MENINOS = [];
    function separateByGender(arr) {
        

        arr.forEach(person => {
            if (person.sexo === "F") {
                MENINAS.push(person);
            } else if (person.sexo === "M") {
                MENINOS.push(person);
            }
        });

        console.log("PESSOAS:", arr);
        console.log("MENINAS:", MENINAS);
        console.log("MENINOS:", MENINOS);
    }

    separateByGender(PESSOAS);
*/

//------------------------------------------------------------------------//
const PESSOAS = [
     {nome: "Joalberson",sexo:"M"},
     {nome: "Hugana",sexo:"F"},
     {nome: "Felisberta",sexo:"F"},
     {nome: "José",sexo:"M"}
]
const Meninos = [];
const Meninas = [];

function filtroPessoas(arrPessoas){
    if (typeof arrPessoas == "object"){
        for(pessoa of arrPessoas){
     pessoa.sexo === "F"
         ? Meninas.push(pessoa.nome)
         : Meninos.push(pessoa.nome);
        }    
    }else {
        console.error(arrPessoas)
    }
}
filtroPessoas(PESSOAS);
console.log("Meninas")
console.log(Meninas)
console.log("Meninos")
console.log(Meninos)