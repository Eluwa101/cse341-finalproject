const request = require('supertest');
const app = require('../server'); // adjust if needed

describe('Reviews Routes', () => {

  test('GET /reviews should return 200 and an array', async () => {
    const res = await request(app).get('/reviews');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /reviews/:id should return 200 or 404', async () => {
    const fakeId = '507f1f77bcf86cd799439011';
    const res = await request(app).get(`/reviews/${fakeId}`);

    expect([200, 404]).toContain(res.statusCode);
  });

});