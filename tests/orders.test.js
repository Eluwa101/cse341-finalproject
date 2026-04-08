const request = require('supertest');
const app = require('../server'); // adjust if needed

describe('Orders Routes', () => {

  test('GET /orders should return 200 and an array', async () => {
    const res = await request(app).get('/orders');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /orders/:id should return 200 or 404', async () => {
    const fakeId = '507f1f77bcf86cd799439011';
    const res = await request(app).get(`/orders/${fakeId}`);

    expect([200, 404]).toContain(res.statusCode);
  });

});