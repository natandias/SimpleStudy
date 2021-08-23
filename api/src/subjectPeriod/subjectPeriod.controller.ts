import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubjectPeriodService } from './subjectPeriod.service';
import { CreateSubjectPeriodDto } from './dto/create-subject-period.dto';
import { UpdateSubjectPeriodDto } from './dto/update-subject-period.dto';

@Controller('subject-period')
export class SubjectPeriodController {
  constructor(private readonly subjectPeriodService: SubjectPeriodService) {}

  @Post()
  create(@Body() createSubjectPeriodDto: CreateSubjectPeriodDto) {
    return this.subjectPeriodService.create(createSubjectPeriodDto);
  }

  @Get()
  findAll() {
    return this.subjectPeriodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjectPeriodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjectPeriodDto: UpdateSubjectPeriodDto) {
    return this.subjectPeriodService.update(+id, updateSubjectPeriodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectPeriodService.remove(+id);
  }
}
