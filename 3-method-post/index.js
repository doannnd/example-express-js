const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/user.route')

const app = express()
const port = 5000

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(bodyParser.urlencoded({extended:true}))

var users = [
    {name: "tuan"},
    {name: "tung"},
    {name: "quang"},
    {name: "tu"},
    {name: "tu"}
]

app.get('/', (req, res) => res.render('index',{
    users: users
}))

app.use('/user', userRoute)

app.listen(port, () => console.log(`Server is running on port: ${port}`))