import { Injectable, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request } from 'express';
import { CreatePlayerScoreDto } from './dto/createPlayerScore';
import { PlayerScore, PlayerScoreDocument } from './schema/player-score.schema';
import { PlayerScoreReturnType } from './interface/player-score.interface';

@Injectable()
export class PlayerScoreService {
  constructor(
    @InjectModel(PlayerScore.name)
    private readonly playerScoreModel: Model<PlayerScoreDocument>,
  ) {}

  async addScore(createPlayerScoreDto: CreatePlayerScoreDto) {
    const createPlayerScore = new this.playerScoreModel(createPlayerScoreDto);
    return createPlayerScore.save();
  }

  async findSocreByPagination(
    @Req() req: Request,
  ): Promise<PlayerScoreReturnType> {
    const query = this.playerScoreModel.find();

    const page: number = parseInt(req.query.page as any) || 1;
    const limit = 100;
    const total = await this.playerScoreModel.count().exec();

    const data = await query
      .sort({ score: 'desc' })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    return {
      page,
      total,
      data,
      lastPage: Math.ceil(total / limit),
    };
  }
}
