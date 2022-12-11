process.env.ENVIRONMENT = "test"
const request = require('supertest')
const app = require('../app')

const testController = require('../app/controllers/testsController')

const environment = process.env.ENVIRONMENT || 'test'
const knexFileInfo = require('../knexfile')[environment]

const knex = require('knex')(knexFileInfo);

describe('get Endpoints', () => {
    it('should fetch an empty array of tests(entities)', async () => {

        const numberOfTests = await knex('tests').count('id_test')
        const numberOfTestsValue = numberOfTests[0]['count(`id_test`)']

        const res = await request(app)
            .get('/api/tests')

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveLength(numberOfTestsValue)

    })
})



it('should add a row to tests table', async () => {

    const numberOfTests = await knex('tests').count('id_test')
    const numberOfTestsValue = numberOfTests[0]['count(`id_test`)']


    const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
    }


    const req = {
        body: {
            name: 'test name',
            number: 123
        }
    }


    await testController.create(req, res)

    const finalNumberOfTests = await knex('tests').count('id_test')
    const finalNumberOfTestsValue = finalNumberOfTests[0]['count(`id_test`)']

    expect(finalNumberOfTestsValue).toEqual(numberOfTestsValue + 1)

})