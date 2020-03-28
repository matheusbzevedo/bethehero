const generateUniqueId = require('./../../utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const i = generateUniqueId();

        expect(i).toHaveLength(8);
    });
});
