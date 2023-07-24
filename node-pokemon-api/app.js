const express = require('express')
let pokemons = require('./mock-pokemon')

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('I am Express !'))

app.get('/api/pokemons/:id/:name', (req, res) => {
    const id = parseInt (req.params.id)
    const name = (req.params.name)
    res.send(`Votre n${id} et le nom est ${name}`)
})

app.listen(port, () => console.log(`Notre application Node est démarrée sur: http://localhost:${port}`)) 