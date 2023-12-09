import { Router } from 'express';
import { AuthController } from './controller';
import { AuthRepositoryImpl } from '../../infrastructure/repositories';
import { AuthDataSourceImpl } from '../../infrastructure/datasources';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();
    const authDataSourceImpl = new AuthDataSourceImpl();
    const authRepositoryImpl = new AuthRepositoryImpl(authDataSourceImpl);
    const controller = new AuthController(authRepositoryImpl);

    router.post('/login', controller.loginUser);
    router.post('/register', controller.registerUser);

    return router;
  }
}
