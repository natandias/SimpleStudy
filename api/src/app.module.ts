import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import ormconfig from './ormconfig';

import { UsersModule } from './users/users.module';
import { SchoolYearsModule } from './schoolYear/schoolYears.module';
import { PeriodModule } from './period/period.module';
import { SubjectPeriodModule } from './subject-period/subject-period.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormconfig),
    UsersModule,
    SchoolYearsModule,
    PeriodModule,
    SubjectPeriodModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
