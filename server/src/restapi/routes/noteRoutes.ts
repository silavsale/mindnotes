import { Router } from 'express';
import prisma from '../../../prisma/prismaClient';
import { Prisma, PrismaClient } from '@prisma/client';

const router = Router();

router.post(`/note`, async (req, res) => {
  const { title, content, email } = req.body;
  const result = await prisma.note.create({
    data: {
      title,
      content,
      creator: { connect: { email: email } },
    },
  });
  res.json(result);
});

router.put('/note/:id/views', async (req, res) => {
  const { id } = req.params;

  try {
    const note = await prisma.note.update({
      where: { id: String(id) },
      data: {},
    });

    res.json(note);
  } catch (error) {
    res.json({ error: `Post with ID ${id} does not exist in the database` });
  }
});

router.put('/creator/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const postData = await prisma.note.findUnique({
      where: { id: String(id) },
      select: {},
    });

    const updatedPost = await prisma.note.update({
      where: { id: String(id) || undefined },
      data: {},
    });
    res.json(updatedPost);
  } catch (error) {
    res.json({ error: `Post with ID ${id} does not exist in the database` });
  }
});

router.delete(`/note/:id`, async (req, res) => {
  const { id } = req.params;
  const note = await prisma.note.delete({
    where: {
      id: String(id),
    },
  });
  res.json(note);
});

router.get(`/note/:id`, async (req, res) => {
  const { id }: { id?: string } = req.params;

  const post = await prisma.note.findUnique({
    where: { id: String(id) },
  });
  res.json(post);
});

router.get('/notes', async (req, res) => {
  const { searchString, skip, take, orderBy } = req.query;

  const notes = await prisma.note.findMany({
    include: { creator: true },
    orderBy: {
      updatedAt: orderBy as Prisma.SortOrder,
    },
  });
  console.log('notes', notes);

  res.json(notes);
});

export default router;
