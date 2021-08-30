import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SchoolYear } from './schoolYear.entity';
import { CreateSchoolYearDto } from './dto/createSchoolYear.dto';
import { UpdateSchoolYearDto } from './dto/updateSchoolYear.dto';
import { UsersService } from '../users/users.service';
@Injectable()
export class SchoolYearsService {
  constructor(
    @InjectRepository(SchoolYear)
    private schoolYearsRepository: Repository<SchoolYear>,
    private usersService: UsersService,
  ) {}

  findAll(): Promise<SchoolYear[]> {
    return this.schoolYearsRepository.find();
  }

  findOne(id: string): Promise<SchoolYear> {
    return this.schoolYearsRepository.findOne({ id, deletedAt: null });
  }

  async create(createSchoolYearDto: CreateSchoolYearDto): Promise<SchoolYear> {
    const userExists = await this.usersService.findOne(
      createSchoolYearDto.userId,
    );
    if (!userExists) throw "User doesn't exist";
    const schoolYear = this.schoolYearsRepository.create(createSchoolYearDto);
    return this.schoolYearsRepository.save(schoolYear);
  }

  async update(
    id: string,
    updateSchoolYearDto: UpdateSchoolYearDto,
  ): Promise<SchoolYear> {
    const schoolYear = await this.schoolYearsRepository.findOne(id);

    const { name, periodsAmount } = updateSchoolYearDto;

    schoolYear.name = name;
    schoolYear.periodsAmount = periodsAmount;

    return this.schoolYearsRepository.save(schoolYear);
  }

  async remove(id: string): Promise<void> {
    const schoolYear = await this.findOne(id);
    if (!schoolYear) throw 'SchoolYear not found';
    await this.schoolYearsRepository.softRemove(schoolYear);
  }
}
