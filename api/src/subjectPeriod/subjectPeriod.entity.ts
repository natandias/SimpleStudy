import {
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { Subject } from '../subject/subject.entity';
import { PeriodActivity } from '../periodActivities/periodActivity.entity';

@Entity()
export class SubjectPeriod {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Subject, (subject) => subject.periods)
  subject: Subject;

  @OneToMany(() => PeriodActivity, (periodAcitivity) => periodAcitivity.subject)
  activities: PeriodActivity[];

  @Column({ type: 'double' })
  minimumGrade: number;

  @Column({ type: 'double' })
  currentGrade: number;

  @Column({ type: 'datetime' })
  startDate: string;

  @Column({ type: 'datetime' })
  endDate: string;

  @Column({ type: 'double' })
  activitiesPoints: number;

  @Column({ type: 'double' })
  avaliationsPoints: number;

  @Column({ default: false })
  deleted: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
