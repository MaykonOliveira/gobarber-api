import { Router } from 'express';
import User from './app/models/User';

const routes = Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Maykon Anschau Oliveira',
    email: 'moliveira.anschau@gmail.com',
    password_hash: '21321321321',
  });

  return res.json(user);
});

export default routes;
