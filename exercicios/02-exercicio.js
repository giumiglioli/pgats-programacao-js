
/*
Exercicio 2:
Validador de nomes para Tags

Alguns donos estão registrando os dogs com nomes mal formatados.
Crie um script para limpar e padronizar os nomes

Aplique as formatações e exiba:
- O nome original, como foi cadastrado
- O nome formatado

Extra: aplique uma regra que confira se o nome informado possui apenas uma palavra.
Exiba se o nome é válido ou não. Nome duplos são considerados inválidos
*/

/*Resolução corrigida com os extras */

 const nomeDog = "tHoR@!%  "
//const nomeDog = '   Ba!ley Mari@    '

let nomeFormatado = nomeDog.trim() //remove os espaços
nomeFormatado = removerCaracteresEspeciais(nomeFormatado)
nomeFormatado = tornarAPrimeiraLetraMaiuscula(nomeFormatado)


const valido = verificarSeONomeEValido(nomeFormatado)

console.log("Nome original:")
console.log(nomeDog)
console.log("Nome formatado:")
console.log(nomeFormatado)
console.log("O nome é válido ? :")
console.log(valido)

function removerCaracteresEspeciais(nome) {
  // return nome.replace(/[^a-zA-ZÀ-ÿ]/g, ""); //regex
  return nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
}

function removerEspacosEntreAPalavra(nome) {
  return nome.replace(/\s+/g, "")
}

function tornarAPrimeiraLetraMaiuscula(nome) { //primeira maiuscula e o resto minusculo
  return nome.charAt(0).toUpperCase() + nome.slice(1, nome.length).toLowerCase()
}

function verificarSeONomeEValido(nome) {  // nome é valido se ao separar as palavras dentro da string ele for 1, senão será nome composto
  return nome.split(" ").length === 1
}


/* Simples sem o extra
const nomeDog = "Be%@LA   M@aria"

console.log("Nome não formatado: ")
console.log(nomeDog)

let nomeFormatado = removerCaracteresEspeciais(nomeDog) //remover espaços e caps lock no meio do nome
nomeFormatado = nomeFormatado.charAt(0).toUpperCase() + nomeFormatado.slice(1, nomeFormatado.length).toLowerCase() //depois de remover os caracteres especiais e espaços roda novamente e coloca o primeiro em maíuscula e o resto em minuscula

console.log("Nome formatado: ")
console.log(nomeFormatado)

function removerCaracteresEspeciais(nome){
    return nome.replace(/\s+/g, "").replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
}
    */

/*
Repita o processo feito em aula e crie um novo repositório no Github. 
Crie o repositório, conecte ao seu projeto local e depois suba os arquivos
*/