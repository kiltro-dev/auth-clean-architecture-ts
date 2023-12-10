import { Router } from 'express';
import { AuthController } from './controller';
import { AuthRepositoryImpl } from '../../infrastructure/repositories';
import { AuthDataSourceImpl } from '../../infrastructure/datasources';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();
    const authDataSourceImpl = new AuthDataSourceImpl();
    const authRepositoryImpl = new AuthRepositoryImpl(authDataSourceImpl);
    const authController = new AuthController(authRepositoryImpl);

    router.post('/login', authController.loginUser);
    router.post('/register', authController.registerUser);

    return router;
  }
}
