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

import { SchoolYear } from '../schoolYear/schoolYear.entity';
import { SubjectPeriod } from '../subjectPeriod/subjectPeriod.entity';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => SchoolYear, (schoolYear) => schoolYear.subjects)
  schoolYear: SchoolYear;

  @OneToMany(() => SubjectPeriod, (subjectPeriod) => subjectPeriod.subject)
  periods: SubjectPeriod[];

  @Column({ type: 'double' })
  minimumGrade: number;

  @Column({ type: 'double' })
  currentGrade: number;

  @Column()
  color: string;

  @Column()
  teacher: string;

  @Column({ type: 'double' })
  activitiesPoints: number;

  @Column({ type: 'double' })
  avaliationsPoints: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
