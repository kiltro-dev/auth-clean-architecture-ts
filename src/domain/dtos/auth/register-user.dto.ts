import { Validators } from '../../../config/validators';

export class RegisterUserDto {
  private constructor(
    public name: string,
    public email: string,
    public password: string,
  ) {}

  static create(object: Record<string, unknown>): [string?, RegisterUserDto?] {
    const { name, email, password } = object;
    if (typeof name !== 'string' || name.length === 0) return ['Missing name'];
    if (typeof email !== 'string' || email.length === 0) return ['Missing email'];
    if (!Validators.email.test(email)) return ['Email is not valid'];
    if (typeof password !== 'string' || password.length === 0) return ['Missing password'];
    if (password.length < 6) return ['Password too short'];

    return [undefined, new RegisterUserDto(name, email, password)];
  }
}
