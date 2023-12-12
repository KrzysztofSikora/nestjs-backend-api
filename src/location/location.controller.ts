import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateLocationInput } from './model/location.input'
import { LocationService } from './location.service'

@Controller({
  path: 'locations',
  version: '1',
})
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  createLocation(@Body() body: CreateLocationInput) {
    return this.locationService.createLocation(body)
  }
  @Get('/')
  listMappedLocation() {
    return this.locationService.listMappedLocation()
  }
  @Get('/list')
  listLocation() {
    return this.locationService.listLocation()
  }
  @Get('/seed')
  async seedLocation() {
    return await this.locationService.seedLocation()
  }
}
