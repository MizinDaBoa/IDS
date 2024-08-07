let contatos = require('./contatos')

function adicionar(contato){
    contato.id = contatos.length +1
    let jaExiste = contatos.find(cont => cont.email === contato.email)
    if(jaExiste){
        console.log('ja existe um contato com esse email.')
    }else{
    contatos.push(contato)
    }
}
module.exports = adicionar
