const express = require('express')
const Controller = require('../controllers/matchController')
const router = express.Router()

router.get('/', Controller.getAllMatch)
router.post('/', Controller.addMatchOneByOne)
router.post('/multiple', Controller.addMatchMultiple)
  

module.exports = router


  