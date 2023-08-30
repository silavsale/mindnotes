import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column()
  name: string;

  @Column()
  body: string;

  @Column()
  author: string;

  @Column({
    type: 'enum',
    enum: ['pending', 'completed', 'in-progress'],
    default: 'pending',
  })
  status: 'pending' | 'completed' | 'in-progress';
}
