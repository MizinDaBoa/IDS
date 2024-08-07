let contatos = require('./contatos')
function listar(){
        for(let i = 0;i< contatos.length;i++){
            const contato = contatos[i]
            console.log(`
id: ${contato.id},
nome: ${contato.nome}
email: ${contato.email}`)
            for(let j = 0;j < contato.telefones.length;j++){
                console.log(`${j +1}. ${contato.telefones[j]}`)
            }
            console.log('')
        }
    }

module.exports = listar