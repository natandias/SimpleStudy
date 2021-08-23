import { PartialType } from '@nestjs/mapped-types';
import { CreatePeriodActivityDto } from './createPeriodActivity.dto';

export class UpdatePeriodActivityDto extends PartialType(
  CreatePeriodActivityDto,
) {}
