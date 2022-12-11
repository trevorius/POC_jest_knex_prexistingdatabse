const request = require('supertest')
const app = require('../app')

describe('get Endpoints', () => {
    it('should fetch an empty array of tests(entities)', async () => {
        const res = await request(app)
            .get('/api/tests')

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveLength(0)

    })
})

// describe('post Endpoint',()=>{
//     it('')
// })