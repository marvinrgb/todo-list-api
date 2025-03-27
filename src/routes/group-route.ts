import { Router, Request, Response, NextFunction} from 'express';
// import { PrismaClient } from '@prisma/client';
import * as db from "../db";
const router = Router();


// Group Routes
router.post('/', async (req, res) => {
  const { name } = req.body;
  const group = await db.createGroup(name);
  res.json(group);
});

router.get('/', async (req, res) => {
  const groups = await db.getGroups();
  res.json(groups);
});

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const group = await db.getGroupById(id);
  if (group) {
    res.json(group);
  } else {
    res.status(404).send('Group not found');
  }
});

router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const updatedGroup = await db.updateGroup(id, name);
  res.json(updatedGroup);
});

router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  await db.deleteGroup(id);
  res.sendStatus(204);
});


export default router;