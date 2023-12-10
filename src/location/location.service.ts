import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Location } from './model/location.schema'
import { Model } from 'mongoose'
import { CreateLocationInput } from './model/location.input'
import { LocationPayload } from './model/location.payload'

@Injectable()
export class LocationService {
  constructor(
    @InjectModel(Location.name) private locationModel: Model<Location>
  ) {}

  async createLocation(body: CreateLocationInput): Promise<LocationPayload> {
    const createdLocation = new this.locationModel(body)
    const Location = await createdLocation.save()
    return Location
  }

  async findLocation(id: string): Promise<LocationPayload> {
    const Location = await this.locationModel.findOne({ _id: id }).exec()

    if (!Location) {
      throw new NotFoundException(`Location with email id:${id} not found `)
    }
    return Location
  }
  async listMappedLocation(): Promise<any[]> {
    const Locations = await this.locationModel.find()
    return Locations.map((location) => {
      return { latitude: location.latitude, longitude: location.longitude }
    })
  }
  async listLocation(): Promise<LocationPayload[]> {
    const Locations = await this.locationModel.find()
    return Locations
  }
}
