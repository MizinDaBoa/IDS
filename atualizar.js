let contatos = require('./contatos')

function atualizar(id,contato){
    contato.id = contatos.length 
    contatos[id] = contato
}

module.exports = atualizar