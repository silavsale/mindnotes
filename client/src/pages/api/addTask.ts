import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { log } from 'console';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const newTask = req.body;

    // Validation: (This is a simple validation, enhance as per your task structure)
    if (
      !newTask.name ||
      !newTask.created ||
      !newTask.updated ||
      !newTask.body ||
      !newTask.author ||
      !newTask.status
    ) {
      res.status(400).json({ error: 'Invalid task format' });
      return;
    }

    // Get path to the tasks.json file
    const filePath = path.join(process.cwd(), 'data', 'tasks.json');
    console.log('filePath', filePath);

    try {
      // Read current tasks from the JSON file
      const fileData = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileData);

      // Assign a unique identifier for the new task (this assumes numeric ids)
      const lastTask = data.tasks[data.tasks.length - 1];
      const newId = lastTask ? lastTask.id + 1 : 1;
      newTask.id = newId;

      // Add new task to the tasks array
      data.tasks.push(newTask);

      // Write the updated tasks back to the JSON file
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

      // Return the new task
      res.status(200).json(newTask);
    } catch (error) {
      console.error('Error reading or writing to tasks.json:', error);
      res.status(500).json({ error: 'Server error' });
      return;
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
