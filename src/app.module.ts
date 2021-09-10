import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { PlayerScoreModule } from './module/player-score/player-score.module';
import { MongooseConfigService } from './service/MongooseConfigService';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    PlayerScoreModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
