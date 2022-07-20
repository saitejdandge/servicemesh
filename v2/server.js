/**
 * eval $(minikube docker-env)
 * docker build -t user-image .
 * minikube image build -t user-image:v1 .
 * minikube image ls
 */
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.status(200)
    res.send('Hello World! from v2')
})

app.get('/login', (req, res) => {
    res.status(201)
    res.send('Hello World login ! from v2')
})

app.get('/dashboard', (req, res) => {
    res.status(202)
    res.send('Hello World dashboard ! from v2')
})
app.listen(port, () => {
    console.log(`v2 listening on port ${port}`)
})