import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { SchoolYear } from '../schoolYear/schoolYear.entity';

@Entity()
export class Period {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => SchoolYear, (schoolYear) => schoolYear.periods)
  schoolYear: SchoolYear;

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

  @Column({ default: false })
  deleted: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
