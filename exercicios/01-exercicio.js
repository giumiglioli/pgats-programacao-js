/* 
Exercício 01 - Gerador de tags de identificação
Crie um script para gerar a etiqueta (tag) de identificação que será presa na coleira de um cachorro
no abrigo. O dono irá informar nome, idade, peso raça e se adotado ou não.
A tag deve ter:
- O nome em letras maíusculas
- A raça com a primeira letra maiúscula
- Peso

*/

// informacoes do dog 
const nome = 'Bela'
const raca = 'shih Tzu'
const peso = 6
const Status = 'Adotada'

//lógica para resolução
const nomeFormatado = nome.toUpperCase();
const racaFormatada = raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase();

console.log("-----------------------")
console.log("Tag de Identificação:");
console.log("-----------------------")
console.log(`Nome do Cachorro: ${nomeFormatado} \nRaça: ${racaFormatada}\nPeso:${peso} kg`);