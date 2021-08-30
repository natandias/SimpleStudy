import { PartialType } from '@nestjs/mapped-types';
import { CreateSchoolYearDto } from './createSchoolYear.dto';

export class UpdateSchoolYearDto extends PartialType(CreateSchoolYearDto) {}
