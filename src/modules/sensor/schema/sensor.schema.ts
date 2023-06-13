import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import Mongoose ,{ HydratedDocument, } from "mongoose";



export type SensorDocument = HydratedDocument<Sensor>

@Schema({collection:'sensor'})
export class Sensor{
  @Prop({
    type: Mongoose.Schema.Types.ObjectId
  })
  readonly id: string

  @Prop({
    type: String,
    required: true,
  })
  readonly name: string;

  @Prop({
    type: Number,
    required: true,
  })
  readonly idNumber: Number;

}

export const sensorSchema = SchemaFactory.createForClass(Sensor)