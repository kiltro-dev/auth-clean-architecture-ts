import { RegisterUserDto } from './register-user.dto';

describe('RegisterUserDto', () => {
  it('creates a valid dto', () => {
    // arrange
    const input = { name: 'Ada', email: 'ada@example.com', password: 'secret123' };
    // act
    const [error, dto] = RegisterUserDto.create(input);
    // assert
    expect(error).toBeUndefined();
    expect(dto).toMatchObject(input);
  });

  it('rejects missing name', () => {
    const [error] = RegisterUserDto.create({ email: 'a@b.com', password: 'secret123' });
    expect(error).toBe('Missing name');
  });

  it('rejects missing email', () => {
    const [error] = RegisterUserDto.create({ name: 'Ada', password: 'secret123' });
    expect(error).toBe('Missing email');
  });

  it('rejects invalid email', () => {
    const [error] = RegisterUserDto.create({
      name: 'Ada',
      email: 'not-an-email',
      password: 'secret123',
    });
    expect(error).toBe('Email is not valid');
  });

  it('rejects missing password', () => {
    const [error] = RegisterUserDto.create({ name: 'Ada', email: 'ada@example.com' });
    expect(error).toBe('Missing password');
  });

  it('rejects short password', () => {
    const [error] = RegisterUserDto.create({
      name: 'Ada',
      email: 'ada@example.com',
      password: '123',
    });
    expect(error).toBe('Password too short');
  });

  it('rejects non-string fields', () => {
    expect(RegisterUserDto.create({ name: 123, email: 'a@b.com', password: 'secret123' })[0]).toBe(
      'Missing name',
    );
    expect(RegisterUserDto.create({ name: 'Ada', email: 123, password: 'secret123' })[0]).toBe(
      'Missing email',
    );
  });

  it('accepts password with exactly 6 chars', () => {
    const [error, dto] = RegisterUserDto.create({
      name: 'Ada',
      email: 'ada@example.com',
      password: '123456',
    });
    expect(error).toBeUndefined();
    expect(dto?.password).toBe('123456');
  });
});
