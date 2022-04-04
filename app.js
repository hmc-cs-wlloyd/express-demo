const express = require('express')
const user = require('./routes/user')
const dbPool = require('./db/db')

const app = express()
const port = 3000

app.use(express.json())
app.use('/user',  user)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
