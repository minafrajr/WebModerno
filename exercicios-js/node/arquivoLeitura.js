const fs = require('fs') //previamente instalado no node

const caminho = __dirname + '/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono
fs.readFile(caminho,'utf-8',(err, conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//outra forma para ler o JSON - forma síncrona
const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err,arquivos)=>{
    console.log('Conteúdo da pasta...')
    console.log(__dirname)
    console.log(arquivos)
})