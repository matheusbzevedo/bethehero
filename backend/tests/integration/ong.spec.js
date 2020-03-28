const request = require('supertest'),
    app = require('./../../src/app'),
    connection = require('./../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(() => {
        connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: 'APAD2',
            email: 'contato@apad.com.br',
            whatsapp: '11111111111',
            city: 'São Paulo',
            uf: 'SP'
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });

    it('should be able to get all ONGs', async () => {
        const result = await request(app).post('/ongs').send({
            name: 'APAD2',
            email: 'contato@apad.com.br',
            whatsapp: '11111111111',
            city: 'São Paulo',
            uf: 'SP'
        });

        expect(result.status).toBe(201);

        const response = await request(app).get('/ongs');

        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThanOrEqual(1);
    });
});
