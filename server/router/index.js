const express = require('express')
const router = express.Router()
const routerClubs = require('./clubs')
const routerMatch = require('./match')

router.use('/clubs', routerClubs)
router.use('/match', routerMatch)

module.exports = router