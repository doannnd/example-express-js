const express = require('express')
const route = express.Router()

const userController = require('../controllers/user.controller')

route.get('/', userController.index)

route.get('/create', userController.create)

route.post('/create', userController.postCreate)

module.exports = route