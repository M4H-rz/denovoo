let residencia= require('./residencias');

function listarResidencia() {
    contatos.forEach((residencia, index) => {
    console.log(`${index+1} Bairro: ${residencias.bairro}, Rua:
    ${residencias.rua}, Numero: ${residencias.numero}, Moradores: ${residencias.moradores} `);
    });
  }

    module.exports = listarResidencia;