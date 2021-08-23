import { Test, TestingModule } from '@nestjs/testing';
import { PeriodActivitiesController } from './periodActivities.controller';
import { PeriodActivitiesService } from './periodActivities.service';

describe('PeriodActivitiesController', () => {
  let controller: PeriodActivitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeriodActivitiesController],
      providers: [PeriodActivitiesService],
    }).compile();

    controller = module.get<PeriodActivitiesController>(PeriodActivitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
