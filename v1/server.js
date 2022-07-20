const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.status(200)
    res.send('Hello World! from v1')
})

app.get('/login', (req, res) => {
    res.status(201)
    res.send('Hello World login ! from v1')
})

app.get('/dashboard', (req, res) => {
    res.status(202)
    res.send('Hello World dashboard ! from v1')
})

app.listen(port, () => {
    console.log(`v1 listening on port ${port}`)
})