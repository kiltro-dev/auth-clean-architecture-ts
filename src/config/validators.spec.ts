import { Validators } from './validators';

describe('Validators', () => {
  it('accepts valid emails and rejects invalid ones', () => {
    expect(Validators.email.test('ada@example.com')).toBe(true);
    expect(Validators.email.test('not-an-email')).toBe(false);
    expect(Validators.email.test('missing@domain')).toBe(false);
  });
});
