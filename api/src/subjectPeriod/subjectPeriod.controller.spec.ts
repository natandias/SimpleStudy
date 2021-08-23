import { Test, TestingModule } from '@nestjs/testing';
import { SubjectPeriodController } from './subjectPeriod.controller';
import { SubjectPeriodService } from './subjectPeriod.service';

describe('SubjectPeriodController', () => {
  let controller: SubjectPeriodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubjectPeriodController],
      providers: [SubjectPeriodService],
    }).compile();

    controller = module.get<SubjectPeriodController>(SubjectPeriodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
