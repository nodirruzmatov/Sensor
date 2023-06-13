import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Sensor, sensorSchema } from './schema/sensor.schema';
import { SensorController } from './sensor.controller';
import { SensorService } from './sensor.service';

@Module({
  imports:[
    MongooseModule.forFeature(
      [
        {
          name: Sensor.name,
          schema: sensorSchema,
        },
      ],
      'Sensor',
    ),
  ],
  controllers:[SensorController],
  providers: [SensorService]
})
export class SensorModule{}