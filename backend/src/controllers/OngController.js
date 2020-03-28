const connection = require('./../database/connection'),
    generateUniqueId = require('./../../utils/generateUniqueId');

module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');

        return response.status(200).json(ongs);
    },
    async create (request, response) {
        const { name, email, whatsapp, city, uf } = request.body,
        id = generateUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return response.status(201).json({ id });
    }
};