function tratarErroELancar(erro) {
    //throw new Error('Deu Merda')
    //throw 10
    //throw true
    //throw 'Mensagem'
throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date
    }
}

function  imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUppercase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = { name: 'Rodrigo' }
imprimirNomeGritado(obj)