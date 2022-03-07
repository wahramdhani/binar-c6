const express = require('express');
const router = express.Router();

const user = require('../controller/userController')

router.get('/users', user.all)
router.post('/users', user.CreateUser)
router.delete('/users/:id', user.deleteUser)

router.post('/superadmin/login', user.login)
router.get('/superadmin/login', user.login )

module.exports = router