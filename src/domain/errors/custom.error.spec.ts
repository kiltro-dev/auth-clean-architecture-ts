import { CustomError } from './custom.error';

describe('CustomError', () => {
  it('creates typed http errors with status codes', () => {
    expect(CustomError.badRequest('bad').statusCode).toBe(400);
    expect(CustomError.unauthorized('unauth').statusCode).toBe(401);
    expect(CustomError.forbidden('forbidden').statusCode).toBe(403);
    expect(CustomError.notFound('missing').statusCode).toBe(404);
    expect(CustomError.internalServer().statusCode).toBe(500);
  });

  it('is an instance of Error with message', () => {
    const err = CustomError.notFound('user not found');
    expect(err).toBeInstanceOf(Error);
    expect(err.message).toBe('user not found');
  });

  it('defaults internalServer message', () => {
    expect(CustomError.internalServer().message).toBe('Internal Server Error');
  });
});
