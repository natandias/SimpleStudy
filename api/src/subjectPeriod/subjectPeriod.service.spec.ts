import { Test, TestingModule } from '@nestjs/testing';
import { SubjectPeriodService } from './subjectPeriod.service';

describe('SubjectPeriodService', () => {
  let service: SubjectPeriodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubjectPeriodService],
    }).compile();

    service = module.get<SubjectPeriodService>(SubjectPeriodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
