import { Body, Controller, Post, Get, Req } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { PlayerScoreService } from './player-score.service';
import { CreatePlayerScoreDto } from './dto/createPlayerScore';
import { Request } from 'express';
import { PlayerScoreReturnType } from './interface/player-score.interface';

@ApiTags('Player-Score')
@Controller('api/player-score')
export class PlayerScoreController {
  constructor(private readonly playerScoreService: PlayerScoreService) {}

  @ApiOperation({ summary: 'Create a new record of latest player score' })
  @Post()
  async addScore(@Body() createPlayerScoreDto: CreatePlayerScoreDto) {
    await this.playerScoreService.addScore(createPlayerScoreDto);
  }

  @ApiOperation({ summary: 'Get all player score with pagination' })
  @ApiResponse({
    status: 200,
    description: 'Paginated response of player name and its score',
  })
  @ApiParam({
    name: 'page',
    description: 'a page number to fetch a list player score',
  })
  @Get('/getScoreByPagination')
  async findSocreByPagination(
    @Req() req: Request,
  ): Promise<PlayerScoreReturnType> {
    return this.playerScoreService.findSocreByPagination(req);
  }
}
