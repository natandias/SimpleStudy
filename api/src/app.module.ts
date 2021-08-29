import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import ormconfig from './ormconfig';

import { UsersModule } from './users/users.module';
import { SchoolYearsModule } from './schoolYear/schoolYears.module';
import { PeriodModule } from './subject/subject.module';
import { SubjectPeriodModule } from './subjectPeriod/subjectPeriod.module';
import { PeriodActivitiesModule } from './periodActivities/periodActivities.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormconfig),
    UsersModule,
    SchoolYearsModule,
    PeriodModule,
    SubjectPeriodModule,
    PeriodActivitiesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
