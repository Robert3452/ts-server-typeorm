import { Router } from 'express';
import user from '../routes/user.routes';

const router = Router();

router.use('profile', user);

export default router