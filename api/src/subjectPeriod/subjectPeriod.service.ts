import { Injectable } from '@nestjs/common';
import { CreateSubjectPeriodDto } from './dto/create-subject-period.dto';
import { UpdateSubjectPeriodDto } from './dto/update-subject-period.dto';

@Injectable()
export class SubjectPeriodService {
  create(createSubjectPeriodDto: CreateSubjectPeriodDto) {
    return 'This action adds a new subjectPeriod';
  }

  findAll() {
    return `This action returns all subjectPeriod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subjectPeriod`;
  }

  update(id: number, updateSubjectPeriodDto: UpdateSubjectPeriodDto) {
    return `This action updates a #${id} subjectPeriod`;
  }

  remove(id: number) {
    return `This action removes a #${id} subjectPeriod`;
  }
}
