let contatos = require('./contatos')

function atualizar(id,contato){
    contato.id = contatos.length 
    let jaExisteAtu = contatos.find(cont => cont.email === contato.email)
    if(jaExisteAtu){
        console.log('ja existe um usario com esse email.')
    }else{
        contatos[id] = contato
    }
    
}

module.exports = atualizar
