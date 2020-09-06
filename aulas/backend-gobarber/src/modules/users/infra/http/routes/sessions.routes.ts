import { Router } from 'express';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  console.log('Foi autenticar');

  const { user, token } = await authenticateUser.execute({ email, password });

  console.log('Foi');
  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
