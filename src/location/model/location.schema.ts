import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type LocationDocument = HydratedDocument<Location>

@Schema({ collection: 'location', timestamps: true })
export class Location {
  @Prop()
  latitude: number

  @Prop()
  longitude: number
}

export const LocationSchema = SchemaFactory.createForClass(Location)
