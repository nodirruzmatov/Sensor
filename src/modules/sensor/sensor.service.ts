import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sensor, SensorDocument } from './schema/sensor.schema';
import { Model } from 'mongoose';


@Injectable()
export class SensorService {

  constructor(
  @InjectModel(Sensor.name, 'Sensor')
  private readonly sensorModel: Model<SensorDocument>
  ){}

  // ! READ SENSOR
  async readSensor(){
    const allSensors = await this.sensorModel.find()
    return allSensors
  }


  // ! CREATE SENSOR 
  async createSensor(payload){
    const foundSensor = await this.sensorModel.findOne(payload)

    if(foundSensor){
      throw new HttpException('This sensor already has created', HttpStatus.BAD_REQUEST)
    }

    const newSensor = await this.sensorModel.create(payload)

    return newSensor
  }


  // ! UPDATE SENSOR
  async updateSensor(id:string, payload) {
    const foundSensor = await this.sensorModel.findById(id)

    if(!foundSensor){
      throw new HttpException('Sensor not found', HttpStatus.NOT_FOUND)
    }

    const updateSensor = await this.sensorModel.findByIdAndUpdate({_id:id},payload)

    if(updateSensor){
      return updateSensor
    }
  }


  // ! DELETE SENSOR 
  async deleteSensor(id:string) {
    const foundSensor = await this.sensorModel.findById(id)

    if(!foundSensor){
      throw new HttpException('This sensor not found', HttpStatus.NOT_FOUND)
    }

    const delteSensor = await this.sensorModel.findByIdAndDelete({_id:id})

    if (delteSensor) {
      return delteSensor;
    }
  }

}