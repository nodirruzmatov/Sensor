import Mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Sensor } from 'src/modules/sensor/schema/sensor.schema';
import mongoose from 'mongoose';

export type StationDocument = HydratedDocument<Station>;

@Schema({ collection: 'station' })
export class Station {
  @Prop({
    type: Mongoose.Schema.Types.ObjectId,
  })
  readonly id: String;

  @Prop({
    type: String,
    required: true,
  })
  readonly name: string;

  @Prop({
    type: String,
    required: true,
  })
  readonly topic: string;

  @Prop({
    type: String,
    required: true,
  })
  readonly lat: string;

  @Prop({
    type: String,
    required: true,
  })
  readonly lon: string;

  @Prop({
    type: String,
    required: true,
  })
  readonly simkarta: string;

  @Prop({
    type: Number,
    required: true,
  })
  readonly region: Number;

  @Prop({
    type: Number,
    required: true,
  })
  readonly district: Number;

  
  @Prop({
    type: mongoose.Schema.Types.ObjectId, ref: 'Sensor',
    required: true,
  })
  readonly sensor: Sensor;
}

export const stationSchema = SchemaFactory.createForClass(Station);
