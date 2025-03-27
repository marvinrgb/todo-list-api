// db.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createGroup(name: string) {
  return prisma.group.create({
    data: {
      name,
    },
  });
}

export async function getGroups() {
  return prisma.group.findMany();
}

export async function getGroupById(id: number) {
  return prisma.group.findUnique({
    where: { id },
    include: { todos: true },
  });
}

export async function updateGroup(id: number, name: string) {
  return prisma.group.update({
    where: { id },
    data: { name },
  });
}

export async function deleteGroup(id: number) {
  return prisma.group.delete({
    where: { id },
  });
}

export async function createTodo(title: string, description: string | null, completed: boolean, groupId: number) {
  return prisma.todo.create({
    data: {
      title,
      description,
      completed,
      groupId,
    },
  });
}

export async function getTodosByGroup(groupId: number) {
  return prisma.todo.findMany({
    where: { groupId },
  });
}

export async function getTodoById(id: number) {
  return prisma.todo.findUnique({
    where: { id },
  });
}

export async function updateTodo(id: number, title: string, description: string | null, completed: boolean) {
  return prisma.todo.update({
    where: { id },
    data: { title, description, completed },
  });
}

export async function deleteTodo(id: number) {
  return prisma.todo.delete({
    where: { id },
  });
}