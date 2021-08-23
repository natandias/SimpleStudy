import { Test, TestingModule } from '@nestjs/testing';
import { PeriodController } from './subject.controller';
import { PeriodService } from './subject.service';

describe('SubjectController', () => {
  let controller: PeriodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeriodController],
      providers: [PeriodService],
    }).compile();

    controller = module.get<PeriodController>(PeriodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
