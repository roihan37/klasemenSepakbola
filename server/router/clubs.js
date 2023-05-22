const express = require('express')
const Controller = require('../controllers/clubsControllers')
const router = express.Router()

router.post('/', Controller.addClub)
router.get('/', Controller.getAllClubs)
  

module.exports = router