const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World! from v2')
})

app.listen(port, () => {
    console.log(`v2 listening on port ${port}`)
})