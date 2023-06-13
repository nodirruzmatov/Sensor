import { Controller, Post, Patch, Param, Delete, Body, UseGuards, UseInterceptors, UploadedFiles,Get } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { createDto } from './dto/create.dto';
import { updateDto } from './dto/update.dto';
import { JwtGuard } from '../auth/guard/jwt.guard';


@Controller('sensor')
export class SensorController{
  constructor(private readonly service: SensorService){}

  @UseGuards(JwtGuard)
  @Get('read')
  readSensor(){
    return this.service.readSensor()
  }

  @UseGuards(JwtGuard)
  @Post('create')
  createSensor(@Body() body:createDto){
    return this.service.createSensor(body)
  }

  @UseGuards(JwtGuard)
  @Patch('update/:id')
  updateSensore(@Param('id') id: string, @Body() body:updateDto){
    return this.service.updateSensor(id,body)
  }

  @UseGuards(JwtGuard)
  @Delete('delete/:id')
  delteSensor(@Param('id') id: string){
    return this.service.deleteSensor(id)
  }

}