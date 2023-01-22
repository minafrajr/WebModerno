const { request } = require('express')
const express = require('express')
const app = express()
const saudacao = require('./saudacaoMid')

app.use(saudacao('Carlos'));

app.get('/opa',(req, res, next) => { 
    console.log('Antes');
    next()
})

app.use('/opa',(req, res, next) => {
    //res.send('Estou <b>bem!</b>')
    console.log('Durante');
    res.json({
        data: [{id: 7, name: 'Ana', position:1},
                {id: 34, name: 'Bia', position:2},
            {id: 7, name: 'Carlos', position: 3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    }
    )
    next();
})
//mais específica
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatorio: completo=${req.query.completo} e ano=${req.query.ano}`)
    
})
//menos específica
app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
    
})

app.get('/opa',(req, res )=> { 
    console.log('Depois');
    
})

app.listen(3000, () => {
    console.log('Backend executando...')
})
