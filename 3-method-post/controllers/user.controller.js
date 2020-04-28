
let users = [
    {name: "tuan"},
    {name: "tung"},
    {name: "quang"},
    {name: "tu"},
    {name: "tu"}
]

module.exports.index =  (req, res) => res.render('index',{
    users: users
})

module.exports.create = (req, res) => {
    res.render('create-user')
}

module.exports.postCreate =  (req, res) => {
    console.log(req.body)
    users.push(req.body)
    res.redirect('/')
}