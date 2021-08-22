import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolYearsService } from './schoolYear.service';
import { SchoolYearsController } from './schoolYear.controller';
import { SchoolYear } from './schoolYear.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolYear])],
  providers: [SchoolYearsService],
  controllers: [SchoolYearsController],
})
export class SchoolYearsModule {}
