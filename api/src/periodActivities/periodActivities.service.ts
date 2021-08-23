import { Injectable } from '@nestjs/common';
import { CreatePeriodActivityDto } from './dto/createPeriodActivity.dto';
import { UpdatePeriodActivityDto } from './dto/updatePeriodActivity.dto';

@Injectable()
export class PeriodActivitiesService {
  create(createPeriodActivityDto: CreatePeriodActivityDto) {
    return 'This action adds a new periodActivity';
  }

  findAll() {
    return `This action returns all periodActivities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} periodActivity`;
  }

  update(id: number, updatePeriodActivityDto: UpdatePeriodActivityDto) {
    return `This action updates a #${id} periodActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} periodActivity`;
  }
}
