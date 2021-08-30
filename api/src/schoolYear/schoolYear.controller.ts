import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpException,
  HttpStatus,
  UseInterceptors,
} from '@nestjs/common';
import { SchoolYearsService } from './schoolYear.service';
import { CreateSchoolYearDto } from './dto/createSchoolYear.dto';
import { UpdateSchoolYearDto } from './dto/updateSchoolYear.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { NotFoundInterceptor } from '../interceptors/notFoundInterceptor';

@Controller('schoolyears')
@UseGuards(JwtAuthGuard)
export class SchoolYearsController {
  constructor(private readonly schoolYearsService: SchoolYearsService) {}

  @Get()
  findAll() {
    return this.schoolYearsService.findAll();
  }

  @Get(':id')
  @UseInterceptors(new NotFoundInterceptor('SchoolYear not found!'))
  findOne(@Param('id') id: string) {
    return this.schoolYearsService.findOne(id);
  }

  @Post()
  async create(@Body() createSchoolYearDto: CreateSchoolYearDto) {
    try {
      return await this.schoolYearsService.create(createSchoolYearDto);
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: err,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSchoolYearDto: UpdateSchoolYearDto,
  ) {
    return this.schoolYearsService.update(id, updateSchoolYearDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.schoolYearsService.remove(id);
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: err,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
