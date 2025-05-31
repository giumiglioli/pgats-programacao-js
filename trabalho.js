
//Functions to be tested
function geradorDeTagsDeIdentificacao(nome) { // Ao passar o nome do pet, retorna o nome em maiuscula
    return nome.toUpperCase();
  }
  
function verificarSePodeSerAdotado(idade, porte) {// Ao passar idade e porte, somente pode ser adotado (true) se a idade for maior ou igual a 1 e o porte for M, do contrario false.
    if (idade >= 1 && porte === 'M') return true;
    else return false;

    }
  
  function calcularConsumoDeRacao(nome, idade, peso) { //4350 dividido por 14.5 equivale a 300gramas por quilo. Portanto, o consumo é o peso *300. O nome e idade são passados como parametro, porém não são usados no teste. Por isso estou passando o parametro
    return peso * 300;
  }
  
  function decidirTipoDeAtividadePorPorte(porte) { // Função que dependendo do porte retorna Tipo de Atividade. Cobre não apenas o teste de unidade + outros portes . 
    if (porte == 'pequeno') return ('brincar dentro de casa')
    if (porte == 'médio') return ('brincar no parque')
    if (porte == 'grande') return ('correr no parque')
        else return ('Porte informado incorreto - Atividade não planejada')
  
  }

 /* Função com parametro
 async function buscarDadoAsync(nome) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(nome), 100);
    });
  } */
  
  async function buscarDadoAsync() {
      await new Promise(resolve => setTimeout(resolve, 100));
      return 'Pipoca';
    }


  //export funcions
  export{
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
  }

/*
  //TESTE MANUAL
  function 1)
  let nome= geradorDeTagsDeIdentificacao('Bela')
  console.log("Nome do Dog: " + nome) 
  function 2)
  console.log('Verificando se o dog pode ser adotado:'+ verificarSePodeSerAdotado(3, 'M'))
  
function 3)
  console.log('Calculo de Consumo de Ração ')
  let racao = calcularConsumoDeRacao('Mingau', 4, 14.5)
  console.log ("Resultado " +racao + " gramas de consumo diário") 
  
function 4)  
  let TipoAtividade = decidirTipoDeAtividadePorPorte('pequeno')
  console.log(TipoAtividade) 

function 5)
  //console.log(await buscarDadoAsync('Pipoca')) 
  console.log(await buscarDadoAsync())
*/