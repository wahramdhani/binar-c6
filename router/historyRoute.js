const express = require('express');
const router = express.Router();

const history = require('../controller/historyController')

router.post('/gamehistory', history.createHistory)
router.get('/gamehistoy', history.createHistory)

module.exports = router
