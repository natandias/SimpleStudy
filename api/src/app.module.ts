import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import ormconfig from './ormconfig';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(ormconfig)],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
