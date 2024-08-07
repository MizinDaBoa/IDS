let contatos = require('./contatos')

function remover(id){
    contatos.splice(id, 1)
}
module.exports = remover