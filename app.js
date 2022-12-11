require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const knexFileInfo = require('./knexfile.js')

const knex = require('knex')(knexFileInfo.development);
const TestsController = require('./app/controllers/testsController.js')


app.get('/api/tests', TestsController.list)
// app.get('/hello', (req, res) => { res.send("hello") })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app 