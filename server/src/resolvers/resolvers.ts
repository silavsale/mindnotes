import { getRepository } from 'typeorm';
import { Task } from '../entity/Task';

const resolvers = {
  Query: {
    tasks: async () => {
      const taskRepository = getRepository(Task);
      return await taskRepository.find();
    },
  },
  Mutation: {
    createTask: async (_, { name, body, author, status }) => {
      const taskRepository = getRepository(Task);
      const newTask = taskRepository.create({ name, body, author, status });
      return await taskRepository.save(newTask);
    },
  },
};
