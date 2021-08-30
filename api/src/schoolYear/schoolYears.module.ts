import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolYearsService } from './schoolYear.service';
import { SchoolYearsController } from './schoolYear.controller';
import { SchoolYear } from './schoolYear.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolYear]), UsersModule],
  providers: [SchoolYearsService],
  controllers: [SchoolYearsController],
})
export class SchoolYearsModule {}
