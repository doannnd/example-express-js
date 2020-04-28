const express = require('express')
const app = express()
const port = 3000

// setup view engine
app.set('view engine', 'ejs')
app.set('views','./views')

app.get('/', (req, res) => res.render('index'))

app.get('/user', (req, res) => res.render('user'))

app.listen(port, () => console.log('Server is running on port: ' + port))

