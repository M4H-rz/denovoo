let contatos = require('./contatos');
function removerResidencia(index) {
    contatos.splice(index, 1);
}

module.exports = removerResidencia;