import { Module } from '@nestjs/common'
import { LocationService } from './location.service'
import { LocationController } from './location.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Location, LocationSchema } from './model/location.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Location.name, schema: LocationSchema }]),
  ],
  providers: [LocationService],
  controllers: [LocationController],
})
export class LocationModule {}
