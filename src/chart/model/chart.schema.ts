import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type ChartDocument = HydratedDocument<Chart>

@Schema({ collection: 'chart', timestamps: true })
export class Chart {
  @Prop()
  label: string
  @Prop()
  data: number[]
  @Prop()
  backgroundColor: string
  @Prop()
  borderColor: string
  @Prop()
  borderWidth: number
  @Prop()
  borderSkipped?: boolean
}

export const ChartSchema = SchemaFactory.createForClass(Chart)
