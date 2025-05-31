/*
Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.
*/


//Lista de inteiros e strings
let listaInteiroStrings = [1, 2, 3, "Bela", 10, "Shihtzu"];
console.log("****Programa de filtro de números em uma lista ****")
console.log("Lista Original:")
console.log(listaInteiroStrings)
console.log("***************************************************")
console.log("Lista Filtrada:")
console.log(filtrarNumeros(listaInteiroStrings)); 

function filtrarNumeros(lista) {
    let listaresultado = [];
    for (let i = 0; i < lista.length; i++) {
        if (typeof lista[i] === 'number') { // operador verifica se o item é do tipo numero
            listaresultado.push(lista[i]);       //se sim adiciona o valor na lista de resultado no proximo indice
        }
    }
    return listaresultado;
}
