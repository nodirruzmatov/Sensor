import { Controller, Post, Patch, Param, Delete, Body, UseGuards, UseInterceptors, UploadedFiles,Get } from '@nestjs/common';
import { StationService } from './station.service';
import { createDto } from './dto/create.dto';
import { Station } from './schema/station.schema';
import { updateDto } from './dto/update.dto';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('station')
export class StationController {
  constructor(private readonly service: StationService) {}

  @UseGuards(JwtGuard)
  @Get('read')
  readStation(){
    return this.service.readStation()
  }

  @UseGuards(JwtGuard)
  @Post('create')
  createStation(@Body() body: createDto): Promise<Station> {
    return this.service.createStation(body);
  }

  // @UseGuards(JwtGuard)
  // @Post('many')
  // @UseInterceptors(FilesInterceptor('file'))
  // createManyDistrict(@UploadedFiles() file) {
  //   return this.service.createManyStation(file)
  // }

  @UseGuards(JwtGuard)
  @Patch('update/:id')
  updateStation(
    @Param('id') id: string,
    @Body() body: updateDto,
  ): Promise<Station> {
    return this.service.updateStation(id, body);
  }

  @UseGuards(JwtGuard)
  @Delete('delete/:id')
  deleteStation(@Param('id') id: string): Promise<Station> {
    return this.service.deleteStation(id);
  }
}
