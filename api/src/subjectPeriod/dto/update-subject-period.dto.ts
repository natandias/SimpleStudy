import { PartialType } from '@nestjs/mapped-types';
import { CreateSubjectPeriodDto } from './create-subject-period.dto';

export class UpdateSubjectPeriodDto extends PartialType(
  CreateSubjectPeriodDto,
) {}
