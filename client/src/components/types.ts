export type TaskStatus = 'pending' | 'completed' | 'in-progress';

export interface TaskProps {
  id: string;
  created: Date;
  updated: Date;
  name: string;
  body: string;
  author: string;
  status: TaskStatus;
}
