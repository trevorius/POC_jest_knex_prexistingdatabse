const environment = process.env.ENVIRONMENT || 'development'

const path = require('path')
const knexFileInfo = require('../../knexfile')[environment]

const knex = require('knex')(knexFileInfo);

const TestsController = {

    list: async (req, res) => {
        const result = await knex.select().from('tests')
        res.send(result)
    },
    create: async (req, res) => {
        res.status(200).send({ body: "OK" })
    }

}

module.exports = TestsController