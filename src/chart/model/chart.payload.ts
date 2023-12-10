import { PartialType } from '@nestjs/swagger'
import { Chart } from './chart.schema'

export class ChartPayload extends PartialType(Chart) {
  createdA?: string
  updateAt?: string
}
