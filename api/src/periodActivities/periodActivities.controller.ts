import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PeriodActivitiesService } from './periodActivities.service';
import { CreatePeriodActivityDto } from './dto/createPeriodActivity.dto';
import { UpdatePeriodActivityDto } from './dto/updatePeriodActivity.dto';

@Controller('period-activities')
export class PeriodActivitiesController {
  constructor(
    private readonly periodActivitiesService: PeriodActivitiesService,
  ) {}

  @Post()
  create(@Body() createPeriodActivityDto: CreatePeriodActivityDto) {
    return this.periodActivitiesService.create(createPeriodActivityDto);
  }

  @Get()
  findAll() {
    return this.periodActivitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.periodActivitiesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePeriodActivityDto: UpdatePeriodActivityDto,
  ) {
    return this.periodActivitiesService.update(+id, updatePeriodActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.periodActivitiesService.remove(+id);
  }
}
