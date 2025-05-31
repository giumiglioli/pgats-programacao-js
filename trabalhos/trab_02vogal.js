/*
Programa Retornando Número de Vogais
Hands-on
Retorne o número de vogais no texto fornecido. 
Consideraremos a, e, i, o e u como vogais para este Kata. 
O texto de entrada conterá apenas letras minúsculas e/ou espaços. 
Letras acentuadas não fazem parte desse desafio. 
*/

//Definir o texto e vogal para comparacao
let texto = "Bela Maria trelele";
let vogais = "aeiou" //informando as vogais para identificar no texto

console.log("****Programa de contagem de vogais****")
console.log("Texto fornecido:" +texto)
console.log("****************")
console.log("Total de vogais do texto: " + contarVogais(texto))
//console.log(contarVogais(texto)); 

//Definir a funcao de contar 
function contarVogais(texto) {
    let contador = 0; // Variável para contar as vogais

    // Percorre cada letra do texto
    for (let i = 0; i < texto.length; i++) {

        for (let x = 0; x < vogais.length; x++){ //compara com todas as vogais, incrementando o contador se for vogal
            if(texto[i] === vogais[x]){
                contador ++
            }
        }

    }

    return contador; // Retorna o total de vogais
}