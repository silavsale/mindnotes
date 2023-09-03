import { Router } from 'express';
import prisma from '../../../prisma/prismaClient';
import { Prisma, PrismaClient } from '@prisma/client';

const router = Router();

router.post(`/signup`, async (req, res) => {
  const { name, email, notes } = req.body;

  const notesData = notes?.map((note: Prisma.NoteCreateInput) => {
    return { title: note?.title, content: note?.content };
  });
  console.log('notesData', notesData);

  const result = await prisma.user.create({
    data: {
      name,
      email,
      notes: {
        create: notesData,
      },
    },
  });
  res.json(result);
});

// Place all user related routes here e.g.:
router.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

router.get('/user/:id/drafts', async (req, res) => {
  const { id } = req.params;

  const drafts = await prisma.user
    .findUnique({
      where: {
        id: String(id),
      },
    })
    .notes({
      where: {},
    });

  res.json(drafts);
});

export default router;
