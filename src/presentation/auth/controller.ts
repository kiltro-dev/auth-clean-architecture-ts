import { Request, Response } from 'express';
import { RegisterUserDto } from '../../domain/dtos';
import { AuthRepository } from '../../domain/repositories';

export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  registerUser = (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(req.body);
    if (error) return res.status(400).json({ error });
    // res.json(registerUserDto);
    this.authRepository
      .register(registerUserDto!)
      .then((user) => res.json(user))
      .catch((error) => res.status(500).json(error.message));
  };

  loginUser = (req: Request, res: Response) => {
    res.json('login user controller');
  };
}
