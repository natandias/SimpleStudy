import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { User } from '../users/user.entity';
import { Subject } from '../subject/subject.entity';

@Entity()
export class SchoolYear {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  periods_amount: number;

  @Column()
  password: string;

  @ManyToOne(() => User, (user) => user.schoolYears)
  user: User;

  @OneToMany(() => Subject, (subject) => subject.schoolYear)
  subjects: Subject[];

  @Column({ default: false })
  deleted: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}