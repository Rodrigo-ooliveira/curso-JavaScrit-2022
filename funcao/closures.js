// clousure é o escopo criado quando a funcao é declarada, memória do local onde ela foi definida
// esse escopo permite a função acessar e manipular variaveis externas à função

//contexto lexico em ação!

const x ='Global'

function fora() {
    const x = "Local"
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())