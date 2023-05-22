const express = require('express')
const errHandler = require('./middleware/errorHandler')
const app = express()
const cors = require('cors')
const port = 3000
const router = require('./router')

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors())

app.use(router)
app.use(errHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
