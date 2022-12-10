const path = require('path')
const knexFileInfo = require('../../knexfile')

const knex = require('knex')(knexFileInfo.development);

const TestsController = {

    create: async (req, res) => {
        const result = await knex.select().from('tests')
        res.send(result)
    }

}

module.exports = TestsController