let contatos = require('./contatos');
function listarResidencia() {
    contatos.forEach((contato, index) => {
    console.log(`${index+1} Bairro: ${contato.bairro}, Rua:
    ${contato.rua}, Numero: ${contato.numero}, Moradores: ${contato.moradores} `);
    });
    }
    module.exports = listarResidencia;