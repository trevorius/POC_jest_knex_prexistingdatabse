require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const knexFileInfo = require('./knexfile.js')

const knex = require('knex')(knexFileInfo.development);
const TestsController = require('./app/controllers/tests.js')


app.get('/', TestsController.create)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})