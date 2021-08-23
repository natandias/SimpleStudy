import { Module } from '@nestjs/common';
import { SubjectPeriodService } from './subjectPeriod.service';
import { SubjectPeriodController } from './subjectPeriod.controller';

@Module({
  controllers: [SubjectPeriodController],
  providers: [SubjectPeriodService],
})
export class SubjectPeriodModule {}
