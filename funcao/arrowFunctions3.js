let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) // começa apomtar comparaComThis em obj
comparaComThis(global)
comparaComThis(obj)

let ComparaComthisArrow = param => console.log(this === param)
ComparaComthisArrow(global)
ComparaComthisArrow(module.exports)

ComparaComthisArrow(obj)
ComparaComthisArrow(module.exports)