import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerScoreController } from './player-score.controller';
import { PlayerScoreService } from './player-score.service';
import { PlayerScore, PlayerScoreSchema } from './schema/player-score.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PlayerScore.name, schema: PlayerScoreSchema },
    ]),
  ],
  controllers: [PlayerScoreController],
  providers: [PlayerScoreService],
})
export class PlayerScoreModule {}
