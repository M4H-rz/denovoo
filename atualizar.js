let contatos = require('./contatos');
function atualizarResidencia(index, novaResidencia) {
    contatos[index] = novaResidencia;
    }
    module.exports = atualizarResidencia;