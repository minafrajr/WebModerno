function saudacao(nome) {
    return (req, res,next) => {
        console.log(`Seja Bem vindo ${nome}!`);

        next()
    }
}

module.exports = saudacao