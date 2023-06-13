import { Module } from '@nestjs/common';
import { MqttModule } from './modules/mqtt/mqtt.module';
import { AuthModule } from './modules/auth/auth.module';
import { RegionModule } from './modules/region/region.module';
import { DistrictModule } from './modules/district/district.module';
import { ConfigModule } from '@nestjs/config';
import { config } from './config';
import { MongooseModule } from '@nestjs/mongoose';
import { StationModule } from './modules/station/station.module';
import { SensorModule } from './modules/sensor/sensor.module';
import { RoleModule } from './modules/role/role.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(config),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      connectionName: 'User',
    }),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      connectionName: 'Region',
    }),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      connectionName: 'District',
    }),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      connectionName: 'Station',
    }),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      connectionName: 'Sensor',
    }),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      connectionName: 'Role',
    }),
    MqttModule,
    AuthModule,
    RegionModule,
    StationModule,
    RoleModule,
    DistrictModule,
    SensorModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
