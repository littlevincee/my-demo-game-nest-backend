import { Test, TestingModule } from '@nestjs/testing';
import { PlayerScoreService } from './player-score.service';

describe('PlayerScoreService', () => {
  let service: PlayerScoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerScoreService],
    }).compile();

    service = module.get<PlayerScoreService>(PlayerScoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
