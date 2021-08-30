import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { SubjectPeriod } from '../subjectPeriod/subjectPeriod.entity';

@Entity()
export class PeriodActivity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => SubjectPeriod, (subjectPeriod) => subjectPeriod.activities)
  subject: SubjectPeriod;

  @Column()
  name: string;

  @Column({ type: 'datetime' })
  deadline: string;

  @Column()
  status: string;

  @Column({ type: 'double' })
  value: number;

  @Column({ type: 'double' })
  obtainedValue: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
