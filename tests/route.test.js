const request = require('supertest')
const app = require('../app')
const environment = process.env.ENVIRONMENT || 'test'
const knexFileInfo = require('../knexfile')[environment]

const knex = require('knex')(knexFileInfo);

describe('get Endpoints', () => {
    it('should fetch an empty array of tests(entities)', async () => {
        const res = await request(app)
            .get('/api/tests')

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveLength(0)

    })
})

describe('post Endpoint', () => {
    it('should return "OK" status', async () => {
        const res = await request(app)
            .post('/api/tests')
            .send({
                name: 'test name',
                number: 123
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual({ body: "OK" })
    })

    it('should add a row to tests table', async () => {

        const numberOfTests = await knex('tests').count('id_test')
        const numberOfTestsValue = numberOfTests[0]['count(`id_test`)']
        const res = await request(app)
            .post('/api/tests')
            .send({
                name: 'test name',
                number: 123
            })

        const finalNumberOfTests = await knex('tests').count('id_test')
        const finalNumberOfTestsValue = finalNumberOfTests[0]['count(`id_test`)']

        expect(finalNumberOfTestsValue).toEqual(numberOfTestsValue + 1)

    })

})
