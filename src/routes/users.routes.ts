import { Router } from 'express';
import { createUserController } from '@useCases/User/CreateUser';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => createUserController.handle(request, response));

export { usersRouter };