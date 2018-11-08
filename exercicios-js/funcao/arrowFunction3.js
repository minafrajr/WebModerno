let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) 
//o this, mesmo com o bind, não varia o seu contexto
comparaComThisArrow(global) //false
comparaComThisArrow(module.exports) //true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //false
comparaComThisArrow(module.exports) //true
