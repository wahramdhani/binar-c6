const express = require('express');
const router = express.Router();

const biodata = require('../controller/biodataController')

router.post('/createbiodata', biodata.createBiodata)
router.post('/updatebiodata', biodata.updateBiodata)

router.get('/biodata', biodata.biodata)

router.get('/createbiodata', biodata.updateBiodata)

module.exports = router