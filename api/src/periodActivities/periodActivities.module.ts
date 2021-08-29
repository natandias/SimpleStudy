import { Module } from '@nestjs/common';
import { PeriodActivitiesService } from './periodActivities.service';
import { PeriodActivitiesController } from './periodActivities.controller';

@Module({
  controllers: [PeriodActivitiesController],
  providers: [PeriodActivitiesService],
})
export class PeriodActivitiesModule {}
