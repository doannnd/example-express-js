const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', './views')
ê
app.get('/', (req, res) => {
    res.render('index', {
        name: 'john',
        age: 12
    })
})

app.get('/user', (req, res) => {
    res.send('Hello user')
})

app.listen(port, () => console.log(`Server is running with port: ${port}`))