const prompt = require('prompt-sync')();
const adicionarResidencia = require('./adicionar');
const listarResidencia = require('../listar');
const atualizarResidencia = require('./atualizar');
const removerResidencia = require('../remover');
function exibirMenu() {
    console.log(`
    _____________________
   |.....................|          
   || 1. Adicionar      ||
   || 2. Listar         ||
   || 3. Atualizar      ||
   || 4. Remover        ||
   || 5. Sair           ||
   ||___________________||
   =======================
   =======================
   =======================
   =======================
    `)
}
exibirMenu()
var opcao = prompt ('Escolha uma opção: ')  

switch (opcao) {
    case '1':
    const bairro = prompt('Bairro: ');
    const rua = prompt('Rua: ');
    const numero = prompt('Numeros: ');
    const moradores = prompt('Moradores: ');
    adicionarResidencia({ bairro, rua, numero, moradores });
    console.log('Residência adicionada com sucesso!');
        break;
    case '2':
      listarResidencia()
      
        break;
    case '3':
      atualizarResidencia()
      listarResidencia()
    index = parseInt(prompt('Número da residencia a atualizar: ')) - 1;
    const novoBairro = prompt('Novo Bairro: ');
    const novaRua = prompt('Nova Rua: ');
    const novoNumero = prompt('Novo Numero: ');
    const novosMoradores = prompt('Novo(a,os) Morador(a,es): ');

    atualizarResidencia(index, { bairro: novoBairro, rua:
    novaRua, Numero: novoNumero, moradores: novosMoradores });
    console.log('Residência atualizada com sucesso!');
        break;
    case '4':
      removerResidencia()
      index = parseInt(prompt('Número da residência a remover: ')) - 1;
        removerContato(index);
        console.log('Residência removida com sucesso!');  
     case '5':
        break;
            default:
                console.log('Opção inválida!');
                exibirMenu();
                }    
