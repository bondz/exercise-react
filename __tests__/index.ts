import request from 'supertest';

import app from '../src/app';

describe('Server', () => {
  test('Has a /api endpoint', () => {
    return request(app)
      .get('/api')
      .expect(200);
  });
});
