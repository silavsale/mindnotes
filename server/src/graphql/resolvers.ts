import { User, Note } from '@prisma/client';
import prisma from '../../prisma/prismaClient';

interface UserArgs {
  id: string;
}

interface CreateUserArgs {
  name: string;
  email: string;
  notes: { title: string; content: string }[];
}

interface UpdateNoteArgs {
  id: string;
  title: string;
  content: string;
}

const resolvers = {
  Query: {
    users: () => prisma.user.findMany(),
    notes: () => prisma.note.findMany(),
    user: (_: any, args: UserArgs): Promise<User | null> =>
      prisma.user.findUnique({ where: { id: args.id } }),
    note: (_: any, args: UserArgs): Promise<Note | null> =>
      prisma.note.findUnique({ where: { id: args.id } }),
  },
  Mutation: {
    createUser: async (_: any, args: CreateUserArgs): Promise<User> => {
      const { name, email } = args;
      try {
        return await prisma.user.create({
          data: {
            name,
            email,
          },
        });
      } catch (error) {
        if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
          throw new Error('Email address already in use');
        }
        throw error;
      }
    },
    deleteUser: async (_, { email }) => {
      return await prisma.user.delete({
        where: { email },
      });
    },
    updateNote: (_: any, args: UpdateNoteArgs): Promise<Note> => {
      const { id, title, content } = args;
      return prisma.note.update({
        where: { id },
        data: { title, content },
      });
    },
    deleteNote: async (_, { id }) => {
      try {
        const note = await prisma.note.findUnique({ where: { id } });
        if (!note) {
          throw new Error('Note not found');
        }
        console.log('note', note);

        await prisma.note.delete({ where: { id } });

        return note;
      } catch (error) {
        console.error('Error in deleteNote resolver:', error.message);
        throw error;
      }
    },
  },
};

export default resolvers;
