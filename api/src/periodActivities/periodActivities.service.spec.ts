import { Test, TestingModule } from '@nestjs/testing';
import { PeriodActivitiesService } from './periodActivities.service';

describe('PeriodActivitiesService', () => {
  let service: PeriodActivitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeriodActivitiesService],
    }).compile();

    service = module.get<PeriodActivitiesService>(PeriodActivitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
