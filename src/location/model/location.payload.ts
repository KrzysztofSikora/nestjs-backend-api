import { PartialType } from '@nestjs/swagger'
import { Location } from './location.schema'

export class LocationPayload extends PartialType(Location) {
  createdA?: string
  updateAt?: string
}
