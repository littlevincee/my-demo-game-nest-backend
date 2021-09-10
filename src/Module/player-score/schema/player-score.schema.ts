import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlayerScoreDocument = PlayerScore & Document;

@Schema()
export class PlayerScore {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  score: number;
}

export const PlayerScoreSchema = SchemaFactory.createForClass(PlayerScore);
