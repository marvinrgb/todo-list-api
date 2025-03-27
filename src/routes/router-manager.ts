import { Router }from 'express';
const router = Router();

import groupRoute from './group-route.js';
import todoRoute from './todo-route.js';

router.use('/groups', groupRoute);
router.use('/todos', todoRoute);

export default router;