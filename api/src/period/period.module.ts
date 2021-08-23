import { Module } from '@nestjs/common';
import { PeriodService } from './period.service';
import { PeriodController } from './period.controller';

@Module({
  controllers: [PeriodController],
  providers: [PeriodService]
})
export class PeriodModule {}
