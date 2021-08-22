import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SchoolYear } from './schoolYear.entity';

@Injectable()
export class SchoolYearsService {
  constructor(
    @InjectRepository(SchoolYear)
    private SchoolYearsRepository: Repository<SchoolYear>,
  ) {}

  findAll(): Promise<SchoolYear[]> {
    return this.SchoolYearsRepository.find();
  }

  findOne(id: string): Promise<SchoolYear> {
    return this.SchoolYearsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.SchoolYearsRepository.delete(id);
  }
}
