import { Router, Request, Response, NextFunction} from 'express';
// import { PrismaClient } from '@prisma/client';
import * as db from "../db";
const router = Router();


router.post('/', async (req, res) => {
  const { title, description, completed, groupId } = req.body;
  const todo = await db.createTodo(title, description, completed, groupId);
  res.json(todo);
});

router.get('/group/:groupId', async (req, res) => {
  const groupId = parseInt(req.params.groupId);
  const todos = await db.getTodosByGroup(groupId);
  res.json(todos);
});

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const todo = await db.getTodoById(id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).send('Todo not found');
  }
});

router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description, completed } = req.body;
  const updatedTodo = await db.updateTodo(id, title, description, completed);
  res.json(updatedTodo);
});

router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  await db.deleteTodo(id);
  res.sendStatus(204);
});


export default router;