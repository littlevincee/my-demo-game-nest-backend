import { PlayerScore } from '../schema/player-score.schema';

export interface PlayerScoreReturnType {
  page: number;
  total: number;
  data: Array<PlayerScore>;
  lastPage: number;
}
