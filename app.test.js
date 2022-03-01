const request = require('supertest');
const app = require('./app');

// Group all tests together
describe('Recipes API', () => {
    it('GET /recipes --> json recipes', () => {
        return request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body)
                    .toEqual(expect.objectContaining({
                        dish: expect.any(String),
                        country: expect.any(String),
                        ingredients: expect.any(String),
                        instructions: expect.any(String),
                        cookingTime: expect.any(String),
                        createdAt: expect.any(Date)
                    }))
            })
    })

    it('GET /recipes/id --> specific recipe by ID', () => {
        return request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body.data)
                    .toEqual(expect.arrayContaining([
                        expect.objectContaining({
                            dish: expect.any(String),
                            country: expect.any(String),
                            ingredients: expect.any(String),
                            instructions: expect.any(String),
                            cookingTime: expect.any(String),
                            createdAt: expect.any(Date)
                        })
                    ])
                    )

            })

        it('GET /recipes/id --> 404 if not found', () => {

        })

        it('POST /recipes --> created recipes', () => {

        })

        it('GET /recipes --> validate request body', () => {

        })


    })

