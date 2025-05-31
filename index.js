/**
 * Console API - Exercício para mensagens no console.
 */
/** 
console.log("Aula inicial de JS")
console.error("Falha na execução")
console.warn("Atenção")
console.table([{
    nome: 'Giuliana',
    turma: '02',
    disciplina: 'Proj JS'
},
{
    nome:'Bela',
    turma:'02',
    disciplina:'Prog JS'
}])
*/


/**
 * Constantes e Variaveis
 */
//imformações que não mudam e ela precisa ser iniciada (declara a variavel e atribui um valor antes)
const nome = 'Bela'
const raca = 'ShihTzu'
const sexo = 'Femea'
const cor = 'Branca/Creme'
const dataDeNascimento = '28/03/2015'
const porte = 'P'


//informacoes que podem mudar (posso criar e não preciso atribuir um valor no momento da definição - posso declarar vazia e uso ela dentro do código de teste)
let idade = 10
let peso = 6.5
let vacinado  = true
let castrado = true
let tamanho = 'P'


const irmaos =[
{
  nome: "Thor",
  idade: 2
},
{
  nome: "Hela",
  idade: 3
},

]
console.table(irmaos);

/**
 * Manipulação de strings
 */

const numeroAula = "03"
const turma = "02"
//concatenação de strings
console.log("Aula 03 da Turma " + turma + " no sabado 05 de Abril ")
// interpolação de strings
console.log (`Aula ${numeroAula} da Turma ${turma} no Sábado dia 05 de Abril`)

//calculo de numero de caracteres
console.log(numeroAula.length)

//split - separar a string
const nomesDeAlunos = "Giuliana André Goku Lucas Lenilson"
const nomesDeAlunosSplit = nomesDeAlunos.split(" ")// entre parenteses inclui a regra para a separação da string
console.log(nomesDeAlunosSplit)                    //volta as strinsg separadas em um vetor

//Padronização de strings LowerCase e UpperCase
console.log(nomesDeAlunos.toLowerCase()) //minusculo
console.log(nomesDeAlunos.toUpperCase()) //maiusculo

//includes - volta boleano se inclui um pedaço da string (exatamente igual - é case sensitive)
console.log(nomesDeAlunos.includes("Goku"))
console.log(nomesDeAlunos.toLowerCase().includes("goku")) //consigo encadear as funcoes

//substituição parte de um caracter ou string
//console.log(nomesDeAlunos.replaceAll('a', 'i'))
console.log(nomesDeAlunos.toLowerCase().replaceAll('a', 'i'))

//trim corta partes desnecessários (espaços) 
const conceitosLogica = "      inteiro real cadeia de caracteres ....    "
console.log(conceitosLogica.trim())

//slice - 2 parametros inicio e final (caracteres)
let dataParaCortar = "05 de Abril"
console.log(dataParaCortar.slice(0, 2))

/**
 * Console API - Copia da aula
 */
/*
console.log("Aula inicial JS")
console.error("Falha na execução")
console.warn("Atenção")
console.table([{
  nome: 'Samuel',
  turma: '02',
  disciplina: 'Prog JS'
},
{
  nome: 'Lucas',
  turma: '02',
  disciplina: 'Prog JS'
}]) */

/**
 * Constantes e Variáveis
 */

// const - para informações que nunca mudam
// var ou let - para informações que podem mudar

// informacoes de um dog que nao mudam
/*
const nome = 'Loki'
const raca = 'SRD / vira lata'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNascimento = '01/01/2020'
const porte = 'M'

// informacoes que mudam
let idade = 5
let peso = 10.5
let vacinado = true
let castrado = false
let tamanho = 'M'

const valor = "50"
console.log(valor)

const turma = "02"
console.log("Aula 03 da Turma "+ turma + " no Sábado dia 05 de Abril")

console.log (`Aula 03 da Turma ${turma} no Sábado dia 05 de Abril`) */