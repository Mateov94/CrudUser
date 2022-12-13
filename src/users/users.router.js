//? Dependencies
const router = require('express'). Router()

//? File Imports
const usersServices = require('./users.services')

router.get('/users', usersServices.getAllUsers)
router.post('/users', usersServices.postNewUsers)
router.get('/users/:id', usersServices.getAllUsersById)

module.exports = router